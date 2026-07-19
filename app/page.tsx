"use client";
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("SENDING");

    try {
      const response = await fetch("https://formspree.io/f/xvzljegw", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="bg-[#f9f7f2b2] min-h-screen font-serif text-[#1A1A1A] overflow-x-hidden">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#E9E9E9] sticky top-0 z-[100] border-b border-zinc-200">
        <div className="flex items-center gap-10">
          <div 
            className="flex flex-col items-center leading-none group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <img
              src="/icon.jpeg" 
              alt="EF & Steps Icon"
              className="h-12 md:h-20 w-auto mb-2 opacity-90 group-hover:opacity-100 transition-all duration-300" 
            />
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-zinc-800 group-hover:text-[#B5A48B] transition-colors duration-300 italic">
                EFSteps
              </span>
              <div className="h-[1px] w-0 group-hover:w-full bg-[#B5A48B] transition-all duration-500 mt-1"></div>
            </div>
          </div>

          <div className="hidden md:flex gap-10 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            <a href="#collections" className="hover:text-black transition-colors">Collections</a>
            <a href="#jackets" className="hover:text-black transition-colors">Jackets</a>
            <a href="#about" className="hover:text-black transition-colors">About Us</a>
            <a href="#craft" className="hover:text-black transition-colors">Craft</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-10">
          <div className="flex gap-4 md:gap-6 text-zinc-600 items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="cursor-pointer hover:text-black">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <a href="#contact" className="hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="cursor-pointer">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </a>
          </div>
          <a href="#collections" className="hidden sm:block border border-[#B5A48B] px-6 md:px-10 py-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[#B5A48B] hover:bg-[#B5A48B] hover:text-white transition-all duration-500">
            Explore
          </a>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="block md:hidden text-zinc-800 focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#E9E9E9] border-b border-zinc-200 py-4 px-6 flex flex-col gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 sticky top-[81px] z-[99]">
          <a href="#collections" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors py-1">Collections</a>
          <a href="#jackets" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors py-1">Jackets</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors py-1">About Us</a>
          <a href="#craft" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors py-1">Craft</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-black transition-colors py-1">Contact</a>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <header className="relative h-[85vh] w-full overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-12 w-full h-full z-0">
          <div className="col-span-4 relative h-full">
            <Image src="/craft.jpg" alt="Craft" fill className="object-cover grayscale-[0.2]" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111111]/60 to-[#111111]"></div>
          </div>
          <div className="hidden md:block md:col-span-4 bg-[#111111]"></div>
          <div className="hidden md:block md:col-span-4 relative h-full">
            <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-[#111111]/40 to-[#111111] pointer-events-none"></div>
            <div className="flex-1 relative h-full border-b border-zinc-900">
              <Image src="/model-1.jpg" alt="Model" fill className="object-cover" unoptimized />
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
          <div className="w-full max-w-[95vw] text-center pointer-events-auto text-white">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-tight md:leading-[1.05] mb-6 tracking-tighter uppercase flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-4">
              <span>Defining Modern</span>
              <span className="text-[#B5A48B] min-h-[40px] sm:min-h-0"> 
                <Typewriter
                  options={{
                    strings: ['Footwear.', 'Comfort.'],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                  }}
                />
              </span>
            </div>
            <p className="text-white/60 text-[10px] md:text-xs mb-10 font-sans max-w-xl mx-auto leading-relaxed italic uppercase tracking-[0.3em] md:tracking-[0.4em] px-2">
              Curated collections for the urban explorer. <br className="hidden sm:block"/> 
              Discover the art of every step.
            </p>
            <div className="flex flex-col items-center gap-6 md:gap-10">
              <a href="#collections" className="border border-white/20 text-white px-8 md:px-12 py-3 md:py-4 text-[9px] md:text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700 backdrop-blur-sm">
                Explore Collections
              </a>
              <div className="mt-2 md:mt-4 animate-bounce">
                <svg width="24" height="60" viewBox="0 0 24 48" fill="none">
                  <path d="M12 0V45M12 45L5 38M12 45L19 38" stroke="#B5A48B" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. FEATURED ARRIVALS */}
      <section id="collections" className="py-20 md:py-32 px-6 md:px-12 relative bg-[#F9F7F2] overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.08] md:opacity-20 py-24 select-none">
          <span className="text-[20vw] md:text-[22vw] font-black tracking-tighter -ml-16 leading-none text-zinc-400">SEASONAL</span>
          <span className="text-[20vw] md:text-[22vw] font-black tracking-tighter self-end -mr-16 leading-none text-zinc-400">FAVOURITES</span>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl mb-16 tracking-tighter uppercase text-zinc-800 font-medium text-center md:text-left">
            Featured Arrivals
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
            {[
              { id: 1, name: "THE SIGNATURE OXFORD", desc: "Vittorio & Co. Series", img: "/img1.png", slug: "/Collections/vittorio" },
              { id: 2, name: "THE SLAKE BOOTS", desc: "Rugged Elegance", img: "/img2.png", slug: "/Collections/slake" },
              { id: 3, name: "THE SIGNATURE CHELSEA", desc: "Digital Artisan", img: "/img3.png", slug: "/Collections/loafer" },
              { id: 4, name: "URBAN PERFORMANCE", desc: "Modern Movement", img: "/img4.png", slug: "/Collections/performance" },
              { id: 5, name: "COWBOY BOOTS", desc: "Classic Western Style", img: "/cow boy shoe.png", slug: "/Collections/boys" },
              { id: 6, name: "FORMAL SCHOOL SHOES", desc: "Durable All-Day Comfort", img: "/school shoe.png", slug: "/Collections/school" },
              { id: 7, name: "MOTOR BIKE RACING BOOTS", desc: "High-Performance Protection", img: "/motter bike.png", slug: "/Collections/Moters" },
              { id: 8, name: "VALENKI FELT BOOTS", desc: "Traditional Winter Warmth", img: "/valenki.png", slug: "/Collections/Valenki" }
            ].map((item) => (
              <Link href={item.slug} key={item.id} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[3/4.8] w-full mb-6 border-[1px] border-zinc-200 transition-all duration-300 overflow-hidden bg-[#E8E4D9]">
                  <div className="relative w-full h-[75%] overflow-visible flex items-center justify-center">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-contain scale-[1.2] group-hover:scale-[1.5] transition-transform duration-500 mix-blend-multiply z-10" 
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-30 space-y-1">
                    <h3 className="font-bold text-[10px] md:text-[11px] tracking-[0.2em] text-zinc-900 uppercase">
                      {item.name}
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-zinc-600 font-light tracking-wide italic leading-tight">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 h-20 border border-white/40 backdrop-blur-[2px] bg-white/10 z-20 shadow-inner"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* 4. CRAFT & SUSTAINABILITY */}
      <section id="craft" className="bg-white py-20 md:py-32 px-6 md:px-12 relative z-20 overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-[#F9F7F2] -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <div className="relative flex items-center h-[350px] md:h-[650px] w-full">
            <div className="relative w-[80%] h-full z-10 shadow-2xl overflow-hidden border-4 md:border-8 border-white ml-6 md:ml-20">
              <img 
                src="/craft.jpg" 
                alt="Craft" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=800";
                }}
              />
            </div>
            <div className="absolute right-[-5px] md:right-[-20px] top-1/2 -translate-y-1/2 w-[45%] flex flex-col gap-4 md:gap-6 z-20">
              <div className="bg-[#D3CDC4]/95 backdrop-blur-md p-4 md:p-10 aspect-square flex flex-col justify-center items-center shadow-2xl border border-white/50">
                <span className="text-xl md:text-4xl mb-2 md:mb-3">♻️</span>
                <p className="text-[8px] md:text-[11px] uppercase font-black tracking-[0.2em] md:tracking-[0.3em] text-zinc-800 text-center leading-tight">Ethically <br/> Recycled</p>
              </div>
              <div className="aspect-[4/5] shadow-2xl border-4 border-white overflow-hidden bg-white hidden md:block">
                <img 
                  src="/model-1.jpg" 
                  alt="Material" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500";
                  }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-10 lg:pl-12 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[#B5A48B] text-xs font-bold tracking-[0.5em] uppercase">Commitment</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[0.9] text-zinc-900">Craft & <br /> <span className="italic font-serif font-normal text-[#B5A48B]">Sustainability</span></h2>
            </div>
            <div className="w-24 h-[1px] bg-zinc-300 mx-auto lg:mx-0"></div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg font-medium tracking-tight text-zinc-800 leading-relaxed uppercase">Handcrafted. <br /> <span className="text-zinc-400">Ethically Sourced.</span></p>
              <p className="text-zinc-500 font-sans leading-relaxed text-sm md:text-[15px] max-w-sm mx-auto lg:mx-0">Our materials are chosen to withstand the test of time while ensuring we make responsible choices for the planet and the people.</p>
            </div>
            <button className="group relative flex items-center justify-center lg:justify-start gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-zinc-900 transition-all mx-auto lg:mx-0">
              <span className="border-b border-black pb-1 group-hover:text-[#B5A48B] group-hover:border-[#B5A48B]">Learn Our Process</span>
              <span className="text-lg transition-transform group-hover:translate-x-2">→</span>
            </button>
          </div>
        </div>
      </section>

      
      {/* PREMIUM JACKETS SECTION */}
      <section id="jackets" className="py-20 md:py-32 px-6 md:px-12 relative bg-[#E9E9E9] overflow-hidden scroll-mt-20 border-t border-zinc-300">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl mb-16 tracking-tighter uppercase text-zinc-800 font-medium text-center md:text-left">
            Premium Jackets
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
            {[
              { id: 1, name: "The Men's Leather Jackets", desc: "Classic Aviator Fit", img: "/jacket1.jpg", slug: "/Collections/bomber" },
              { id: 2, name: "The Cow Boy Jackets", desc: "Premium Velvet Touch", img: "/cow boy.jpg", slug: "/Collections/suede" },
              { id: 3, name: "HERITAGE LEATHER JACKET", desc: "Pure Distressed Grain", img: "/women jacket.webp", slug: "/Collections/leather" },
              { id: 4, name: "WINTER Cow Women Jackets SHELL", desc: "Thermal Insulated Shield", img: "/cow women1.jpg", slug: "/Collections/parka" }
            ].map((jacket) => (
              <Link href={jacket.slug} key={jacket.id} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[3/4.8] w-full mb-6 border-[1px] border-zinc-300 transition-all duration-300 overflow-hidden bg-[#F2EFE9]">
                  <div className="relative w-full h-[75%] overflow-visible flex items-center justify-center p-4">
                    <img 
                      src={jacket.img} 
                      alt={jacket.name} 
                      className="w-full h-full object-contain scale-[1.05] group-hover:scale-[1.2] transition-transform duration-500 mix-blend-multiply z-10" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60";
                        (e.target as HTMLImageElement).className = "w-full h-full object-cover transition-transform duration-500";
                      }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-30 space-y-1">
                    <h3 className="font-bold text-[10px] md:text-[11px] tracking-[0.2em] text-zinc-900 uppercase">
                      {jacket.name}
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-zinc-600 font-light tracking-wide italic leading-tight">
                      {jacket.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 h-20 border border-white/40 backdrop-blur-[2px] bg-white/10 z-20 shadow-inner"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT US SECTION */}
      <section id="about" className="bg-[#FDFCF9] py-20 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-zinc-100 scroll-mt-20">
        <div className="absolute top-10 right-10 opacity-[0.02] md:opacity-[0.04] pointer-events-none select-none">
          <h2 className="text-[24vw] lg:text-[18vw] font-black leading-none uppercase tracking-tighter text-zinc-400">About <br /> Us</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div className="space-y-8 md:space-y-12 lg:pr-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-[#B5A48B] text-xs font-bold tracking-[0.6em] uppercase"></p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase text-zinc-900 leading-[0.9]">Our <br /> <span className="italic font-serif text-[#B5A48B]">Heritage</span></h2>
            </div>
            <div className="w-24 h-[1px] bg-zinc-300 mx-auto lg:mx-0"></div>
            <div className="space-y-6 md:space-y-8">
              <p className="text-zinc-800 leading-relaxed font-sans text-lg md:text-xl italic font-medium">"We believe in the soul of the stitch and the character of the sole."</p>
              <p className="text-zinc-500 leading-loose font-sans text-sm md:text-[15px] max-w-md mx-auto lg:mx-0">Founded in 2026, **Stitch & Sole** was born from a desire to bring back the lost art of handmade footwear with a modern twist.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-zinc-100 text-left">
              <div className="space-y-2">
                <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-900">Master Craft</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed uppercase">Each pair is 100% hand-stitched by local artisans.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-900">Pure Quality</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed uppercase">Full-grain leather and sustainable recycled materials.</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none w-full">
            <div className="aspect-[3/4] w-full border-[6px] md:border-[15px] border-white shadow-2xl relative z-10 overflow-hidden bg-zinc-100">
              <Image src="/img6.png" alt="Artisan" fill className="object-cover hover:scale-110 transition-transform duration-1000" unoptimized />
            </div>
            <div className="absolute -bottom-4 -left-2 md:-bottom-12 md:-left-8 w-1/2 aspect-square border-4 md:border-8 border-white shadow-xl z-20 overflow-hidden bg-white">
               <Image src="/shoes1.jpg" alt="Premium Leather" fill className="object-cover" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-16 md:py-24 px-6 md:px-12 relative z-30 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl italic tracking-tight uppercase">Stay In Touch</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 items-center text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
              <a href="https://www.instagram.com/elitefootsteps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-all">
                INSTAGRAM
              </a>
              <a href="https://www.facebook.com/share/1B29PF7efZ/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-all">
                FACEBOOK
              </a>
              <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-all">
                WHATSAPP
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <p className="italic text-zinc-400 text-sm border-l border-[#B5A48B] pl-6 max-w-xs mx-auto lg:mx-0 text-center lg:text-left">
                "Every pair tells a story of craftsmanship and dedication."
              </p>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" type="text" placeholder="NAME" required className="bg-transparent border border-white/10 p-4 text-[10px] outline-none focus:border-[#B5A48B] transition-colors w-full" />
                <input name="email" type="email" placeholder="EMAIL" required className="bg-transparent border border-white/10 p-4 text-[10px] outline-none focus:border-[#B5A48B] transition-colors w-full" />
              </div>
              <textarea name="message" placeholder="MESSAGE" required className="bg-transparent border border-white/10 p-4 text-[10px] w-full h-32 outline-none resize-none focus:border-[#B5A48B] transition-colors"></textarea>
              <button 
                type="submit" 
                disabled={status === "SENDING"}
                className="bg-[#B5A48B] text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-50 w-full"
              >
                {status === "SENDING" ? "Sending..." : status === "SUCCESS" ? "Message Sent!" : "Send Inquiry"}
              </button>
              {status === "SUCCESS" && <p className="text-[#B5A48B] text-[10px] tracking-widest uppercase mt-2 text-center lg:text-left">Success! We will get back to you soon.</p>}
              {status === "ERROR" && <p className="text-red-500 text-[10px] tracking-widest uppercase mt-2 text-center lg:text-left">Oops! Something went wrong.</p>}
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] text-zinc-600 uppercase tracking-widest text-center">
          <span>© 2026 Stitch & Sole</span>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}