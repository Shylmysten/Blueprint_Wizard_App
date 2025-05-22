// utils/offCanvasUtils.js
export const trapKeyBoardMobileNav = (e, offCanvasRef, handleDrawerClose) => {
    const focusableElements = 'button, [href], [tabindex]:not([tabindex="-1"])';
    const nav = offCanvasRef.current;
    const focusableContent = [...nav.querySelectorAll(focusableElements)];
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];
  
    const isEscapeKey = e.key === 'Escape' || e.keyCode === 27;
    if (isEscapeKey) {
      handleDrawerClose();
    }
  
    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;
    if (!isTabPressed) {
      return;
    }
  
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  };
  
  export const handleDrawerOpen = (offCanvasRef, setIsDrawerOpen, trapKeyBoardMobileNav) => {
    if (offCanvasRef.current) {
      offCanvasRef.current.addEventListener('keydown', trapKeyBoardMobileNav, false);
      setIsDrawerOpen(true);
    } else {
        console.warn("offCanvasRef is not properly initialized or assigned.");
    }
  };
  
  export const handleDrawerClose = (offCanvasRef, setIsDrawerOpen) => {
    const mobileToggle = document.querySelector('.js-offcanvas-trigger');
    offCanvasRef.current.removeEventListener('keydown', trapKeyBoardMobileNav, false);
    setIsDrawerOpen(false);
    mobileToggle.focus();
  };