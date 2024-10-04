import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React from 'react';

export const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>(
  (props, ref) => (
    <div className='flex w-full border-2 border-black'>
      <input ref={ref} {...props} className='w-full px-3 py-3 outline-none' />
      <button className='bg-black px-3 py-2' type='submit'>
        <MagnifyingGlassIcon className='h-5 w-5 text-white' />
      </button>
    </div>
  )
);

Input.displayName = 'Input';
