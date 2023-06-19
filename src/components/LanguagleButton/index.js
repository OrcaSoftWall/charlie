import { useState, useContext } from "react";
import LanguageContext from "../../context.js";

const LanguageButton = (props) => {
  const { selectLanguage } = useContext(LanguageContext);
  const [isHover, setIsHover] = useState(false);
  // const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    selectLanguage(props.language); // Pass the desired language to selectLanguage
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // const handleOnSelect = () => {
  //   setIsSelected(true);
  // }

  const boxStyle = {
    display: 'inline',
    background: 'transparent',
    backgroundImage: isHover ? `url(${props.hoverImage})` : `url(${props.nonHoverImage})`,
    padding: '10px',
    color: 'white',
    borderRadius: '4px',
    margin: '0 auto',
    border: 'none',
    marginTop: '0.5%',
    marginBottom: '2%',
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease'
  };

  return (
    <div>
      <button style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </div>
  );
};

export default LanguageButton;
