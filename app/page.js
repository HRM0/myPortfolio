import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className='container mt-24 mx-auto py-4 px-12'>
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
