import './ThirdButton.css';

const ThirdButton = ({name, width, icon}) => {
    return <button className={`shatter-third-button ${width? width: ""}`}>{name}{icon} </button>;
};

export default ThirdButton;