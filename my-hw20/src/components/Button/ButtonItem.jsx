import React from "react";

const ButtonItem = ({clickOnButton}) => {
    return (
        <button type="button" onClick={clickOnButton}>
            <span> Показать информацию </span>
        </button>
    )
}

export default ButtonItem