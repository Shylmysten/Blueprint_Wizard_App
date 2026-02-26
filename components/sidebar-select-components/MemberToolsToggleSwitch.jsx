import React, { useContext, useEffect, useRef, useState, useTransition } from 'react';
import { MemberToolsToggleContext } from '@/utils/MemberToolsToggleContext';
import { useRouter, useSearchParams } from 'next/navigation';
import ToggleSwitch from '../shared/ToggleSwitch';

const MemberToolsToggleSwitch = ({ iframeRef, isIframeReady, disabled }) => {
        const { isMemberToolsToggleSwitchOff, setIsMemberToolsToggleSwitchOff } = useContext(MemberToolsToggleContext);
        const [isClient, setIsClient] = useState(false);
        const router = useRouter();
        const searchParams = useSearchParams();
        const userInteracted = useRef(false);
        const [, startTransition] = useTransition();
    //console.log('isSocialMediaToggleSwitchOff in SocialMediaToggleSwitch:', isSocialMediaToggleSwitchOff);

    // Ensure the component is mounted on the client
    useEffect(() => {
        setIsClient(true);
    }, []);

      // Parse the query parameters on page load
      useEffect(() => {
        if (!isIframeReady) return;
        const memberToolsParam = searchParams.get('membertools');
        //console.log('socialMediaParam:', socialMediaParam);

        // Update the toggle state only if the parameter exists and the user hasn't interacted because the SocialMedia Toggle is Defaults to ON/True
        if (memberToolsParam && !userInteracted.current) {
            setIsMemberToolsToggleSwitchOff(false);
        }

        // If the param is missing and the user hasn't interacted, reset the state
        //if (socialMediaParam && !userInteracted.current) {
        //    setIsSocialMediaToggleSwitchOff(socialMediaParam === 'false'); // Set state explicitly
        //}
 
      }, [iframeRef, isIframeReady, searchParams, setIsMemberToolsToggleSwitchOff]);

        // Update the URL when isDropdownToggleSwitchOn changes
      useEffect(() => {
        if (userInteracted.current) {
          const params = new URLSearchParams(window.location.search);
    
          if (!isMemberToolsToggleSwitchOff) {
            console.log('MemberToolsToggleSwitch is OFF');
         
            // Add or update the 'megamenu' query parameter
            params.set('membertools', 'off');
          } else {
              // Remove the 'megamenu' query parameter
              params.delete('membertools');
          }
      
          // Update the URL with the modified query string
          startTransition(() => {
            router.push(`?${params.toString()}`);
          });
        }
    
      }, [isMemberToolsToggleSwitchOff, router]);


    const handleToggle = () => {
        userInteracted.current = true;
        setIsMemberToolsToggleSwitchOff(!isMemberToolsToggleSwitchOff);
    };

    const handleKeyDown = (event) => {
        userInteracted.current = true;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent default scrolling behavior for Space key
            handleToggle();
        }
    };

    if (!isClient) {
      return null; // Or a loading spinner
    }

    return ( 
            <ToggleSwitch
                id='MemberToolsToggleSwitch'
                checked={isMemberToolsToggleSwitchOff}
                onChange={handleToggle}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                label='Member Tools'
            />
     );
}
 
export default MemberToolsToggleSwitch;