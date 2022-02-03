import { useState } from "react";
import React from "react";
import Comments from "./Comments.js";

function HideButton() {
  const [isBtn, setIsHideBtn] = useState(true);

  function handleSetIsHideBtn() {
    setIsHideBtn(!isBtn);
  }

  return (
    <>
      <button onClick={handleSetIsHideBtn}>
        {isBtn ? "Hide Comments" : "Show Comments"}
      </button>
      <Comments isBtnStatus={isBtn} />
    </>
  );
}

export default HideButton;
