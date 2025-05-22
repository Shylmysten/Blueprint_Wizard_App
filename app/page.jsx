'use client';
import { useState, useRef, useEffect, useContext, Suspense } from 'react';
import { DropdownToggleContext } from '@/utils/DropdownToggleContext';
import { LoadingContext } from '@/utils/LoadingContext';
import { MemberToolsToggleContext } from '@/utils/MemberToolsToggleContext';
import { SocialMediaToggleContext } from '@/utils/SocialMediaToggleContext';
import categories from '../data/categories';
import ThemeSelector from '../components/sidebar-select-components/ThemeSelector';
import FooterSelector from '../components/sidebar-select-components/FooterSelector'; // adjust path if needed
import DeviceViewSelector from '../components/sidebar-select-components/DeviceViewSelector';
import HeaderSectionControl from '@/components/sidebar-select-components/HeaderSectionControl';
import MegaMenuToggleSwitch from '@/components/sidebar-select-components/MegaMenuToggleSwitch';
import SectionControl from '@/components/sidebar-select-components/SectionControl';
import {useRouter} from 'next/navigation';
import SocialMediaToggleSwitch from '@/components/sidebar-select-components/SocialMediaToggleSwitch';
import MemberToolsToggleSwitch from '@/components/sidebar-select-components/MemberToolsToggleSwitch';

export default function HomePage() {
  const [iframeReady, setIframeReady] = useState(false);
  const { isSocialMediaToggleSwitchOff } = useContext(SocialMediaToggleContext);
  const { isDropdownToggleSwitchOn } = useContext(DropdownToggleContext);
  const { isMemberToolsToggleSwitchOff } = useContext(MemberToolsToggleContext);
  const { isLoading } = useContext(LoadingContext);
  const [iframeClass, setIframeClass] = useState('');
  const iframeRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if (!iframeRef.current) {
      console.warn('Iframe is not yet rendered. Updates may fail.');
      return
    }
  }, []);

  useEffect(() => {
  const handleMessage = (event) => {
    if (event.data?.type === 'IFRAME_READY') {
      setIframeReady(true);
    }
  };
  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}, []);

  useEffect(() => {
    //console.log('isLoading state in HomePage:', isLoading);
    const iframe = document.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
              {
                  type: 'UPDATE_LOADING_STATE',
                  payload: { isLoading },
              },
              '*'
          );
      }
  }, [isLoading]);

  useEffect(() => {
    const iframe = document.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
              {
                  type: 'UPDATE_MEMBERTOOLS_STATE',
                  payload: { isMemberToolsToggleSwitchOff },
              },
              '*'
          );
      }
  }, [isMemberToolsToggleSwitchOff]);

  useEffect(() => {
    const iframe = document.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
              {
                  type: 'UPDATE_DROPDOWN_STATE',
                  payload: { isDropdownToggleSwitchOn },
              },
              '*'
          );
      }
  }, [isDropdownToggleSwitchOn]);

  useEffect(() => {
    const iframe = document.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
              {
                  type: 'UPDATE_SOCIALMEDIA_STATE',
                  payload: { isSocialMediaToggleSwitchOff },
              },
              '*'
          );
      }
  }, [isSocialMediaToggleSwitchOff]);



  // Handlers for deviceView buttons
  const setDefaultClass = () => setIframeClass('');
  const setTabletClass = () => setIframeClass('tablet');
  const setMobileClass = () => setIframeClass('mobile');

  const handleClearBtnClick = () => {
  
    // 1. Get current query params
    const params = new URLSearchParams(window.location.search);

    // 2. Remove section1-section6 params
    for (let i = 1; i <= 6; i++) {
      params.delete(`section${i}`);
    }

    // 3. Build the new query string
    const newQuery = params.toString();
    const newUrl = newQuery ? `?${newQuery}` : window.location.pathname;

    // 4. Push the new URL (with only the desired params)
    router.push(newUrl);
  }



  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main style={styles.container}>
        {/* Sidebar */}
       
        <div style={styles.sidebar}>
          {/* Device View Selector */}
          <DeviceViewSelector
            iframeClass={iframeClass}
            setDefaultClass={setDefaultClass}
            setTabletClass={setTabletClass}
            setMobileClass={setMobileClass}
          />
          <div style={{marginBottom: '10px'}}>
            <MemberToolsToggleSwitch label="Enable Feature" iframeRef={iframeRef}/>
          </div>
          <ThemeSelector iframeRef={iframeRef} />

          <HeaderSectionControl iframeRef={iframeRef} />
          <div style={styles.gridContainer}>
            <MegaMenuToggleSwitch label="Enable Feature" iframeRef={iframeRef}/>
            <SocialMediaToggleSwitch label="Enable Feature" iframeRef={iframeRef}/>
          </div>

          {/* Section 1 */}
          <SectionControl 
            key={0}
            sectionIndex={0}
            categories={categories}
            iframeRef={iframeRef}
            isIframeReady={iframeReady}
          />

          {/* Section 2 */}
          <SectionControl 
            key={1}
            sectionIndex={1}
            categories={categories}
            iframeRef={iframeRef}
            isIframeReady={iframeReady}
          />

          {/* Section 3 */}
          <SectionControl 
            key={2}
            sectionIndex={2}
            categories={categories}
            iframeRef={iframeRef}
            isIframeReady={iframeReady}
          />

          {/* Section 4 */}
          <SectionControl 
            key={3}
            sectionIndex={3}
            categories={categories}
            iframeRef={iframeRef}
            isIframeReady={iframeReady}
          />

          {/* Section 5 */}
          <SectionControl 
            key={4}
            sectionIndex={4}
            categories={categories}
            iframeRef={iframeRef}
            isIframeReady={iframeReady}
          />

          {/* Section 6 */}
          <SectionControl 
            key={5}
            sectionIndex={5}
            categories={categories}
            iframeRef={iframeRef}
            isIframeReady={iframeReady}
          />


          <FooterSelector iframeRef={iframeRef} />

          <div>
            <button className="btn clearBtn" onClick={handleClearBtnClick}>Clear Sections 1-6</button>
          </div>

        </div>

        {/* Iframe content area */}
        <div style={styles.content}>
         
            <iframe
              ref={iframeRef}
              src="/iframe-page"
              title="Content Display"
              style={styles.iframe}
              className={iframeClass} // Dynamically set className
            />
          
        </div>
        
      </main>
    </Suspense>

  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: '280px',
    padding: '1.5rem',
    background: '#f0f0f0',
    borderRight: '1px solid #ccc',
    overflowY: 'auto',
    maxHeight: '100vh',
  },
  content: {
    flex: 1,
    padding: '0',
  },
  iframe: {
    border: 'none',
    background: '#fff',
    width: '100%',
    height: '100%',
    display: 'block',
    margin: '0 auto',
    transition: 'width ease 250ms',
  },
  group: {
    //marginBottom: '1rem',
  },
  gridContainer: {
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '15px',
  }
};
