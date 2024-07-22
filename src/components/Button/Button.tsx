import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ primary, label, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button className={`button ${mode}`} {...props}>
      {label}
    </button>
  );
};
