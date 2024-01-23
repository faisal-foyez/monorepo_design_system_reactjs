import React from 'react';

const Select = ({ label, options, onOptionSelected }) => {
    const onClickHandler = (option, index) => {
        if (onOptionSelected) {
            onOptionSelected(option, index);
        }
    };
    return (React.createElement("div", null,
        React.createElement("button", null, label),
        React.createElement("ul", null, options.map((option, index) => (React.createElement("li", { onClick: () => onClickHandler(option, index) }, option.value))))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
