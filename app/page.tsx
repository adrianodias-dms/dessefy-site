import Hero from '@/components/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import WhyDessefy from '@/components/sections/WhyDessefy'
import Ecosystem from '@/components/sections/Ecosystem'
import NextSteps from '@/components/sections/NextSteps'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <HowItWorks />
      <WhyDessefy />
      <Ecosystem />
      <NextSteps />
      <Contact />
    </main>
  )
}
