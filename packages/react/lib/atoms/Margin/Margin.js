import React from 'react';
import '@ds.e/scss/lib/Margin.css';

const Margin = ({ space, children, top, right, bottom, left, }) => {
    let className = '';
    if (!top && !right && !bottom && !left) {
        className += `dse-margin-${space}`;
    }
    if (top) {
        className += `dse-margin-top-${space}`;
    }
    if (right) {
        className += `dse-margin-right-${space}`;
    }
    if (bottom) {
        className += `dse-margin-bottom-${space}`;
    }
    if (left) {
        className += `dse-margin-left-${space}`;
    }
    return (React.createElement("div", { className: className }, children));
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
