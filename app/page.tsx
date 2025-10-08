'use client';

import { Navigation } from '@/app/components/ui/Navigation';
import { Footer } from '@/app/components/ui/Footer';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { VisionMissionSection } from '@/app/components/sections/VisionMissionSection';
import { ImmersiveSection } from '@/app/components/sections/ImmersiveSection';
import { JourneySection } from '@/app/components/sections/JourneySection';
import { KeyServicesSection } from '@/app/components/sections/KeyServicesSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ImmersiveSection />
      <JourneySection />
      <KeyServicesSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
