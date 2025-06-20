import {useEffect, useRef, useState} from "react";
import CategorySelect from './CategorySelect';
import ItemSelect from './ItemSelect';
import {updateIframeInterior} from "@/utils/actions";
import {formatInteriorSectionCategory} from "@/utils/helpers";
import {useRouter, useSearchParams} from 'next/navigation';

const InteriorSectionControl = ({ sectionIndex, categories, iframeRef, isIframeReady, resetKey }) => {
        const [sectionState, setSectionState] = useState({ category: '', item: '' });
        const [cleanedSections, setCleanedSections] = useState(false);
        const [isClient, setIsClient] = useState(false);
        const router = useRouter();
        const searchParams = useSearchParams();
        const userInteracted = useRef(false);
        
    useEffect(() => {
        // Reset local state when resetKey changes
        setSectionState({ category: '', item: '' });
        userInteracted.current = false;
    }, [resetKey]);

    useEffect(() => {
        if (!isIframeReady || cleanedSections) return;

        const templateParam = searchParams.get('template');
        if (templateParam === 'int') {
            const params = new URLSearchParams(window.location.search);
            let changed = false;
            for (let i = 2; i <= 6; i++) {
            if (params.has(`section${i}`)) {
                params.delete(`section${i}`);
                changed = true;
            }
            }
            if (changed) {
            const newQuery = params.toString();
            const newUrl = newQuery ? `?${newQuery}` : window.location.pathname;
            router.replace(newUrl, { shallow: true });
            }
            setCleanedSections(true);
        }

        const sectionParam = searchParams.get(`section${sectionIndex + 1}`);

        if (sectionParam && !userInteracted.current) {
            let category = '';
            if(sectionParam.includes('layout1')) {
                category = 'Layout Option 1';
            }
            if(sectionParam.includes('layout2')) {
                category = 'Layout Option 2';
            }
            if(sectionParam.includes('cf')) {
                category = 'CrowdFunding Layouts';
               ;
            }
            
            // Find the matching category key
            const matchedCategory = Object.keys(categories).find((key) =>
                key.includes(category)
            );
            //console.log(matchedCategory);
            let matchedItem = undefined;
            if (matchedCategory && categories[matchedCategory]) {
                matchedItem = categories[matchedCategory].find(
                    item => item.value.toString().toLowerCase() === sectionParam.toLowerCase()
                );
            }
            //console.log(matchedItem);
            if (matchedCategory && matchedItem) {
                setSectionState((prevState) => ({
                    ...prevState,
                    category: matchedCategory,
                    item: matchedItem.value,
                }));
                updateIframeInterior(sectionIndex, matchedCategory, matchedItem.value, iframeRef);
            } else {
                setSectionState({ category: '', item: '' });
                 updateIframeInterior(sectionIndex, '', '', iframeRef);
            }

        //updateIframeInterior(sectionIndex, matchedCategory, matchedItem.value, iframeRef);
   
        }
        // If the param is missing and the user hasn't interacted, reset the state
        if (!sectionParam && !userInteracted.current) {
            setSectionState({ category: '', item: '' });
            updateIframeInterior(sectionIndex, '', '', iframeRef);
        }
    }, [sectionIndex, categories, iframeRef, isIframeReady, searchParams]);

        
    useEffect(() => {
        if (userInteracted.current) {
        const params = new URLSearchParams(window.location.search);
        //console.log(sectionState.category);
        if (sectionState.category && sectionState.item !== '') {

            // Add or update the 'section' query parameter
            const query = `${sectionState.item ? `${sectionState.item.toLowerCase()}` : ''
            }`;
            console.log(query);
        
            params.set(`section1`, query);
        } else {
            // Remove the 'section' query parameter
            params.delete(`section1`);
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

        updateIframeInterior(sectionIndex, selectedCategory, selectedItem, iframeRef);

        return updatedState;
        });
    };

    const itemOptions = sectionState.category ? categories[sectionState.category] : [];

    //if (!isClient) {
    //    return null; // Or a loading spinner
    //}


return (
        <div style={{ marginBottom: '1rem' }}>
        <CategorySelect
            section={1}
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
 
export default InteriorSectionControl;