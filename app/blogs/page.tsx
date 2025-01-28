'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FooterLink } from '@/constants';
import ServiceBlog from '@/components/Footer/OurServiceSpectrum';
import TermsAndConditions from '@/components/Footer/TermsAndCondition';
import SustainableTourismBlog from '@/components/Footer/SustainableToursm';
import OutboundTravelBlog from '@/components/Footer/OutboundHolidays';
import SafetyGuidelinesBlog from '@/components/Footer/SaftyTravel';
import BucketListPage from '@/components/Footer/BucketList';
import Partners from '@/components/Footer/Parnters';
import WhyChooseUs from '@/components/Footer/WhyChoosUs';

const BlogContent: React.FC = () => {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navigationLinks: FooterLink[] = [
    { title: 'Our Service Spectrum', href: 'our-service-spectrum' },
    { title: 'Terms & Conditions', href: 'terms-conditions' },
    { title: 'Sustainable Tourism', href: 'sustainable-tourism' },
    { title: 'Bucket List', href: 'bucket-list' },
    { title: 'Outbound Holidays', href: 'outbound-holidays' },
    { title: 'Safety Guidelines', href: 'safety-guidelines' },
    { title: 'Partners', href: 'partners' },
    { title: 'Why Choose Us', href: 'why-choose-us' }
  ];

  // Scroll to section when clicking a button
  const handleScrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detect which section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = null;

      for (let link of navigationLinks) {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = link.href;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially to detect section on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation Buttons */}
      <div className="sticky top-20 bg-white shadow-md z-50 hidden md:block">
        <div className="container mx-auto px-4 py-2 flex flex-wrap gap-2 items-center justify-center">
          {navigationLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollToSection(link.href)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                activeSection === link.href
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100'
              }`}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto md:px-4 mt-10">
        <div id="our-service-spectrum" className="scroll-mt-24">
          <ServiceBlog />
        </div>
        <div id="terms-conditions" className="scroll-mt-24">
          <TermsAndConditions />
        </div>
        <div id="sustainable-tourism" className="scroll-mt-24">
          <SustainableTourismBlog />
        </div>
        <div id="bucket-list" className="scroll-mt-24">
          <BucketListPage />
        </div>
        <div id="outbound-holidays" className="scroll-mt-24">
          <OutboundTravelBlog />
        </div>
        <div id="safety-guidelines" className="scroll-mt-24">
          <SafetyGuidelinesBlog />
        </div>
        <div id="partners" className="scroll-mt-24">
          <Partners />
        </div>
        <div id="why-choose-us" className="scroll-mt-24">
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
};

// Loading component for Suspense fallback
const LoadingBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

const BlogsPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingBlog />}>
      <BlogContent />
    </Suspense>
  );
};

export default BlogsPage;
