import React, { useContext, useEffect, useRef, useState } from 'react';
import { DropdownToggleContext } from '../../utils/DropdownToggleContext';
import {useRouter, useSearchParams} from 'next/navigation';
import ToggleSwitch from '../shared/ToggleSwitch';

const MegaMenuToggleSwitch = ({ iframeRef }) => {
    const { isDropdownToggleSwitchOn, setIsDropdownToggleSwitchOn } = useContext(DropdownToggleContext);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const userInteracted = useRef(false);

    //console.log('isDropdownToggleSwitchOn in MegaMenuToggleSwitch:', isDropdownToggleSwitchOn);

  // Ensure the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

      // Parse the query parameters on page load
      useEffect(() => {
        if (!isClient) return;
        const megamenuParam = searchParams.get('megamenu');
    
        // Update the toggle state only if the parameter exists and the user hasn't interacted
        if (megamenuParam && !userInteracted.current) {
            setIsDropdownToggleSwitchOn(megamenuParam === 'true'); // Set state explicitly
        }
       // If the param is missing and the user hasn't interacted, reset the state
        //if (!megamenuParam && !userInteracted.current) {
        //    setIsDropdownToggleSwitchOn(false);
        //}

      }, [iframeRef, isClient, searchParams, setIsDropdownToggleSwitchOn]);

        // Update the URL when isDropdownToggleSwitchOn changes
      useEffect(() => {
        if (userInteracted.current) {
          const params = new URLSearchParams(window.location.search);
    
          if (isDropdownToggleSwitchOn) {
            console.log('MegaMenuToggleSwitch is ON');
            //const item = formatHeaderItemForParams(headerState.item);
            // Add or update the 'megamenu' query parameter
            params.set('megamenu', isDropdownToggleSwitchOn);
          } else {
              // Remove the 'megamenu' query parameter
              params.delete('megamenu');
          }
      
          // Update the URL with the modified query string
          router.push(`?${params.toString()}`, { shallow: true });
        }
    
      }, [isDropdownToggleSwitchOn, router]);




    const handleToggle = () => {
        userInteracted.current = true;
        setIsDropdownToggleSwitchOn(!isDropdownToggleSwitchOn);
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
              id='MegaMenuToggleSwitch'
              checked={isDropdownToggleSwitchOn}
              onChange={handleToggle}
              onKeyDown={handleKeyDown}
              label='MegaMenu'
            />
     );
}
 
export default MegaMenuToggleSwitch;