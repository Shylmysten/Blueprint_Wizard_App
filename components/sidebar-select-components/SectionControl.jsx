'use client';
import React, { useEffect, useRef, useState } from 'react';
import CategorySelect from './CategorySelect';
import ItemSelect from './ItemSelect';
import { updateIframe } from '@/utils/actions';
import {useRouter, useSearchParams} from 'next/navigation';
import {formatSectionCategory} from '@/utils/helpers';

export default function SectionControl({ sectionIndex, categories, iframeRef }) {
    const [sectionState, setSectionState] = useState({ category: '', item: '' });
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const userInteracted = useRef(false);

  // Ensure the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

    useEffect(() => {
        if (!isClient) return;

        const sectionParam = searchParams.get(`section${sectionIndex + 1}`);

        if (sectionParam && !userInteracted.current) {
            const [category, itemIndex] = [sectionParam.slice(0, -1), parseInt(sectionParam.slice(-1)) - 1];

            // Find the matching category key
            const matchedCategory = Object.keys(categories).find((key) =>
                key.toLowerCase().includes(category)
            );
            const matchedItem = categories[matchedCategory][itemIndex];
            
            if (matchedCategory) {
                setSectionState((prevState) => ({
                    ...prevState,
                    category: matchedCategory,
                    item: matchedItem ? matchedItem.value : '',
                }));
            } else {
                setSectionState({ category: '', item: '' })
            }

            updateIframe(sectionIndex, matchedCategory, matchedItem.value, iframeRef);
   
        }
        // If the param is missing and the user hasn't interacted, reset the state
        if (!sectionParam && !userInteracted.current) {
            setSectionState({ category: '', item: '' });
            updateIframe(sectionIndex, '', '', iframeRef);
        }
    }, [sectionIndex, categories, iframeRef, isClient, searchParams]);

    useEffect(() => {
        if (userInteracted.current) {
        const params = new URLSearchParams(window.location.search);
        
        if (sectionState.category && sectionState.item !== '') {
            const formattedCat = formatSectionCategory(sectionState.category);
            
            // Find the index of the object in the array
            const itemIndex = categories[sectionState.category].findIndex(
                (item) => item.value === sectionState.item
            );

            // Add 1 to the Index because rotator0 doesn't make sense
            //console.log(`Index of the selected item: ${itemIndex + 1}`);

            // Add or update the 'header' query parameter
            const query = `${formattedCat}${
            sectionState.item ? `${itemIndex + 1}` : ''
            }`;
            //console.log(query);
        
            params.set(`section${sectionIndex + 1}`, query);
        } else {
            // Remove the 'header' query parameter
            params.delete(`section${sectionIndex + 1}`);
        }
    
        // Update the URL with the modified query string
        router.push(`?${params.toString()}`, { shallow: true });
        }

    }, [sectionState, router]);



    const handleCategoryChange = (e) => {
        userInteracted.current = true;
        const selectedCategory = e.target.value;
        setSectionState({ category: selectedCategory, item: '' });
    };

    const handleItemChange = (e) => {
        userInteracted.current = true;
        const selectedItem = e.target.value;
        setSectionState((prevState) => {
        const updatedState = { ...prevState, item: selectedItem };

        // Update iframe with the selected item
        const selectedCategory = selectedItem === '' ? '' : prevState.category;

        if (selectedItem === '') {
            updatedState.category = ''; // Reset category when "Clear Section" is selected
        }

        updateIframe(sectionIndex, selectedCategory, selectedItem, iframeRef);

        return updatedState;
        });
    };

    const itemOptions = sectionState.category ? categories[sectionState.category] : [];

    if (!isClient) {
        return null; // Or a loading spinner
      }

    return (
        <div style={{ marginBottom: '1rem' }}>
        <CategorySelect
            section={sectionIndex + 1}
            categories={categories}
            selected={sectionState.category}
            onChange={handleCategoryChange}
        />
        {sectionState.category && (
            <ItemSelect
            items={itemOptions}
            selected={sectionState.item}
            onChange={handleItemChange}
            />
        )}
        </div>
    );
}