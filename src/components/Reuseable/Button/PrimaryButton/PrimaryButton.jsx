import './PrimaryButton.css'

const PrimaryButton = ({name, width, icon, disabled}) => {

    return (
      <button
        className={`shutter-primary-button ${width}`}
        type="submit"
        disabled={disabled}
      >
        {icon}
        {name}
      </button>
    );
};

export default PrimaryButton;