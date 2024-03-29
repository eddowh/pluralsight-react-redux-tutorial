/**
 * Select input component.
 */

import React, {PropTypes} from 'react';


const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select type="text" name={name} value={value} onChange={onChange}>
          <option value="">
            {defaultOption}
          </option>
          {
            options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
          }
        </select>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
}

export default SelectInput;
