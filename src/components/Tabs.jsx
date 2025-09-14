import React, { useState, useEffect } from 'react';

const Tabs = ({ children, defaultIndex = 0 }) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const tabs = React.Children.toArray(children).filter(
        (child) => child.type.displayName === 'Tab'
    );
    const panels = React.Children.toArray(children).filter(
        (child) => child.type.displayName === 'TabPanel'
    );

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tab = params.get("tab");

        if (tab) {
            const index = tabs.findIndex(
                (t) => t.props.label.toLowerCase().includes(tab.toLowerCase())
            );
            if (index >= 0) {
                setActiveIndex(index);
            }
        }
    }, [tabs]);

    const handleTabClick = (index, label) => {
        setActiveIndex(index);

        const url = new URL(window.location);
        url.searchParams.set("tab", label.toLowerCase().replace(/\s+/g, ""));
        window.history.pushState({}, "", url);
    };

    return (
        <div className="tabs-container">
            <ul className="tabs-list">
                {tabs.map((tab, index) =>
                    React.cloneElement(tab, {
                        key: index,
                        isActive: index === activeIndex,
                        onClick: () => handleTabClick(index, tab.props.label),
                    })
                )}
            </ul>

            <div className="tabs-content">
                {panels[activeIndex] || null}
            </div>
        </div>
    );
};

export default Tabs;
