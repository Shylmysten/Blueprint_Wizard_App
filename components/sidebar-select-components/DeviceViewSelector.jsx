import styles from '@/components/sidebar-select-components/DeviceViewSelector.module.css'

export default function DeviceViewSelector({ iframeClass, setDefaultClass, setTabletClass, setMobileClass }) {
  return (
    <div className={`${styles.deviceWidths} col-sm-12`}>
      <h2>Device Views</h2>
      <div className={styles.iconWrapper}>
        <div className={`icon ${iframeClass === '' ? styles.activeView : ''}`}>
          <button onClick={setDefaultClass}>
            <span className='sr-only'>Desktop View</span>
            <i className="fas fa-tv"></i>
          </button>
        </div>
        <div className={`icon ${iframeClass === 'tablet' ? styles.activeView : ''}`}>
          <button onClick={setTabletClass}>
            <span className='sr-only'>Tablet</span>
            <i className="fas fa-tablet-alt"></i>
          </button>
        </div>
        <div className={`icon ${iframeClass === 'mobile' ? styles.activeView : ''}`}>
          <button onClick={setMobileClass}>
            <span className='sr-only'>Mobile</span>
            <i className="fas fa-mobile-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}