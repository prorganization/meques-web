
import { Barlow } from '@next/font/google';
import './globals.css';
import '@/firebase';

const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--barlow-font',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} font-primary`}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
