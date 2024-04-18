'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

export function AuthForm() {
  const form = useForm() 

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" {... form.register( 'email')} />
        </div>
        <Button className="w-full">Send Magic Link</Button>
      </form>
    </div>
  )
}

// === styles.css ===

// body {
//   font-family: var(--font-rubik), sans-serif;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-family: var(--font-chivo), sans-serif;
// }

// === layout.jsx ===



// import { Chivo } from 'next/font/google'
// import { Rubik } from 'next/font/google'
// import './styles.css'

// const chivo = Chivo({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-chivo',
// })
// const rubik = Rubik({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-rubik',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={chivo.variable + rubik.variable}>
//         {children}
//       </body>
//     </html>
//   )
// }
    
