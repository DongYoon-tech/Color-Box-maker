import React from "react";
import "./Box.css"

const Box = ({ color, w, h, id, removeBox }) => {

    const deleteBox = () => removeBox(id)

    return (
        <div className="Box">
            <div className="Box-single" style={{
                backgroundColor: color,
                width: `${w}px`,
                height: `${h}px`,
            }}>

            </div>
            <button onClick={deleteBox}>x</button>

        </div>
    )
}

export default Box;