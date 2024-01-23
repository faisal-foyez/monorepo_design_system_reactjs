import React from 'react';
import '@ds.e/scss/lib/Button.css';

const Button = ({ title, children, onClick }) => {
    return (React.createElement("button", { className: 'btn btn-primary', onClick: onClick, title: title }, children));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
