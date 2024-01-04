import Hero from '@/components/sections/Hero'
import HowCostumersUsing from '@/components/sections/HowCostumersUsing'
import HowItWorks from '@/components/sections/HowItWorks'
import WhyClasscript from '@/components/sections/WhyClasscript'
import ModalVideo from '@/components/sections/modalVideo/ModalVideo'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ModalVideo />
      <WhyClasscript />
      <HowCostumersUsing />
    </>
  )
}
