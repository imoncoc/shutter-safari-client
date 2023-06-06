import './PrimaryButton.css'

const PrimaryButton = ({name}) => {
    return (
        <button className="shatter-primary-button">
            {name}
        </button>
    );
};

export default PrimaryButton;