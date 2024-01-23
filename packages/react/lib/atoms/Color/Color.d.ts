import React from 'react';
import '@ds.e/scss/lib/Utilities.css';
import { Spacing } from '@ds.e/foundation/lib';
interface ColorProps {
    hexCode: string;
    height: keyof typeof Spacing;
    width: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
