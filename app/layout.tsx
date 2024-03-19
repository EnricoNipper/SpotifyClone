import { Figtree } from 'next/font/google'

//import getSongsByUserId from '@/actions/getSongsByUserId'
//import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'
//import ToasterProvider from '@/providers/ToasterProvider'
//import UserProvider from '@/providers/UserProvider'
//import ModalProvider from '@/providers/ModalProvider'
//import SupabaseProvider from '@/providers/SupabaseProvider'
//import Player from '@/components/Player'

import './globals.css'
import Sidebar from '@/components/sidebar';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToasterProvider from '@/providers/ToasterProvider';
 

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone',
}

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body className={font.className}>
        <ToasterProvider/>
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider/>
                <Sidebar>
                  {children}
                </Sidebar> 
            </UserProvider>
          </SupabaseProvider>
      </body>
    </html>
  )
}