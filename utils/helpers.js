export const getDate30DaysFromToday = () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 30);

    return futureDate;
};

export const formatDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-based
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const getStartDate = function() {
        // Format the date and time as YYYY/M/D H:m:s
        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    }
    const getCurrentDate = function() {
        // Format the date and time as M/D/YYYY
        return `${month}/${day}/${year}`;
    }

    const getEndDate = () => {
        const now = new Date();
        const futureDate = getDate30DaysFromToday(now);// Add 30 days to the current date

        const year = futureDate.getFullYear();
        const month = futureDate.getMonth() + 1; // Months are zero-based
        const day = futureDate.getDate();
        const hours = futureDate.getHours();
        const minutes = futureDate.getMinutes();
        const seconds = futureDate.getSeconds();

        // Format the date and time as YYYY/M/D H:m:s
        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    }

    const getReadableEndDate = () => {
        const futureDate = getDate30DaysFromToday(now);

        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        return futureDate.toLocaleString('en-US', options).split('at')[0];
    }

    return ({ startDate: getStartDate(), endDate: getEndDate(), currentDate: getCurrentDate(), getReadableEndDate: getReadableEndDate() })
};

export const formatUrlHeaderCategory = (str) => { 
    // Split letters and numbers
    const match = str.match(/^([a-zA-Z]+)(\d+)$/);
    if (!match) return str; // return original if format is unexpected
    
    const [_, letters, number] = match;
    const capitalized = letters.charAt(0).toUpperCase() + letters.slice(1);
    return `${capitalized} ${number}`;    
}

export const formatUrlHeaderItem = (headerCategory, headerItem) => {
    //console.log('category: ', headerCategory, 'item: ', headerItem)
        if (headerCategory === 'Header 1') {
            if(headerItem === 'drawer') {
                return 'DrawerOneComponent';
            }
            if(headerItem === 'overlay') {
                return 'OverlayOneComponent';
            }
            if(headerItem === 'offcanvas') {
                return 'OffCanvasOneComponent';
            }
        }
        if (headerCategory === 'Header 2') {
            if(headerItem === 'drawer') {
                return 'DrawerTwoComponent';
            }
            if(headerItem === 'overlay') {
                return 'OverlayTwoComponent';
            }
            if(headerItem === 'offcanvas') {
                return 'OffCanvasTwoComponent';
            }
        }
        if (headerCategory === 'Header 3') {
            if(headerItem === 'drawer') {
                return 'DrawerThreeComponent';
            }
            if(headerItem === 'overlay') {
                return 'OverlayThreeComponent';
            }
            if(headerItem === 'offcanvas') {
                return 'OffCanvasThreeComponent';
            }
        }
        if (headerCategory === 'Header 4') {
            if(headerItem === 'drawer') {
                return 'DrawerFourComponent';
            }
            if(headerItem === 'overlay') {
                return 'OverlayFourComponent';
            }
            if(headerItem === 'offcanvas') {
                return 'OffCanvasFourComponent';
            }
        }
}

export const formatHeaderItemForParams = (selectedHeaderItem) => {
    if(selectedHeaderItem.toLowerCase().includes('drawer')) {
        return 'drawer';
    }
    if(selectedHeaderItem.toLowerCase().includes('overlay')) {
        return 'overlay';
    }
    if(selectedHeaderItem.toLowerCase().includes('offcanvas')) {
        return 'offcanvas';
    }
}

export const formatSectionCategory = (sectionCategory) => {
    let formattedSectionCategory = '';
    switch(sectionCategory) {
        case 'Background Video Module':
            formattedSectionCategory = 'video';
            break;
        case 'Rotators & Carousels':
            formattedSectionCategory = 'rotator';
            break
        case 'News Patterns':
            formattedSectionCategory = 'news';
            break
        case 'Events Patterns':
            formattedSectionCategory = 'events';
            break
        case 'Text Patterns':
            formattedSectionCategory = 'text';
            break
        case 'Giving / CTA':
            formattedSectionCategory = 'giving';
            break
        case 'Campaign Progress Indicators':
            formattedSectionCategory = 'campaign';
            break
        case 'CrowdFunding Grid Patterns':
            formattedSectionCategory = 'crowdfunding';
            break
        case 'Countdown Timers':
            formattedSectionCategory = 'countdown';
            break
        case 'QuickLinks':
            formattedSectionCategory = 'quicklinks';
            break
        case 'Quotes':
            formattedSectionCategory = 'quotes';
            break
        case 'Tabbed Content':
            formattedSectionCategory = 'tab';
            break
        default: 
            formattedSectionCategory = 'Invalid'; 
    }
    return formattedSectionCategory;
}