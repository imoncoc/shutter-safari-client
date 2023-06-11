
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UserCheckoutForm from "../UserCheckoutForm/UserCheckoutForm";
import { useParams } from "react-router-dom";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const UserPayment = () => {
    const { id } = useParams();
   const [cart] = useCart();
   const cartItem = cart.find((item) => id === item._id )
   const total = cartItem?.price;
   const price = parseFloat(total.toFixed(2));

    return (
      <>
        <main className="mt-2 pt-3">
          <h2>This is User Payment</h2>
          <Elements stripe={stripePromise}>
            <UserCheckoutForm cartItem={cartItem} price={price}></UserCheckoutForm>
          </Elements>
        </main>
      </>
    );
};

export default UserPayment;