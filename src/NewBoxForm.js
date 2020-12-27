import React, { useState } from "react";
import "./NewBoxForm.css"
import { v4 as uuid } from 'uuid';


const NewBoxForm = ({ FormSubmit }) => {
    const INITIAL_STATE = {
        backgroundColor: "",
        width: "",
        height: "",
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit = evt => {
        evt.preventDefault();
        FormSubmit({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div>
            <form className="NewBoxForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="backgroundColor">Color</label>
                    <input
                        id="backgroundColor"
                        type="text"
                        name="backgroundColor"
                        value={formData.backgroundColor}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input
                        id="width"
                        type="text"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <button>Add Box</button>
            </form>
        </div>
    )
}


export default NewBoxForm;