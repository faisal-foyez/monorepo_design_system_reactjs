import React from 'react';
import '@ds.e/scss/lib/Utilities.css';

const Color = ({ hexCode, height, width }) => {
    return (React.createElement("div", { style: { backgroundColor: hexCode }, className: `dse-height-${height} dse-width-${width}` }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
