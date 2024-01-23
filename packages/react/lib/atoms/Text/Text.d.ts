import React from 'react';
import '@ds.e/scss/lib/Text.css';
import { FontSize } from '@ds.e/foundation/lib';
interface TextProps {
    size: keyof typeof FontSize;
    children: React.ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
