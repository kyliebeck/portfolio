import React from "react";
import "./css/ToggleSwitch.css";

const ToggleSwitch = ({ checked, onChange, label }) => {
    return (
        <label className="toggle-switch">
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider"></span>
            {label && <span className="label-text">{label}</span>}
        </label>
    );
};

export default ToggleSwitch;
