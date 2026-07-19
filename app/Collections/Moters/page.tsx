import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BikerCollection = () => {
  // Images ke design ke mutabiq updated professional info
  const products = [
    { id: 1, name: "Nexo Sport Pro", variant: "Urban Riding Shoes", price: "$180.00", img: "/moter1.webp" },
    { id: 2, name: "Shima RSX-6", variant: "Touring Adventure Boot", price: "$240.00", img: "/moter2.jpg" },
    { id: 3, name: "Track Master", variant: "High-Ankle Leather Boot", price: "$210.00", img: "/moter3.jpg" },
    { id: 4, name: "Nexo Stealth", variant: "Reflective Street Racer", price: "$195.00", img: "/moter4.webp" },
    { id: 5, name: "Cruiser Series", variant: "Reinforced Daily Wear", price: "$165.00", img: "/moter5.jpg" },
    { id: 6, name: "Frontier Buckle", variant: "Waterproof Terrain Boot", price: "$285.00", img: "/moter6.jpg" },
  ];

  return (
    <section className="bg-[#FDFCF9] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B5A48B] hover:text-black transition-colors mb-12 inline-block">
          ← Back to Collections
        </Link>

        {/* Header Section */}
        <div className="mb-20 text-center">
          <p className="text-[#8B4513] text-xs font-bold tracking-[0.5em] uppercase mb-4">Performance Gear</p>
          <h1 className="text-6xl font-light tracking-tighter uppercase text-zinc-900 leading-none">
            Motor <span className="italic font-serif text-[#B5A48B]">Series</span>
          </h1>
          <p className="mt-4 text-zinc-500 uppercase text-[10px] tracking-widest font-medium">Engineered for protection and speed</p>
          <div className="w-20 h-[1px] bg-[#B5A48B] mx-auto mt-8"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              
              {/* Image Box - Fixed for Shoe Fitting */}
              <div className="relative aspect-square overflow-hidden bg-white border border-zinc-100 shadow-sm transition-all duration-700 group-hover:shadow-xl rounded-sm">
                <Image 
                  src={item.img} 
                  alt={item.name}
                  fill 
                  /* 'object-contain' shoe ko katne se bachayega aur 
                     'p-4' padding shoe ko edges se door rakhegi 
                  */
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-1000"
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
        
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikerCollection;