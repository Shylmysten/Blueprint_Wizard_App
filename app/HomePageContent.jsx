'use client';
import { useState, useRef, useEffect, useContext, Suspense } from 'react';
import { DropdownToggleContext } from '@/utils/DropdownToggleContext';
import { LoadingContext } from '@/utils/LoadingContext';
import { MemberToolsToggleContext } from '@/utils/MemberToolsToggleContext';
import { SocialMediaToggleContext } from '@/utils/SocialMediaToggleContext';
import categories from '../data/categories';
import { intCategories } from '../data/categories';
import ThemeSelector from '../components/sidebar-select-components/ThemeSelector';
import FooterSelector from '../components/sidebar-select-components/FooterSelector'; // adjust path if needed
import DeviceViewSelector from '../components/sidebar-select-components/DeviceViewSelector';
import HeaderSectionControl from '@/components/sidebar-select-components/HeaderSectionControl';
import MegaMenuToggleSwitch from '@/components/sidebar-select-components/MegaMenuToggleSwitch';
import SectionControl from '@/components/sidebar-select-components/SectionControl';
import {useRouter, useSearchParams} from 'next/navigation';
import SocialMediaToggleSwitch from '@/components/sidebar-select-components/SocialMediaToggleSwitch';
import MemberToolsToggleSwitch from '@/components/sidebar-select-components/MemberToolsToggleSwitch';
import FinishModal from '@/components/FinishModal';
import InteriorSectionControl from '@/components/sidebar-select-components/InteriorSectionControl';
import Header from '@/components/shared/Header';
import styles from './HomePageContent.module.css';

export default function HomePage() {
  const [iframeReady, setIframeReady] = useState(false);
  const { isSocialMediaToggleSwitchOff } = useContext(SocialMediaToggleContext);
  const { isDropdownToggleSwitchOn } = useContext(DropdownToggleContext);
  const { isMemberToolsToggleSwitchOff } = useContext(MemberToolsToggleContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading } = useContext(LoadingContext);
  const [iframeClass, setIframeClass] = useState('');
  const iframeRef = useRef();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isInterior, setIsInterior] = useState(false);
  const [resetSectionsKey, setResetSectionsKey] = useState(0);
  const [isHeader3, setIsHeader3] = useState(false);

  useEffect(() => {
     setIsInterior(searchParams.get('template') === 'int' ? true : false);
     setIsHeader3(searchParams.get('header')?.includes('header3') ? true : false);
  }, [searchParams])


  useEffect(() => {
  if (iframeReady && iframeRef.current) {
    iframeRef.current.contentWindow.postMessage(
      {
        type: 'SET_IS_INTERIOR',
        payload: { isInterior },
      },
      '*'
    );
  }
}, [iframeReady, isInterior]);

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

    // 5. Notify the iframe to clear its sections
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        { type: 'CLEAR_SECTIONS' },
        '*'
      );
    }
    setResetSectionsKey(prev => prev + 1); // <-- increment to trigger reset    
  }
  
  const handleFinshBtnClick = () => {
    setIsModalOpen(true);
  }



  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header isInterior={isInterior} setIsInterior={setIsInterior} />
      <main className={styles.container}>
        {/* Sidebar */}
       
        <div className={styles.sidebar}>
          {/* Device View Selector */}
          <DeviceViewSelector
            iframeClass={iframeClass}
            setDefaultClass={setDefaultClass}
            setTabletClass={setTabletClass}
            setMobileClass={setMobileClass}
          />

          <ThemeSelector iframeRef={iframeRef} isIframeReady={iframeReady}/>

          <div className={styles.headerControlsContainer}>
            <h2 className={styles.headerControlsHtwo}>Header</h2>

            <HeaderSectionControl iframeRef={iframeRef} isIframeReady={iframeReady}/>
            <div className={styles.gridContainer}>
              <MegaMenuToggleSwitch label="Enable Feature" iframeRef={iframeRef} isIframeReady={iframeReady}/>
              {!isHeader3 && (
                <SocialMediaToggleSwitch label="Enable Feature" iframeRef={iframeRef} isIframeReady={iframeReady}/>
              )}
              <MemberToolsToggleSwitch label="Enable Feature" iframeRef={iframeRef} isIframeReady={iframeReady}/>
            </div>
          </div>


        {isInterior ? (
          <>
            <InteriorSectionControl 
              key={1}
              sectionIndex={0}
              categories={intCategories}
              iframeRef={iframeRef}
              isIframeReady={iframeReady}
             
            />

          </>
        ) : ( 
          <>

            {/* Section 1 */}
            <SectionControl 
              key={0}
              sectionIndex={0}
              categories={categories}
              iframeRef={iframeRef}
              isIframeReady={iframeReady}
              resetKey={resetSectionsKey}
            />

            {/* Section 2 */}
            <SectionControl 
              key={1}
              sectionIndex={1}
              categories={categories}
              iframeRef={iframeRef}
              isIframeReady={iframeReady}
              resetKey={resetSectionsKey}
            />

            {/* Section 3 */}
            <SectionControl 
              key={2}
              sectionIndex={2}
              categories={categories}
              iframeRef={iframeRef}
              isIframeReady={iframeReady}
              resetKey={resetSectionsKey}
            />

            {/* Section 4 */}
            <SectionControl 
              key={3}
              sectionIndex={3}
              categories={categories}
              iframeRef={iframeRef}
              isIframeReady={iframeReady}
              resetKey={resetSectionsKey}
            />

            {/* Section 5 */}
            <SectionControl 
              key={4}
              sectionIndex={4}
              categories={categories}
              iframeRef={iframeRef}
              isIframeReady={iframeReady}
              resetKey={resetSectionsKey}
            />

            {/* Section 6 */}
            <SectionControl 
              key={5}
              sectionIndex={5}
              categories={categories}
              iframeRef={iframeRef}
              isIframeReady={iframeReady}
              resetKey={resetSectionsKey}
            />
          </>

        )}
         
          <div>
            <button className="btn clearBtn" onClick={handleClearBtnClick}>Clear {!isInterior ? 'Sections 1-6' : 'Section 1'}</button>
          </div>
         


          <FooterSelector iframeRef={iframeRef} isIframeReady={iframeReady}/>


          <div>
            <button className='btn finishBtn' onClick={handleFinshBtnClick}>Finish & Copy</button>
          </div>
        </div>

        {/* Iframe content area */}
        <div className={styles.content}>
         
            <iframe
              ref={iframeRef}
              src="/iframe-page"
              title="Content Display"
              className={`${styles.iframe} ${iframeClass}`} // Dynamically set className
            />
          
        </div>
        <FinishModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>
    </Suspense>

  );
}