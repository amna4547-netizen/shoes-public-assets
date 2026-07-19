import React from 'react';
import Link from 'next/link';

const VittorioCollection = () => {
  // Aapke shoe ki 6 images ka data
  const products = [
    { id: 1, name: "Vittorio Oxford", variant: "The Masterpiece", img: "/img1.png" }, // Aapki original image
    { id: 2, name: "Vittorio Oxford", variant: "Side Profile", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4" },
    { id: 3, name: "Vittorio Oxford", variant: "Craft Detail", img: "/shoes2.webp" },
    { id: 4, name: "Vittorio Oxford", variant: "Premium Sole", img: "/shoes3.webp" },
    { id: 5, name: "Vittorio Oxford", variant: "Lifestyle Edit", img: "/oxford.jpeg" },
    { id: 6, name: "Vittorio Oxford", variant: "Workshop View", img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e" },
  ];

  return (
    <section className="bg-[#FDFCF9] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button - Home wapis jane ke liye */}
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors mb-12 inline-block">
          ← Back to Gallery
        </Link>

        {/* Header Section */}
        <div className="mb-20 text-center">
          <p className="text-[#B5A48B] text-xs font-bold tracking-[0.5em] uppercase mb-4">Collection</p>
          <h1 className="text-6xl font-light tracking-tighter uppercase text-zinc-900 leading-none">
            Vittorio & <span className="italic font-serif text-[#B5A48B]">Co.</span>
          </h1>
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
              
              {/* Text Under Image */}
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

// --- YE LINE SIRF EK BAR END PAR HONI CHAHIYE ---
export default VittorioCollection;