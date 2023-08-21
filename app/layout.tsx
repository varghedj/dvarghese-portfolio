import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import { links } from '@/lib/data'
import ActiveSectionContextProvider from '@/context/active-section-context'

//Instanciates the Font to be used in the RootLayout 
const inter = Inter({ subsets: ['latin'] })

//This Is what sets the metadate displayed in the browser tab, and the webapp description as seen in places such as google search results
//Note: /app/favicon.ico is what gets picked up by next and gets set as the browser tab icon
export const metadata: Metadata = {
  title: 'DV Portfoio', //put something cool in here
  description: "Dylan's personal portfolio web page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      {/*Right Side Bubble*/}
      <body className={`{inter.className} bg-gray-50 text-gray-950 relative h-[10000px] pt-28 sm:pt-36`}>
      {/*Right Side Bubble*/}
        <div className=
          'bg-[#fbe2e3] absolute -z-10 top-[-6rem] -right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'>
        </div>

      {/*Left Side Bubble*/}
        <div className=
          'bg-[#fffdfd] absolute -z-10 top-[-1rem] left-[-35rem] h-[100%] w-[50rem] rounded-full blur-[10rem]  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'>
        </div>
      <ActiveSectionContextProvider>
        <Header />
        {children}
      </ActiveSectionContextProvider>
        </body>
    </html>
  )
}