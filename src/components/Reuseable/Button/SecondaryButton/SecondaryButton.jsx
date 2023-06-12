import './SecondaryButton.css'

const SecondaryButton = ({ name, icon, width, disabled }) => {
  return (
    <button className={`shutter-secondary-button ${width}`} disabled={disabled}>
      {name} {icon}{" "}
    </button>
  );
};

export default SecondaryButton;