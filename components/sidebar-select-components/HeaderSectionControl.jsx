'use client';

import React, { useState, useContext, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CategorySelect from './CategorySelect';
import ItemSelect from './ItemSelect';
import { headerCategories } from '@/data/categories';
import { updateHeader } from '@/utils/actions';
import { DropdownToggleContext } from '../../utils/DropdownToggleContext';
import { formatHeaderItemForParams, formatUrlHeaderCategory, formatUrlHeaderItem } from '@/utils/helpers';

const HeaderSectionControl = ({ iframeRef, isIframeReady }) => {
  const [headerState, setHeaderState] = useState({ category: '', item: '' });
  const { isDropdownToggleSwitchOn } = useContext(DropdownToggleContext);
  const [isClient, setIsClient] = useState(false)
  const router = useRouter();
  const searchParams = useSearchParams();
  const userInteracted = useRef(false);

  //console.log('isDropdownToggleSwitchOn in HeaderControlSection:', isDropdownToggleSwitchOn);

  // Ensure the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Parse the query parameters on page load
  useEffect(() => {
    if (!isIframeReady) return;
    const headerParam = searchParams.get('header');

    if (headerParam  && !userInteracted.current) {
      // Split the header parameter into category and item
      const [category, item] = headerParam.split('-');
      const formattedCat = formatUrlHeaderCategory(category);
      const formattedItem = formatUrlHeaderItem(formattedCat, item);
      //console.log(formattedCat, item);
      setHeaderState({ category: formattedCat, item: formattedItem || '' });
      
      // Load the correct section into the iframe
      updateHeader(formattedCat, formattedItem, iframeRef, isIframeReady, isDropdownToggleSwitchOn);
    }

    // If the param is missing and the user hasn't interacted, reset the state
    //if (!headerParam && !userInteracted.current) {
    //  setHeaderState({ category: '', item: '' });
    //  updateHeader('', '', iframeRef, isDropdownToggleSwitchOn);
    //}

  }, [iframeRef, isDropdownToggleSwitchOn, isClient, searchParams]);


      // Update the URL when headerState changes
  useEffect(() => {
    if (userInteracted.current) {
      const params = new URLSearchParams(window.location.search);

     
      if (headerState.category && headerState.item !== '') {
        const item = formatHeaderItemForParams(headerState.item);
        // Add or update the 'header' query parameter
        const query = `${headerState.category.toLowerCase().replace(' ', '')}${
          headerState.item ? `-${item}` : ''
        }`;
        params.set('header', query);
      } else {
          // Remove the 'header' query parameter
          params.delete('header');
      }
  
      // Update the URL with the modified query string
      router.push(`?${params.toString()}`, { shallow: true });
    }

  }, [headerState, router]);

  
  const handleCategoryChange = (e) => {
    userInteracted.current = true;
    const selectedCategory = e.target.value;
    setHeaderState({ category: selectedCategory, item: '' });

  };
  
  const handleItemChange = (e) => {
    userInteracted.current = true;
    const selectedItem = e.target.value;
    setHeaderState((prevState) => {
      const updatedState = { ...prevState, item: selectedItem };

      if (selectedItem === '') {
        updatedState.category = ''; // Reset category when "Clear Section" is selected
      }
     
      updateHeader(updatedState.category, selectedItem, iframeRef, isDropdownToggleSwitchOn);

      return updatedState;
    });
  };

  const itemOptions = headerState.category ? headerCategories[headerState.category] : [];

  if (!isClient) {
    return null; // Or a loading spinner
  }

  return (
    <div style={{ margin: '1rem auto' }}>
      <CategorySelect
        section="header"
        categories={headerCategories}
        selected={headerState.category}
        onChange={handleCategoryChange}
      />
      {headerState.category && (
        <ItemSelect
          section="header"
          items={itemOptions}
          selected={headerState.item}
          onChange={handleItemChange}
        />
      )}
    </div>
  );
};

export default HeaderSectionControl;