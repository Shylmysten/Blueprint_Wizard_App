import React from 'react';
import styles from './ToggleSwitch.module.css';
const ToggleSwitch = ({ id, checked, onChange, label, onKeyDown }) => (
  <div>
    {label && (
      <label htmlFor={id} className={styles.label} aria-label={`${label === 'MegaMenu' ? "MegaMenu's" : label} are ${checked ? 'turned on' : 'turned off'}`}>
        {label}
      </label>
    )}
    <div
      className={styles.container}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onClick={onChange}
      onKeyDown={onKeyDown}
    >
      <span className={styles.off}>Off</span>
      <div className={styles.switch}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-hidden="true"
          tabIndex={-1}
        />
        <span className={`${styles.slider} ${styles.round}`} />
      </div>
      <span className={styles.on}>On</span>
    </div>
  </div>
);

export default ToggleSwitch;