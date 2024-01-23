import React from 'react';
import '@ds.e/scss/lib/Text.css'
import { FontSize } from '@ds.e/foundation/lib';
interface TextProps{
  size: keyof typeof FontSize;
  children: React.ReactNode
}

const Text : React.FC<TextProps> = ({children, size}) =>{
  return (
    <p className={`dse-text dse-text-${size}`}>{children}</p>
  )
}

export default Text;
