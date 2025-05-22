'use client';
import React from 'react';

export default function CategorySelect({ section, categories, selected, onChange }) {
  const isHeaderSection = typeof section === 'string';

  return (
    <div style={{ marginTop: '1rem' }}>
      <label htmlFor={isHeaderSection ? 'header' : `section${section}`} className="categoryLabel">{isHeaderSection ? 'Header Layout' : `Section ${section} Content:`} </label><br />
      <select id={isHeaderSection ? 'header' : `section${section}`} value={selected} onChange={onChange} className="categorySelect">
        <option value="">-- Choose a category --</option>
        {Object.keys(categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
