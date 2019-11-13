import React from "react";
import homeIcon from './homeIcon.png'
import "./FooterComponentStyle.css"

const FooterComponent = props => {
  return (
    <div>
      <footer className={"footer"}>
        <img className={"homeIcon"} src={homeIcon} alt=""/>
      </footer>
    </div>
  );
};

export default FooterComponent;
