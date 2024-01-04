import Faq from '@/components/sections/Faq'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import HowCostumersUsing from '@/components/sections/HowCostumersUsing'
import HowItWorks from '@/components/sections/HowItWorks'
import OurCostumers from '@/components/sections/OurCostumers'
import Pricing from '@/components/sections/Pricing'
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
      <OurCostumers />
      <Pricing />
      <Faq />
      <Footer />
    </>
  )
}
