'use client';
import React from 'react';

export default function ItemSelect({ section, items, selected, onChange }) {
  return (
    <div>
      <label htmlFor="item" className={`itemLabel ${section === 'undefined' ? 'sr-only' : ''}`}>{section && 'Mobile Menu Style'}</label>
      <select id="item" value={selected} onChange={onChange} className="itemSelect">
        <option value="">-- Choose an item --</option>
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