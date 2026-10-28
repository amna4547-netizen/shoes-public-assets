"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function OurJourneyPage() {
  return (
    <div className="bg-[#F9F7F2] min-h-screen font-serif text-[#1A1A1A] overflow-x-hidden">
      
      {/* Page Header */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#E9E9E9] border-b border-zinc-200">
        <Link href="/" className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-800 hover:text-[#B5A48B] transition-colors">
          ← Back to Home
        </Link>
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#B5A48B] font-bold">Our Journey</span>
      </nav>

      {/* Main Journey Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#B5A48B] uppercase block">Established 1998</span>
            <h1 className="text-3xl md:text-5xl font-light tracking-tighter uppercase text-zinc-900 leading-[0.95]">
              A Legacy of <br /><span className="italic font-serif text-[#B5A48B]">Excellence</span>
            </h1>
            <div className="w-16 h-[1px] bg-zinc-300"></div>
            <p className="text-zinc-700 leading-relaxed font-sans text-base italic font-medium">
              "Starting in 1998, our dedication to true craftsmanship has earned the trust and satisfaction of clients worldwide."
            </p>
            <p className="text-zinc-500 leading-relaxed font-sans text-xs md:text-sm">
              <span className="font-semibold text-zinc-800">EFSteps & Stitch & Sole</span> started its journey in 1998 with a vision to deliver premium leather outerwear and artisanal footwear. Over more than two decades, we have achieved remarkable milestones through persistent dedication, precision craftsmanship, and an unyielding commitment to customer satisfaction.
            </p>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-200">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-[#B5A48B] uppercase">1998</h3>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-800 mt-1">Year Established</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-[#B5A48B] uppercase">100%</h3>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-800 mt-1">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full border-[8px] border-white shadow-2xl overflow-hidden bg-zinc-100">
            <Image 
              src="/craft.jpg" 
              alt="Our Journey Since 1998" 
              fill 
              className="object-cover" 
              unoptimized 
            />
          </div>

        </div>
      </section>

    </div>
  );
}