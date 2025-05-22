import React, { useState, useEffect } from "react";

const ContentTopNavOne = ({ navItems, isDropDownToggleSwitchOn }) => {
  const [hoverState, setHoverState] = useState({});
  const [subMenuState, setSubMenuState] = useState({});

  const handleMouseEnter = (menuId) => {
    setHoverState((prevState) => ({
      ...prevState,
      [menuId]: true,
    }));
  };

  const handleMouseLeave = (menuId) => {
    setHoverState((prevState) => ({
      ...prevState,
      [menuId]: false,
    }));
  };

  const handleToggleSubMenu = (menuId) => {
    setSubMenuState((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  const handleBlur = (menuId, event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setSubMenuState((prevState) => ({
        ...prevState,
        [menuId]: false,
      }));
    }
  };

  const handleKeyDown = (menuId, event) => {
    if (event.key === "Escape") {
      setSubMenuState((prevState) => ({
        ...prevState,
        [menuId]: false,
      }));

      const toggleButton = document.querySelector(`[aria-controls="${menuId}-subMenu"]`);
      if (toggleButton) {
        toggleButton.focus();
      }
    }
  };

  const splitSubMenuItems = (items) => {
    if (items.length <= 4) {
      const mid = Math.ceil(items.length / 2);
      return [items.slice(0, mid), items.slice(mid)];
    } else {
      const third = Math.ceil(items.length / 3);
      return [items.slice(0, third), items.slice(third, 2 * third), items.slice(2 * third)];
    }
  };

  useEffect(() => {
    const navItems = document.querySelectorAll(".desktopNav:not(.mobileNav) li");

    const mouseEnterHandler = (event) => {
      const menuId = event.currentTarget.querySelector("a")?.textContent.trim();
      if (menuId) {
        handleMouseEnter(menuId);
        event.currentTarget.classList.add("sfHover");
        const menuWrapper = event.currentTarget.querySelector(".menuWrapper");
        if (menuWrapper) {
          menuWrapper.setAttribute("aria-hidden", "false");
        }
        const toggleBtn = event.currentTarget.querySelector(".toggleBtn");
        if (toggleBtn) {
          toggleBtn.disabled = true;
        }
      }
    };

    const mouseLeaveHandler = (event) => {
      const menuId = event.currentTarget.querySelector("a")?.textContent.trim();
      if (menuId) {
        handleMouseLeave(menuId);
        event.currentTarget.classList.remove("sfHover");
        const menuWrapper = event.currentTarget.querySelector(".menuWrapper");
        if (menuWrapper) {
          menuWrapper.setAttribute("aria-hidden", "true");
        }
        const toggleBtn = event.currentTarget.querySelector(".toggleBtn");
        if (toggleBtn) {
          toggleBtn.disabled = false;
        }
      }
    };

    navItems.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnterHandler);
      el.addEventListener("mouseleave", mouseLeaveHandler);
    });

    return () => {
      navItems.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnterHandler);
        el.removeEventListener("mouseleave", mouseLeaveHandler);
      });
    };
  }, []);

  return (
    <nav id="ContentTopNavNow" className="desktopNavInner col-md-12 imodSiteMap" aria-label="Primary">
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${item.subMenu ? "hasSubmenu" : ""} ${item.highlight ? "highlight" : ""} ${
              subMenuState[item.label] ? "sfHover" : ""
            }`}
          >
            <a href={item.href}>
              <span>{item.label}</span>
            </a>
            {item.subMenu && (
              <>
                <button
                  className="toggleBtn"
                  aria-controls={`${item.label}-subMenu`}
                  aria-expanded={subMenuState[item.label] || false}
                  onClick={() => handleToggleSubMenu(item.label)}
                >
                  <span>
                    <span className="sr-only">show submenu for {item.label}</span>
                  </span>
                </button>
                <div
                  className="menuWrapper"
                  aria-hidden={!subMenuState[item.label]}
                  id={`${item.label}-subMenu`}
                  onBlur={(event) => handleBlur(item.label, event)}
                  onKeyDown={(event) => handleKeyDown(item.label, event)}
                  tabIndex="-1"
                >
                  {isDropDownToggleSwitchOn ? (
                    splitSubMenuItems(item.subMenu).map((group, groupIndex) => (
                      <ul className="sub-list" key={groupIndex}>
                        {group.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.href}>{subItem.label}</a>
                          </li>
                        ))}
                      </ul>
                    ))
                  ) : (
                    <ul>
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.href}>{subItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContentTopNavOne;