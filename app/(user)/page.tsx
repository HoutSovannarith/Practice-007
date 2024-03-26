'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
      <div className="grid place-content-center h-screen">
        <button onClick={() => router.push("/enroll")} className="p-4 bg-amber-700 rounded-xl">Enroll</button>
      </div>
  );
}
