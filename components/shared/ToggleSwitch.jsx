import React from 'react';
import styles from './ToggleSwitch.module.css';
import Tooltip from './ToolTip';

const tooltipContentMap = {
  MegaMenu: "MegaMenu enables a large dropdown menu for navigation.",
  "Social Icons": "Social Icons are located in the header",
  "Member Tools": "Member Tools is the blue bar located above the header",
};

function getTooltipContent(label) {
  return tooltipContentMap[label] || "Toggle this setting on or off.";
}

const ToggleSwitch = ({ id, checked, onChange, label, onKeyDown }) => (
  <div className={styles.toggleSwitchWrapper}>
    {label && (
      <label htmlFor={id} className={styles.label} aria-label={`${label === 'MegaMenu' ? "MegaMenu's" : label} are ${checked ? 'turned on' : 'turned off'}`}>
        {label}
        <Tooltip content={getTooltipContent(label)}>
          <span aria-label="More info" tabIndex={0} style={{ marginLeft: 6, cursor: 'pointer' }}>ⓘ</span>
        </Tooltip>
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