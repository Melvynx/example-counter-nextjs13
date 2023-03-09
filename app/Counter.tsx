'use client';

import { useRouter } from 'next/navigation';

export const Counter = ({ count }: { count: number }) => {
  console.log({ count });
  const router = useRouter();
  return (
    <button
      className="bg-red-500 p-4 rounded-lg"
      onClick={() => {
        router.refresh();
      }}
    >
      {count}
    </button>
  );
};
