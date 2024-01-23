import React from 'react';
import '@ds.e/scss/lib/Text.css';

const Text = ({ children, size }) => {
    return (React.createElement("p", { className: `dse-text dse-text-${size}` }, children));
};

export { Text as default };
//# sourceMappingURL=Text.js.map
