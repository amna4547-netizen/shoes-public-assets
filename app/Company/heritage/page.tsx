"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function BrandHeritagePage() {
  return (
    <div className="bg-[#F9F7F2] min-h-screen font-serif text-[#1A1A1A] overflow-x-hidden">
      
      {/* Page Header */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#E9E9E9] border-b border-zinc-200">
        <Link href="/" className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-800 hover:text-[#B5A48B] transition-colors">
          ← Back to Home
        </Link>
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#B5A48B] font-bold">Brand Heritage</span>
      </nav>

      {/* Heritage Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#B5A48B] uppercase block">Our Roots</span>
            <h1 className="text-3xl md:text-5xl font-light tracking-tighter uppercase text-zinc-900 leading-[0.95]">
              The Soul of <br /><span className="italic font-serif text-[#B5A48B]">The Stitch</span>
            </h1>
            <div className="w-16 h-[1px] bg-zinc-300"></div>
            <p className="text-zinc-700 leading-relaxed font-sans text-base italic">
              "We believe in the endurance of fine leather and the timeless legacy of handcrafted artisanal wear."
            </p>
            <p className="text-zinc-500 leading-relaxed font-sans text-xs md:text-sm">
              Born from a dedication to superior craftsmanship, <span className="font-semibold text-zinc-800">EFSteps & Stitch & Sole</span> bridges traditional leather working techniques with modern luxury silhouettes. Every jacket and pair of footwear represents decades of mastery passed down through generations of artisans.
            </p>
          </div>

          <div className="relative aspect-[3/4] w-full border-[8px] border-white shadow-2xl overflow-hidden bg-zinc-100">
            <Image 
              src="/craft.jpg" 
              alt="Brand Heritage Craftsmanship" 
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