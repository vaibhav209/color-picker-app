import React from 'react';

const RangeSlider = ({ className, bgColor, value, style, onChange }) => {
  return (
    <div>
      <div className={className} style={{ backgroundColor: bgColor }} />
      <input
        type={'range'}
        min={'0'}
        max={'255'}
        value={value}
        style={style}
        onChange={onChange}
      />
    </div>
  );
};

export default RangeSlider;
