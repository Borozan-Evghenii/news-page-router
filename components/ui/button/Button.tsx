import React from 'react';

type Variants = typeof variantStyles;

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: keyof Variants;
  active?: boolean;
  children: React.ReactElement;
}

const variantStyles = {
  contained:
    'px-3 py-2 text-white bg-black hover:bg-gray-500 hover:text-white hover:cursor-pointer font-semibold',
  text: 'px-3 py-2 text-black  hover:bg-gray-500 hover:text-white  hover:cursor-pointer font-semibold',
  icon: 'w-6 h-6 hover:cursor-pointer fill-black',
  category: 'block px-2 py-3 text-sm font-semibold capitalize hover:bg-gray-200',
  list: 'w-full px-3 py-3 border-b border-gray-200 font-bold block capitalize hover:bg-gray-300 text-sm'
};
const variantActive = {
  contained: '',
  text: 'px-3 py-2 text-black  hover:bg-gray-500 hover:text-white  hover:cursor-pointer font-semibold',
  icon: 'w-6 h-6 hover:cursor-pointer fill-black',
  category: 'block px-2 py-3 text-sm font-semibold capitalize hover:bg-gray-200',
  list: 'w-full px-3 py-3 border-b border-gray-200 font-bold block capitalize hover:bg-gray-300 text-sm'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, active, children, variant = 'text', ...props }, ref) =>
    React.cloneElement(children, {
      ...props,
      ref,
      className: `${variantStyles[variant]} ${active ? variantActive[variant] : ''} ${className || ''} `
    })
);

Button.displayName = 'Button';
