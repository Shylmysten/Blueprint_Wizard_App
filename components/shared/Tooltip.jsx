import React, { useId } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ content, children }) => {
  const tooltipId = useId();

  // Clone the child to add aria-describedby and tabIndex if needed
  const trigger = React.isValidElement(children)
    ? React.cloneElement(children, {
        'aria-describedby': tooltipId,
        tabIndex: children.props.tabIndex ?? 0,
      })
    : children;

  return (
    <span className={styles.tooltipWrapper}>
      {trigger}
      <span
        id={tooltipId}
        className={styles.tooltipContent}
        role="tooltip"
        aria-live="polite"
      >
        {content}
      </span>
    </span>
  );
};

export default Tooltip;