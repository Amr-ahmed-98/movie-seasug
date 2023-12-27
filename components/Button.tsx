import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | ReactNode;
  className?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  ...props
}) => {
  return (
    <button className={className} onClick={onClick} type='button'>
      {text}
    </button>
  );
};

export default Button;
