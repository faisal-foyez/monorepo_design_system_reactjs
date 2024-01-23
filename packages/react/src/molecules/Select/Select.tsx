import React from 'react';

interface SelectOption{
  label:string,
  value:string,
}

interface SelectProps{
  label:string;
  options:Array<SelectOption>;
  onOptionSelected?: (option:SelectOption, optionIndex:number) => void;
}

const Select:React.FC<SelectProps> = ({
  label,
  options,
  onOptionSelected
}) =>{

  const onClickHandler = (option:SelectOption, index:number) =>{
    if(onOptionSelected){
      onOptionSelected(option,index)
    }
  }

  return(
    <div>
      <button>{label}</button>

      <ul>
        {options.map((option,index)=>(
            <li onClick={()=>onClickHandler(option, index)}>
              {option.value}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Select;