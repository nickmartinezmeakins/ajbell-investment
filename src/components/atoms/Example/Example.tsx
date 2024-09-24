import { ReactNode } from 'react';

type ExampleProps = {
  children?: ReactNode;
};

export const Example = ({ children }: ExampleProps) => (
  <div>
    <h1 className='text-[#f33]'>{children}</h1>
  </div>
);
