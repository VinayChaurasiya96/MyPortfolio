import React from "react";
import "./style.scss";

const PageHeader = (props) => {
  const {HeaderText, Icon} = props;
  return (
    <div className="wrapper">
      <h2>{HeaderText}</h2>
      <span>{Icon}</span>
    </div>
  );
};

export default PageHeader;
