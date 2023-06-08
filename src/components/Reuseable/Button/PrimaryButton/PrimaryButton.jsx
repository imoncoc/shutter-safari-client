import './PrimaryButton.css'

const PrimaryButton = ({name, width, icon}) => {

    return (
        <button className={`shatter-primary-button ${width}`} type='submit'>
            {icon}{name}
        </button>
    );
};

export default PrimaryButton;