import React, { useContext, useEffect, useRef, useState } from 'react';
import {SocialMediaToggleContext} from "@/utils/SocialMediaToggleContext";
import {useRouter, useSearchParams} from 'next/navigation';
import ToggleSwitch from '../shared/ToggleSwitch';

const SocialMediaToggleSwitch = ({ iframeRef }) => {
        const { isSocialMediaToggleSwitchOff, setIsSocialMediaToggleSwitchOff } = useContext(SocialMediaToggleContext);
        const [isClient, setIsClient] = useState(false);
        const router = useRouter();
        const searchParams = useSearchParams();
        const userInteracted = useRef(false);

    //console.log('isSocialMediaToggleSwitchOff in SocialMediaToggleSwitch:', isSocialMediaToggleSwitchOff);

    // Ensure the component is mounted on the client
    useEffect(() => {
        setIsClient(true);
    }, []);

      // Parse the query parameters on page load
      useEffect(() => {
        if (!isClient) return;
        const socialMediaParam = searchParams.get('socials');
        //console.log('socialMediaParam:', socialMediaParam);

        // Update the toggle state only if the parameter exists and the user hasn't interacted because the SocialMedia Toggle is Defaults to ON/True
        if (socialMediaParam && !userInteracted.current) {
            setIsSocialMediaToggleSwitchOff(false);
        }

        // If the param is missing and the user hasn't interacted, reset the state
        //if (socialMediaParam && !userInteracted.current) {
        //    setIsSocialMediaToggleSwitchOff(socialMediaParam === 'false'); // Set state explicitly
        //}
 
      }, [iframeRef, isClient, searchParams, setIsSocialMediaToggleSwitchOff]);

        // Update the URL when isDropdownToggleSwitchOn changes
      useEffect(() => {
        if (userInteracted.current) {
          const params = new URLSearchParams(window.location.search);
    
          if (!isSocialMediaToggleSwitchOff) {
            console.log('SocialMediaToggleSwitch is OFF');
         
            // Add or update the 'megamenu' query parameter
            params.set('socials', 'off');
          } else {
              // Remove the 'megamenu' query parameter
              params.delete('socials');
          }
      
          // Update the URL with the modified query string
          router.push(`?${params.toString()}`, { shallow: true });
        }
    
      }, [isSocialMediaToggleSwitchOff, router]);


    const handleToggle = () => {
        userInteracted.current = true;
        setIsSocialMediaToggleSwitchOff(!isSocialMediaToggleSwitchOff);
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
                id='SocialMediaToggleSwitch'
                checked={isSocialMediaToggleSwitchOff}
                onChange={handleToggle}
                onKeyDown={handleKeyDown}
                label='Social Icons'
            />
     );
}
 
export default SocialMediaToggleSwitch;