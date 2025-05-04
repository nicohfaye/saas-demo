import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (<div className="w-full h-full flex flex-col justify-center items-center bg-linear-to-r/oklch from-cyan-500 to-rose-300">
    <Link href="/login">
      <Button variant="secondary" size="lg">Login</Button>
    </Link>
  </div>);
}
