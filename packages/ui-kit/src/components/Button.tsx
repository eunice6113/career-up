import React from "react";

import style from "./Button.module.css";

const Button: React.FC = ({children, onClick}:any) => {
    return <button onClick={onClick} className={style.pinkButton}>{children}</button>
}; 
export default Button;