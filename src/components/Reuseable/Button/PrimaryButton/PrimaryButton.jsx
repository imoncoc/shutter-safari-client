import './PrimaryButton.css'

const PrimaryButton = ({name, width}) => {

    return (
        <button className={`shatter-primary-button ${width}`} type='submit'>
            {name}
        </button>
    );
};

export default PrimaryButton;