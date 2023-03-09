'use client';

import { useRouter } from 'next/navigation';

export const Counter = ({ count }: { count: number }) => {
  const router = useRouter();
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"
      onClick={() => {
        router.refresh();
      }}
    >
      {count}
    </button>
  );
};
