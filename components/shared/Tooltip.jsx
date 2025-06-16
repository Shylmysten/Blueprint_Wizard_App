import React from 'react';
import styles from './Tooltip.module.css'

const Tooltip = ({ content, children }) => (
  <span className={styles.tooltipWrapper}>
    {children}
    <span className={styles.tooltipContent} role="tooltip">
      {content}
    </span>
  </span>
);
 
export default Tooltip;