import React from 'react';
import styles from './ToggleSwitch.module.css';
import Tooltip from './Tooltip';


const tooltipContentMap = {
  MegaMenu: "Hover over navigation to view dropdown layout changes",
  "Social Icons": "Social Icons toggles the icons located in the header",
  "Member Tools": "Member Tools toggles the blue bar located above the header",
};

function getTooltipContent(label) {
  return tooltipContentMap[label] || "Toggle this setting on or off.";
}

const ToggleSwitch = ({ id, checked, onChange, label, onKeyDown, disabled }) => (
  <div className={styles.toggleSwitchWrapper}>
    {label && (
      <label id={styles.label} htmlFor={id} className={styles.label} aria-label={`${label === 'MegaMenu' ? "MegaMenu's" : label} are ${checked ? 'turned on' : 'turned off'}`}>
        {label}
      </label>
    )}
    <div
      className={styles.container}
      role="switch"
      aria-checked={checked}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onChange} // Prevent click when disabled
      onKeyDown={disabled ? undefined : onKeyDown} // Prevent keydown when disabled
      aria-disabled={disabled}
      style={disabled ? { opacity: 0.5, pointerEvents: 'none' } : {}}
    >
        {label === 'MegaMenu' && (
        <Tooltip content={getTooltipContent(label)}>
          <span className={styles.icon} aria-label="More info" tabIndex={0}>
            {/*<i aria-label="More info" className="fas fa-info-circle"></i>*/}
            <i className="fa-solid fa-info"></i>
          </span>
        </Tooltip>
        )}
      <div className={styles.switch}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-hidden="true"
          tabIndex={-1}
          aria-describedby={styles.label}
          disabled={disabled}
        />
        <span className={`${styles.slider} ${styles.round}`} />
      </div>

    </div>
  </div>
);

export default ToggleSwitch;