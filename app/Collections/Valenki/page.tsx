import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ValenkiCollection = () => {
  const products = [
    { 
      id: 1, 
      name: "Crimson Rowan", 
      variant: "Hand-Stitched Red Berry Motif", 
      img: "/Valenki1.webp", // Specific rowan berries embroidery
      desc: "White organic felt featuring the iconic winter rowan berry design.",
      customPadding: "p-10" // Extra padding for better fit
    },
    { 
      id: 2, 
      name: "Tundra Titmouse", 
      variant: "Folk Art Bird Embroidery", 
      img: "/Valenki2.webp", // Yellow/Blue tit bird visible
      desc: "Detailed songbird art on natural grey-white wool felt.",
      customPadding: "p-10"
    },
    { 
      id: 3, 
      name: "Heritage Grey", 
      variant: "Classic Unlined Wool", 
      img: "/Valenki3.jpg", 
      desc: "Traditional minimalist design for maximum thermal insulation."
    },
    { 
      id: 4, 
      name: "Ural Earth", 
      variant: "Deep Charcoal Felt", 
      img: "/Valenki4.jpg", 
      desc: "Dense, heavy-duty wool felt for extreme sub-zero conditions."
    },
    { 
      id: 5, 
      name: "Winter Village", 
      variant: "Scenic Landscape Needlework", 
      img: "/Valenki5.jpeg", // Village/House scene
      desc: "A hand-felted masterpiece depicting a quiet snowy village scene.",
      customPadding: "p-12" // Deep padding for the landscape view
    },
    { 
      id: 6, 
      name: "Nordic Star", 
      variant: "Geometric Pattern Stitch", 
      img: "/Valenki6.webp", 
      desc: "Traditional geometric embroidery on dark chocolate wool."
    },
  ];

  return (
    <section className="bg-[#FDFCF9] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B5A48B] hover:text-black transition-colors mb-12 inline-block">
          ← Back to Collections
        </Link>

        {/* Header Section */}
        <div className="mb-20 text-center">
          <p className="text-[#8B4513] text-xs font-bold tracking-[0.5em] uppercase mb-4">Artisanal Footwear</p>
          <h1 className="text-6xl font-light tracking-tighter uppercase text-zinc-900 leading-none">
            Valenki <span className="italic font-serif text-[#B5A48B]">Heritage</span>
          </h1>
          <p className="mt-4 text-zinc-500 uppercase text-[10px] tracking-widest font-medium">100% Organic Felted Wool | Price Upon Request</p>
          <div className="w-20 h-[1px] bg-[#B5A48B] mx-auto mt-8"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              
              {/* Image Box - Special adjustment for items 1, 2, 5 */}
              <div className="relative aspect-square overflow-hidden bg-white border border-zinc-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl rounded-sm">
                <Image 
                  src={item.img} 
                  alt={item.name}
                  fill 
                  /* 'item.customPadding' specifically handles images 1, 2, and 5 */
                  className={`object-contain ${item.customPadding || 'p-8'} group-hover:scale-105 transition-transform duration-1000`}
                />
              </div>
              
              {/* Product Info (Price Removed) */}
              <div className="mt-8 text-center px-4">
                <h3 className="text-[12px] font-black tracking-[0.2em] text-zinc-900 uppercase">
                  {item.name}
                </h3>
                <p className="text-[10px] text-[#B5A48B] italic uppercase tracking-widest mt-1">
                  {item.variant}
                </p>
                <p className="text-[11px] text-zinc-400 font-light mt-4 leading-relaxed max-w-[250px] mx-auto italic">
                  {item.desc}
                </p>
                <div className="w-8 h-[1px] bg-zinc-200 mx-auto mt-6"></div>
                <button className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-black transition-colors">

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValenkiCollection;