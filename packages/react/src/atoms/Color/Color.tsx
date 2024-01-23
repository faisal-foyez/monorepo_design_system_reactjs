import React from 'react';
import '@ds.e/scss/lib/Utilities.css';
import {Spacing} from '@ds.e/foundation/lib';

interface ColorProps{
  hexCode:string,
  height: keyof typeof Spacing,
  width: keyof typeof Spacing
}

const Color:React.FC<ColorProps> = ({hexCode, height, width}) => {
  return (
    <div style={{backgroundColor:hexCode}} className={`dse-height-${height} dse-width-${width}`}></div>
  )
}

export default Color;