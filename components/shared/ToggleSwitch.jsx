import React from 'react';
import styles from './ToggleSwitch.module.css';
import Tooltip from './Tooltip';


const tooltipContentMap = {
  MegaMenu: "MegaMenu enables a large dropdown menu for navigation.",
  "Social Icons": "Social Icons toggles the icons located in the header",
  "Member Tools": "Member Tools toggles the blue bar located above the header",
};

function getTooltipContent(label) {
  return tooltipContentMap[label] || "Toggle this setting on or off.";
}

const ToggleSwitch = ({ id, checked, onChange, label, onKeyDown }) => (
  <div className={styles.toggleSwitchWrapper}>
    {label && (
      <label id={styles.label} htmlFor={id} className={styles.label} aria-label={`${label === 'MegaMenu' ? "MegaMenu's" : label} are ${checked ? 'turned on' : 'turned off'}`}>
        {label}
        {label === 'MegaMenu' && (
        <Tooltip content={getTooltipContent(label)}>
          <span aria-label="More info" tabIndex={0} style={{ marginLeft: 6, cursor: 'pointer' }}><i aria-label="More info" className="fas fa-info-circle"></i></span>
        </Tooltip>
        )}

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

      <div className={styles.switch}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-hidden="true"
          tabIndex={-1}
          aria-describedby={styles.label}
        />
        <span className={`${styles.slider} ${styles.round}`} />
      </div>

    </div>
  </div>
);

export default ToggleSwitch;