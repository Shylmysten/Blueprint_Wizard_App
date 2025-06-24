'use client';
import React from 'react';
import cx from 'classnames';

export default function ItemSelect({ section, items, selected, onChange, disabled, isInterior }) {

  return (
    <div style={section && {marginTop: '1rem'}}>
      <label htmlFor="item" className={`itemLabel ${section === 'undefined' ? 'sr-only' : ''}`}>{section && 'Mobile Menu Layout'}</label>
      <select id="item" value={selected} onChange={onChange} disabled={disabled} className={cx('itemSelect', {'headerItemSelectColor': section === 'header'})}>
        <option value="">-- Select {isInterior ? 'Layout Columns' : section !== 'header' ? 'Pattern' : ''} --</option>
        {items.map((item, i) => (
          <option 
            key={i} 
            value={item.value} 
            disabled={item?.disabled || false}
            >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}