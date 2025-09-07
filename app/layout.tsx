import './globals.css'
import TabBar from '../components/TabBar'
import Providers from '../components/Providers'

export const metadata = {
  title: "ویش | بازار آنلاین افغانستان",
  description: "ویش — بازار آنلاین در ۳۴ ولایت افغانستان"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>
          <div className="min-h-screen pb-20">
            {children}
          </div>
          <TabBar />
        </Providers>
      </body>
    </html>
  )
}
