import React from "react";
import "./LabelPrice.css";

function LabelPrice(props) {
    return(
        <div>
            <span className="label-price">${props.price}</span>
        </div>
    )
}

export default LabelPrice;