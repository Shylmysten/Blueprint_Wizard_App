import {useRef, useState} from "react";
import CategorySelect from './CategorySelect';
import ItemSelect from './ItemSelect';
import {updateIframeInterior} from "@/utils/actions";

const InteriorSectionControl = ({ sectionIndex, categories, iframeRef, isIframeReady }) => {
        const [sectionState, setSectionState] = useState({ category: '', item: '' });
        const [isClient, setIsClient] = useState(false);
        const userInteracted = useRef(false);

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