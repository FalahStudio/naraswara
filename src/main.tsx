import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { HeroUIProvider } from '@heroui/react'
import MainLayout from './layouts/MainLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <MainLayout />
    </HeroUIProvider>
  </StrictMode>,
)
