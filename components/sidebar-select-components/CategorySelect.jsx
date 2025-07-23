'use client';
import React from 'react';

export default function CategorySelect({ section, categories, selected, onChange, disabled, isInterior }) {
  const isHeaderSection = typeof section === 'string';


  return (
    <div style={{ marginTop: '1rem' }}>
      <label htmlFor={isHeaderSection ? 'header' : `section${section}-cat`} className="categoryLabel">{isHeaderSection ? 'Desktop Layout' : `Section ${section}:`} </label><br />
      <select id={isHeaderSection ? 'header' : `section${section}-cat`} value={selected} onChange={onChange} disabled={disabled} className="categorySelect">
        <option value="">-- Select {isInterior ? 'Layout Style' : !isHeaderSection ? 'Content' : ''} --</option>
        {Object.keys(categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
