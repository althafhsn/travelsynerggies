// app/blogs/page.tsx
'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FooterLink } from '@/constants';
import ServiceBlog from '@/components/Footer/OurServiceSpectrum';

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

  interface BlogSection {
    id: string;
    title: string;
    content: string;
  }

  const blogSections: BlogSection[] = [
    {
      id: 'terms-conditions',
      title: 'Terms & Conditions',
      content: 'Your terms and conditions content goes here...'
    },
    {
      id: 'find-us',
      title: 'Where Did You Find Us',
      content: 'Your where did you find us content goes here...'
    },
    {
      id: 'privacy-cookies',
      title: 'Privacy Cookies',
      content: 'Your privacy cookies content goes here...'
    },
    {
      id: 'sustainable-tourism',
      title: 'Sustainable Tourism',
      content: 'Your sustainable tourism content goes here...'
    },
    {
      id: 'bucket-list',
      title: 'Bucket List',
      content: 'Your bucket list content goes here...'
    },
    {
      id: 'outbound-holidays',
      title: 'Outbound Holidays',
      content: 'Your outbound holidays content goes here...'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {navigationLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              {link.title}
            </a>
          ))}

        </div>

        {/* Blog Sections */}
        <div className="space-y-16">
          {blogSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
              <div className="prose max-w-none">
                <p>{section.content}</p>
              </div>
            </section>
          ))}
        </div>
        <div id='our-service-spectrum' className="scroll-mt-16">
          <ServiceBlog />
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