'use client'

import PageLayout from '@/app/components/layout/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  { 
    title: 'Smart Job Matching',
    desc: 'AI-powered system connects you with the perfect opportunities'
  },
  { 
    title: 'Verified Employers',
    desc: 'All employers are verified for your security'
  },
  { 
    title: 'Easy Application',
    desc: 'Apply to multiple jobs with a single profile'
  },
  { 
    title: 'Real-time Updates',
    desc: 'Get instant notifications for your applications'
  }
]

export default function RecruitmentPage() {
  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
          {/* Background Color/Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-1/2 pl-12 z-10">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Find Your Next
                <span className="block text-gold">Career Opportunity</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Quickjobs.lk offers a comprehensive platform to explore various job profiles, including available jobs, wages, career prospects.
              </p>
              <Link 
                href="https://quickjobs.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold
                  hover:scale-105 transition-transform"
              >
                Browse Jobs
              </Link>
            </div>
            
            {/* Logo Section */}
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
              <Image
                src="/Quickjobs.png"
                alt="QuickJobs.lk"
                width={300}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gray-800/50 rounded-xl hover:scale-105 transition-transform"
            >
              <h3 className="font-semibold text-gold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-800/50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-gold">Get Started?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your profile today and let employers find you. 
            It's free and takes less than 5 minutes.
          </p>
          <Link 
            href="https://quickjobs.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold
              hover:scale-105 transition-transform"
          >
            Create Your Profile
          </Link>
        </div>
      </section>
    </PageLayout>
  )
} 