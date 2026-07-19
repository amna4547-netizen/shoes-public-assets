import React from 'react';
import Link from 'next/link';

const PerformanceCollection = () => {
  const products = [
    { id: 1, name: "Athletic Performance", variant: "Knit Edition", img: "/img4.png" }, // Original Image
    { id: 2, name: "Movement Series", variant: "Teal Accents", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86" },
    { id: 3, name: "Urban Kinetic", variant: "Dark Orange Sole", img: "/sport3.jpg" },
    { id: 4, name: "Performance Knit", variant: "Minimalist Beige", img: "/sport4.jpg" },
    { id: 5, name: "Flex Series", variant: "Breathable Mesh", img: "https://images.unsplash.com/photo-1539185441755-769473a23570" },
    { id: 6, name: "Daily Mover", variant: "Premium Leather Heel", img: "/sport2.webp" },
  ];

  return (
    <section className="bg-[#FDFCF9] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B5A48B] hover:text-[#2D5A5A] transition-colors mb-12 inline-block">
          ← Back to Movement
        </Link>

        {/* Header Section */}
        <div className="mb-20 text-center">
          <p className="text-[#FF8C00] text-xs font-bold tracking-[0.5em] uppercase mb-4">The Performance Lab</p>
          <h1 className="text-6xl font-light tracking-tighter uppercase text-zinc-900 leading-none">
            Athletic <span className="italic font-serif text-[#2D5A5A]">Performance</span>
          </h1>
          <div className="w-20 h-[1px] bg-[#FF8C00] mx-auto mt-8"></div>
        </div>

        {/* 6 Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Box with Teal Hover Border */}
              <div className="aspect-[3/4] overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm transition-all duration-700 group-hover:border-[#2D5A5A] group-hover:shadow-2xl">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              {/* Text Details with Orange Accent */}
              <div className="mt-8 space-y-2 text-center">
                <h3 className="text-[11px] font-black tracking-[0.2em] text-zinc-900 uppercase">
                  {item.name}
                </h3>
                <p className="text-[10px] text-[#FF8C00] font-bold uppercase tracking-widest leading-none">
                  {item.variant}
                </p>
                <p className="text-[14px] text-[#2D5A5A] font-medium mt-2"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceCollection;