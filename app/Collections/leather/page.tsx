import React from 'react';
import Link from 'next/link';

const WomenLeatherJackets = () => {
  // Women's Leather Jackets ki images ka data (Real image paths kept exactly as provided)
  const jackets = [
    { id: 1, name: "THE LUXE MOTO JACKET", variant: "The Digital Artisan", img: "/women jacket1.jpg" }, 
    { id: 2, name: "CLASSIC SUEDE TRUCKER", variant: "Cognac Leather Edition", img: "/women jacket2.jpg" }, 
    { id: 3, name: "HERITAGE AVIATOR", variant: "Classic Brogue Finish", img: "/women jacket3.jpg" },
    { id: 4, name: "URBAN CROPPED SHELL", variant: "Texture Detail & Grain", img: "/women jacket4.avif" },
    { id: 5, name: "PREMIUM SLIM FIT BIKER", variant: "Deep Espresso Hue", img: "/women jacket5.jpg" },
    { id: 6, name: "ARTISAN TRENCH COAT", variant: "Hand-Burnished Patina", img: "/women jacket6.jpg" },
    { id: 7, name: "BOMBER COUTURE SHELL", variant: "Hand-Burnished Edge", img: "/women jacket7.jpg" },
    { id: 8, name: "ELEGANT CAFE RACER", variant: "Hand-Burnished Finish", img: "/women jacket8.jpg" },
    { id: 9, name: "MODERN FIELD JACKET", variant: "Soft Matte Finish", img: "/women jacket9.jpg" },
    { id: 10, name: "LUXURY OVERSIZED BIKER", variant: "Premium Grain Leather", img: "/women jacket10.jpg" },
  ];

  return (
    <section className="bg-[#FDFCF9] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors mb-12 inline-block">
          ← Back to Gallery
        </Link>

        {/* Header Section */}
        <div className="mb-20 text-center">
          <p className="text-[#B5A48B] text-xs font-bold tracking-[0.5em] uppercase mb-4">Artisan Series</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase text-zinc-900 leading-none">
            WOMEN'S LEATHER <span className="italic font-serif text-[#B5A48B]">JACKETS</span>
          </h1>
          <p className="mt-4 text-zinc-500 uppercase text-[10px] tracking-widest font-medium">Where traditional craft meets digital precision</p>
          <div className="w-20 h-[1px] bg-zinc-300 mx-auto mt-8"></div>
        </div>

        {/* 10 Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {jackets.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Box */}
              <div className="aspect-[3/4] overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              {/* Text Details */}
              <div className="mt-8 space-y-2 text-center">
                <h3 className="text-[11px] font-black tracking-[0.2em] text-zinc-900 uppercase">
                  {item.name}
                </h3>
                <p className="text-[10px] text-[#B5A48B] italic uppercase tracking-widest leading-none">
                  {item.variant}
                </p>
                <p className="text-[14px] text-zinc-400 font-light mt-2"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenLeatherJackets;