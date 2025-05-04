import { Map } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="bg-linear-to-r/oklch from-cyan-500 to-rose-300 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Map className="size-4" />
          </div>
          Atlas Inc.
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
