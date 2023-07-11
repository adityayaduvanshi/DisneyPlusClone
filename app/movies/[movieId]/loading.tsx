'use client';

import { BounceLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <BounceLoader color="#113CCF" size={60} />
    </div>
  );
}
