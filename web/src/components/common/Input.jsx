// web/src/components/common/Input.jsx - Reusable input component
import React from 'react';
import './Input.css';

const Input = ({
  label,
  error,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const inputClass = [
    'input__field',
    error ? 'input__field--error' : '',
    disabled ? 'input__field--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input">
      {label && (
        <label className="input__label">
          {label}
          {required && <span className="input__required">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClass}
        {...props}
      />
      {error && (
        <span className="input__error">{error}</span>
      )}
    </div>
  );
};

export default Input;
