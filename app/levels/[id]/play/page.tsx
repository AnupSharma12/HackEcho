"use client";

import { useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function PlayLevelPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  useEffect(() => {
    router.replace(`/levels/${id}`);
  }, [id, router]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-chalk-white/60">Redirecting to the level...</p>
    </div>
  );
}
