import { useState } from "react";
import "./index.css";

const Header = ({children,button}) =>{
    const {state, setSelected} = button;
    console.log(setSelected)

    return (
        <header className="header-app">
            <button onClick={()=>setSelected()} className={`toggle-button${ state && " selected" }` }>
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
            </button>
            {children}
        </header>
    );
}
export default Header;