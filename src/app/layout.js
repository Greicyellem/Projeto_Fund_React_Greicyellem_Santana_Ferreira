import './globals.css'
import { Inter } from 'next/font/google'
import { NoteProvider } from './contexts/NoteContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Criador de Tarefas',
  description: 'Criador de tarefas, multi-funções',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NoteProvider>
        {children}
      </NoteProvider>
      </body>
    </html>
  )
}
