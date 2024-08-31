import React from "react";

import style from "./Button.module.css";

const Button: React.FC = ({name, onClick}:any) => {
    return <button onClick={onClick} className={style.pinkButton}>{name}</button>
}; 
export default Button;