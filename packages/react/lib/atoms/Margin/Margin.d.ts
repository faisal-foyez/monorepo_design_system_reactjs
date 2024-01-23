import React from 'react';
import { Spacing } from '@ds.e/foundation/lib';
import '@ds.e/scss/lib/Margin.css';
interface MarginProps {
    space: keyof typeof Spacing;
    children: React.ReactNode;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
