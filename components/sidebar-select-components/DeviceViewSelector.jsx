import styles from '@/components/sidebar-select-components/DeviceViewSelector.module.css'

export default function DeviceViewSelector({ iframeClass, setDefaultClass, setTabletClass, setMobileClass }) {
  return (
    <div className={`${styles.deviceWidths} col-sm-12`}>
      <h5>Device Views</h5>
      <div className="col-xs-hidden col-sm-12 col-md-12">
        <div className={`col-sm-4 ${iframeClass === '' ? styles.activeView : ''}`}>
          <button onClick={setDefaultClass}>
            <span className='sr-only'>Desktop View</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"/></svg>
          </button>
        </div>
        <div className={`col-sm-4 ${iframeClass === 'tablet' ? styles.activeView : ''}`}>
          <button onClick={setTabletClass}>
            <span className='sr-only'>Tablet</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"/></svg>
          </button>
        </div>
        <div className={`col-sm-4 ${iframeClass === 'mobile' ? styles.activeView : ''}`}>
          <button onClick={setMobileClass}>
            <span className='sr-only'>Mobile</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}