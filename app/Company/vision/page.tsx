"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function GlobalVisionPage() {
  return (
    <div className="bg-[#F9F7F2] min-h-screen font-serif text-[#1A1A1A] overflow-x-hidden">
      
      {/* Page Header */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#E9E9E9] border-b border-zinc-200">
        <Link href="/" className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-800 hover:text-[#B5A48B] transition-colors">
          ← Back to Home
        </Link>
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#B5A48B] font-bold">Global Vision & About Us</span>
      </nav>

      {/* Vision Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#B5A48B] uppercase block">Looking Ahead</span>
            <h1 className="text-3xl md:text-5xl font-light tracking-tighter uppercase text-zinc-900 leading-[0.95]">
              Global <br /><span className="italic font-serif text-[#B5A48B]">Vision</span>
            </h1>
            <div className="w-16 h-[1px] bg-zinc-300"></div>
            <p className="text-zinc-700 leading-relaxed font-sans text-base italic">
              "Redefining international standards for luxury leather outerwear and footwear."
            </p>
            <p className="text-zinc-500 leading-relaxed font-sans text-xs md:text-sm">
              Our vision is to position <span className="font-semibold text-zinc-800">EFSteps & Stitch & Sole</span> as a premier global benchmark for sustainable luxury. By combining ethical sourcing, eco-friendly tanning practices, and unmatched artisanal tailoring, we deliver timeless elegance to urban explorers worldwide.
            </p>
          </div>

          <div className="relative aspect-[3/4] w-full border-[8px] border-white shadow-2xl overflow-hidden bg-zinc-100">
            <Image 
              src="/jacket5.jpg" 
              alt="Global Vision Style" 
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