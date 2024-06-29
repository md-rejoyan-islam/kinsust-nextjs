"use client";
import { useRouter } from "next/navigation";

export default function Navigation({ children, path, className }) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(path)} className={className}>
      {children}
    </div>
  );
}
