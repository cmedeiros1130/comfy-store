import React from "react";

const FormInput = ({ label, name, type, value, size, onChange }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={`input input-bordered ${size}`}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
