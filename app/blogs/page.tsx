// app/blogs/page.tsx
'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FooterLink } from '@/constants';
import ServiceBlog from '@/components/Footer/OurServiceSpectrum';
import TermsAndConditions from '@/components/Footer/TermsAndCondition';
import SustainableTourismBlog from '@/components/Footer/SustainableToursm';
import OutboundTravelBlog from '@/components/Footer/OutboundHolidays';
import SafetyGuidelinesBlog from '@/components/Footer/SaftyTravel';
import BucketListPage from '@/components/Footer/BucketList';

const BlogContent: React.FC = () => {
  const searchParams = useSearchParams();

  const navigationLinks: FooterLink[] = [
    { title: 'Our Service Spectrum', href: '#our-service-spectrum' },
    { title: 'Terms & Conditions', href: '#terms-conditions' },
    { title: 'Privacy Cookies', href: '#privacy-cookies' },
    { title: 'Sustainable Tourism', href: '#sustainable-tourism' },
    { title: 'Bucket List', href: '#bucket-list' },
    { title: 'Outbound Holidays', href: '#outbound-holidays' },
    { title: 'Safety Guidelines', href: '#safety-guidelines' },
    { title: 'About Us', href: '#about-us' },
    { title: 'Careers', href: '#careers' },
    { title: 'Contact Us', href: '#contact-us' },
    { title: 'Partners', href: '#partners' }
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      

      <div className="container mx-auto px-4">
        <div id='our-service-spectrum' className="scroll-mt-16">
          <ServiceBlog />
        </div>
        <div id='terms-conditions' className="scroll-mt-16" >
          <TermsAndConditions />
        </div>

        <div id='sustainable-tourism' className="scroll-mt-16">
          <SustainableTourismBlog />
        </div>
        <div id='bucket-list' className="scroll-mt-16">
          <BucketListPage />
        </div>
        <div id='outbound-holidays' className="scroll-mt-16">
          <OutboundTravelBlog />
        </div>
        <div id='safety-guidelines' className="scroll-mt-16">
          <SafetyGuidelinesBlog />
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