"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function ProductionFacilityPage() {
  return (
    <div className="bg-[#F9F7F2] min-h-screen font-serif text-[#1A1A1A] overflow-x-hidden">
      
      {/* Page Header */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#E9E9E9] border-b border-zinc-200">
        <Link href="/" className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-800 hover:text-[#B5A48B] transition-colors">
          ← Back to Home
        </Link>
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#B5A48B] font-bold">Production Facility</span>
      </nav>

      {/* Facility Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative aspect-[4/3] w-full border-[8px] border-white shadow-2xl overflow-hidden bg-zinc-100 order-2 lg:order-1">
            <Image 
              src="/pairs.png" 
              alt="Production Facility Workshop" 
              fill 
              className="object-cover" 
              unoptimized 
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#B5A48B] uppercase block">State-of-the-Art Workshop</span>
            <h1 className="text-3xl md:text-5xl font-light tracking-tighter uppercase text-zinc-900 leading-[0.95]">
              Precision <br /><span className="italic font-serif text-[#B5A48B]">Manufacturing</span>
            </h1>
            <div className="w-16 h-[1px] bg-zinc-300"></div>
            <p className="text-zinc-700 leading-relaxed font-sans text-base italic">
              "Where surgical precision meets industrial leather fabrication."
            </p>
            <p className="text-zinc-500 leading-relaxed font-sans text-xs md:text-sm">
              Located in Sialkot, our production facility houses advanced cutting tools, premium stitching machinery, and strict quality control stations. Every piece of hardware and hide undergoes intensive inspection to guarantee lifelong durability and flawless finish.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}