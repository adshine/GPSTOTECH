import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ChallengesSection from "@/components/sections/ChallengesSection"
import BenefitsSection from "@/components/sections/BenefitsSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import CTASection from "@/components/sections/CTASection"
import FAQSection from "@/components/sections/FAQSection"
import PrivacyPolicy from "@/pages/PrivacyPolicy"
import TermsOfService from "@/pages/TermsOfService"

function HomePage() {
  useEffect(() => {
    // Implement smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
        if (!href) return

        const target = document.querySelector(href)
        if (!target) return

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Update URL without scrolling
        window.history.pushState({}, "", href)
      })
    })
  }, [])

  return (
    <>
      <main>
        <HeroSection />
        <ChallengesSection />
        <BenefitsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
    </>
  )
}

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
