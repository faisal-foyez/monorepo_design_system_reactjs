import React from 'react';
import {Spacing} from '@ds.e/foundation/lib'
import '@ds.e/scss/lib/Margin.css'
interface MarginProps{
  space: keyof typeof Spacing;
  children: React.ReactNode;
  top?:boolean;
  right?:boolean;
  bottom?:boolean;
  left?:boolean;
}

const Margin:React.FC<MarginProps> = ({
  space,
  children,
  top,
  right,
  bottom,
  left,
}) =>{
  let className='';

  if(!top && !right && !bottom && !left){
    className += `dse-margin-${space}`
  }

  if(top){
    className += `dse-margin-top-${space}`   
  }
  if(right){
    className += `dse-margin-right-${space}`
  }
  if(bottom){
    className += `dse-margin-bottom-${space}`
  }
  if(left){
    className += `dse-margin-left-${space}`
  }
  return(

    <div className={className}>{children}</div>
  )
}

export default Margin;