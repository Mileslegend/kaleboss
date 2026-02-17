import Footer from '@/components/Footer'
import Header from '@/components/Header'
import FooterGlow from '@/components/mvpblocks/footer-glow'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const landingLayout = ({ children }: Props) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
    <main className='flex-1 flex flex-col items-center justify-center'>
        {children}
        
    </main>   
    <FooterGlow />
    </div>
  )
}

export default landingLayout