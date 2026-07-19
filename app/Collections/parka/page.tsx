import React from 'react';
import Link from 'next/link';

const CowgirlJacketsCollection = () => {
  // Women's Cowgirl/Western Jackets ki images ka data (Real image paths kept exactly as provided)
  const products = [
    { id: 2, name: "SIERRA SUNSET TRUCKER", variant: "Cognac Leather Edition", img: "/cow women2.jpg" }, 
    { id: 3, name: "TEXAS ROSE MOTO", variant: "Classic Stitched Finish", img: "/cow women3.jpg" },
    { id: 4, name: "DAKOTA FRINGE SHELL", variant: "Texture Detail & Suede", img: "/cow women4.jpg" },
    { id: 5, name: "MUSTANG RIDER SUEDE", variant: "Deep Espresso Patina", img: "/cow women5.jpg" },
    { id: 6, name: "WESTERN CHIC AVIATOR", variant: "Hand-Burnished Roughout", img: "/cow women6.jpg" },
    { id: 7, name: "VALLEY DUST BIKER", variant: "Hand-Stitched Heritage", img: "/cow women7.jpg" },
    { id: 8, name: "CATTLEMAN CLASSIC", variant: "Traditional Raw Grain", img: "/cow women8.jpg" },
    { id: 9, name: "WILD ROSE TRENCH", variant: "Distressed Suede Finish", img: "/cow women9.jpg" },
    { id: 10, name: "ELDORADO WESTERN", variant: "Premium Burnished Tan", img: "/cow women10.jpg" },
    { id: 11, name: "RODEO STAR SHEARLING", variant: "Vintage Suede Touch", img: "/cow women11.jpg" },
    { id: 12, name: "CANYON DRIFT BOMBER", variant: "Soft Matte Tan", img: "/cow women12.jpg" },
    { id: 13, name: "PRAIRIE EMBROIDERED COAT", variant: "Artisan Stitch Pattern", img: "/cow women13.jpg" },
    { id: 14, name: "SADDLE LEATHER BLAZER", variant: "Premium Tailored Fit", img: "/cow women14.jpg" },
    { id: 15, name: "AZTEC FRONTIER SHIRT JACKET", variant: "Heritage Weave Blend", img: "/cow women15.jpg" },
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
          <p className="text-[#B5A48B] text-xs font-bold tracking-[0.5em] uppercase mb-4">Western Heritage</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase text-zinc-900 leading-none">
            COWGIRL <span className="italic font-serif text-[#B5A48B]">COLLECTION</span>
          </h1>
          <p className="mt-4 text-zinc-500 uppercase text-[10px] tracking-widest font-medium">Where traditional western craft meets digital precision</p>
          <div className="w-20 h-[1px] bg-zinc-300 mx-auto mt-8"></div>
        </div>

        {/* 15 Image Grid */}
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

export default CowgirlJacketsCollection;