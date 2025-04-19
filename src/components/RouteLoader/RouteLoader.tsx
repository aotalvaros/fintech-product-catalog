'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // tiempo estimado de carga/transición

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#434343ab] bg-opacity-40 z-50 flex items-center justify-center" data-testid="route-loader">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" data-testid="spinner"/>
    </div>
  );
}
