'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FooterLink } from '@/constants';
import ServiceBlog from '@/components/outbound/Footer/OurServiceSpectrum';
import TermsAndConditions from '@/components/outbound/Footer/TermsAndCondition';
import SustainableTourismBlog from '@/components/outbound/Footer/SustainableToursm';
import OutboundTravelBlog from '@/components/outbound/Footer/OutboundHolidays';
import SafetyGuidelinesBlog from '@/components/outbound/Footer/SaftyTravel';
import BucketListPage from '@/components/outbound/Footer/BucketList';
import Partners from '@/components/outbound/Footer/Parnters';
import WhyChooseUs from '@/components/outbound/Footer/WhyChoosUs';
import EnvironmentPolicy from '@/components/outbound/Footer/EnvironmentPolicy';

const BlogContent: React.FC = () => {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks: FooterLink[] = [
    { title: 'Our Service Spectrum', href: 'our-service-spectrum' },
    { title: 'Terms & Conditions', href: 'terms-conditions' },
    { title: 'Sustainable Tourism', href: 'sustainable-tourism' },
    { title: 'Bucket List', href: 'bucket-list' },
    { title: 'Outbound Holidays', href: 'outbound-holidays' },
    { title: 'Safety Guidelines', href: 'safety-guidelines' },
    { title: 'Partners', href: 'partners' },
    { title: 'Why Choose Us', href: 'why-choose-us' },
    { title: 'Environment Policy', href: 'environment-policy' },
  ];

  // Scroll to section when clicking a button
  const handleScrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
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
      {/* Desktop Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-50 hidden md:block">
        <div className="container mx-auto px-4 py-2 flex flex-wrap gap-2 items-center justify-center">
          {navigationLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollToSection(link.href)}
              className={`px-4 py-2  text-[11px] font-semibold transition-all ${activeSection === link.href
                ?  'bg-orange-500  border-b text-white rounded-lg'
                : 'bg-white text-black  border border-orange-500 rounded-lg '
                }`}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-50 md:hidden">
        <div className="container mx-auto px-4 py-2 flex justify-end">
          {/* Three dots button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-orange-500 text-3xl focus:outline-none"
          >
            ⋮
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-12 right-4 bg-white shadow-lg  rounded-md w-56 p-2 z-50">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScrollToSection(link.href)}
                className={`block w-full text-left px-4 py-2  text-[11px] font-semibold transition-all ${activeSection === link.href
                    ?  'bg-orange-500  border-b text-white rounded-lg'
                    : 'bg-white text-black  border border-orange-500 rounded-lg'
                  }`}
              >
                {link.title}
              </button>
            ))}
          </div>
        )}
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
        <div id="environment-policy" className="scroll-mt-24">
          <EnvironmentPolicy />
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
