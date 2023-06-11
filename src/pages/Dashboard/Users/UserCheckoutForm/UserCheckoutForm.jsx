import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-toastify";


const UserCheckoutForm = ({ cartItem, price }) => {
    const {user} = useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    axiosSecure.post(`/create-payment-intent`, {price})
    .then((res)=> {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    //   console.log(`payment method`, paymentMethod);
    }
    setProcessing(true)

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'Unknown',
                name: user?.displayName || 'Anonymous',
            }
        }
    })

    if(confirmError){
        console.log(confirmError)
    }
    console.log(paymentIntent);
    setProcessing(false)

    if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id);
        // Save payment information to the server
        const payment = {
            email: user?.email,
            transactionId,
            price,
            quantity: cartItem.length,
            items: cartItem._id,
            itemNames: cartItem.name
        }
        axiosSecure.post('/payments', payment)
        .then((res) => {
            console.log(res.data)
            if(res.data.insertedId){
                // Display Confirm
                 toast.success("Successfully enrolled the class", {
                   position: toast.POSITION.TOP_CENTER,
                 });
            }
        })
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              {/* <button type="submit" disabled={!stripe}>
          Pay
        </button> */}
              <span className="my-3">
                <button
                  type="submit"
                  disabled={!stripe || !clientSecret || processing}
                  className="btn btn-success"
                >
                  Pay
                </button>
                {/* <PrimaryButton name={"Pay"}></PrimaryButton> */}
              </span>
            </form>

            {cardError && (
              <div className="alert alert-danger" role="alert">
                {cardError}
              </div>
            )}
            {transactionId && (
              <div className="alert alert-success" role="alert">
                Transaction complete with transactionId: {transactionId}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCheckoutForm;
