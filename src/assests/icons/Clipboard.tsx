import React from 'react';

import clsxm from '@/lib/clsxm';

interface Props {
  height?: number;
  width?: number;
  className?: string;
}

export default function Clipboard({ width, height, className }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : 20}
      height={height ? height : 20}
      className={clsxm('mb-0.5 mr-1 h-5 w-5 text-[#4ae288]', className)}
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
      <path
        fillRule='evenodd'
        d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
        clipRule='evenodd'
      />
    </svg>
  );
}
