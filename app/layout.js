import NextAuthProvider from '@/auth-provider'
import './globals.css'

export const metadata = {
  title: 'First Own ',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
