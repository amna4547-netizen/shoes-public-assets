import React from 'react';
import Link from 'next/link';

const LoafersCollection = () => {
  // Niskis Loafers ki images ka data
  const products = [
    { id: 1, name: "Niskis Loafers", variant: "The Digital Artisan", img: "/img3.png" }, // Aapki original image
    { id: 2, name: "Chelsea Edition", variant: "Cognac Leather", img: "/loafer1.webp" }, 
    { id: 3, name: "Vittorio Oxford", variant: "Classic Brogue", img: "/loafer2.webp" },
    { id: 4, name: "Niskis Loafers", variant: "Texture Detail", img: "/loafer3.webp" },
    { id: 5, name: "Modern Chelsea", variant: "Deep Espresso", img: "/loafer4.webp" },
    { id: 6, name: "Artisan Series", variant: "Hand-Burnished", img: "/loafer5.webp" },
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
          <h1 className="text-6xl font-light tracking-tighter uppercase text-zinc-900 leading-none">
            THE SIGNATURE <span className="italic font-serif text-[#B5A48B]">CHELSEA</span>
          </h1>
          <p className="mt-4 text-zinc-500 uppercase text-[10px] tracking-widest font-medium">Where traditional craft meets digital precision</p>
          <div className="w-20 h-[1px] bg-zinc-300 mx-auto mt-8"></div>
        </div>

        {/* 6 Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item) => (
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

export default LoafersCollection;