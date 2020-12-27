import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = () => {

    const [boxes, setBoxes] = useState([])

    const FormSubmit = (data) => {
        setBoxes(c => [...c, data])
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const renderBox = () => {
        return (
            <div className="BoxList-box">
                {boxes.map(b => (
                    <Box
                        id={b.id}
                        color={b.backgroundColor}
                        w={b.width}
                        h={b.height}
                        removeBox={removeBox} />
                ))}
            </div>
        )
    }

    return (
        <div className="BoxList">
            <NewBoxForm FormSubmit={FormSubmit} />
            {renderBox()}
        </div>
    )
}

export default BoxList;