import React from 'react'
import './Button.css';

interface ButtonProps { 
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick
}: ButtonProps) => {
  return (
    <div className='button-container'>
      <button onClick={onClick} className='custom-button'>
          {label}
      </button>
    </div>
  )
}

export default Button;