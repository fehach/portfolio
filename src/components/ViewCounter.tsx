"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.views !== null) setViews(data.views);
      })
      .catch(() => {});
  }, []);

  if (views === null) return null;

  return (
    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500">
      <Eye className="w-3.5 h-3.5" />
      <span>{views.toLocaleString()} views</span>
    </div>
  );
}
