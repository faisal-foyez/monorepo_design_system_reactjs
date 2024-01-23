import React from 'react';
import '@ds.e/scss/lib/Button.css'
interface ButtonProps{
  title: string,
  children: React.ReactNode,
  onClick:()=>void
}

const Button:React.FC<ButtonProps> = ({
  title,
  children,
  onClick
}) =>{
  return (
    <button className='btn btn-primary' onClick={onClick} title={title}>{children}</button>
  )
}

export default Button;