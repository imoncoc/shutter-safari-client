import './SecondaryButton.css'

const SecondaryButton = ({name, icon, width}) => {
    return (
      <button className={`shutter-secondary-button ${width}`}>
        {name} {icon}{" "}
      </button>
    );
};

export default SecondaryButton;