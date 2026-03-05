import Image from "next/image";
import { getWikiSummary } from "@/lib/wikipedia";

export default async function Home() {
  const chipData = await getWikiSummary("Intel_80486");
  const cableData = await getWikiSummary("Ribbon_cable");
  const tubeData = await getWikiSummary("Vacuum_tube");

  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-hidden flex flex-col">
      {/* Background Texture Overlay (Scanlines) */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8">
        <div className="absolute inset-0 z-[-1]">
           <Image 
             src="/assets/hero-texture.png" 
             alt="Cyber Texture" 
             fill
             className="object-cover opacity-40 mix-blend-screen"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        </div>
        
        <div className="border border-[#FFB000]/30 bg-black/50 backdrop-blur-sm px-4 py-1 rounded-full text-[#FFB000] text-xs font-mono tracking-widest animate-pulse">
          SYSTEM_ONLINE
        </div>

        <h1 className="font-mono text-5xl md:text-8xl font-bold tracking-tighter text-[#FFB000] drop-shadow-[0_0_20px_rgba(255,176,0,0.6)]">
          HARDWARE_VAULT
        </h1>
        
        <p className="max-w-2xl text-lg text-gray-400 font-mono border-l-2 border-[#FFB000] pl-4 text-left md:text-center md:border-l-0 md:pl-0">
          Archiving the silicon soul of the pre-AI era. <br/>
          <span className="text-[#FFB000]/60 text-sm">EST. 2026 // SECTOR 7G</span>
        </p>
        
        <button className="group relative px-8 py-3 bg-[#FFB000] text-black font-mono font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
          <span className="relative z-10">Enter Archives</span>
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </button>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto mb-20">
        {/* Card 1 */}
        <div className="group relative border border-gray-800 bg-[#0a0a0a] hover:border-[#FFB000] transition-all duration-300 p-0 rounded-sm overflow-hidden hover:shadow-[0_0_30px_rgba(255,176,0,0.15)] flex flex-col">
          <div className="h-64 w-full relative overflow-hidden shrink-0">
             <Image 
               src="/assets/chip.png" 
               alt="Vintage Microchip" 
               fill 
               className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80" />
          </div>
          <div className="p-6 relative z-20 -mt-12 flex-grow flex flex-col">
            <div className="text-[#FFB000] text-xs font-mono mb-2">ASSET_001</div>
            <h3 className="font-mono text-2xl text-white mb-2 group-hover:text-[#FFB000] transition-colors">CERAMIC_CORE</h3>
            <p className="text-sm text-gray-500 font-mono leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
              {chipData}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative border border-gray-800 bg-[#0a0a0a] hover:border-[#FFB000] transition-all duration-300 p-0 rounded-sm overflow-hidden hover:shadow-[0_0_30px_rgba(255,176,0,0.15)] flex flex-col">
          <div className="h-64 w-full relative overflow-hidden shrink-0">
             <Image 
               src="/assets/cables.png" 
               alt="Ribbon Cables" 
               fill 
               className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80" />
          </div>
          <div className="p-6 relative z-20 -mt-12 flex-grow flex flex-col">
            <div className="text-[#FFB000] text-xs font-mono mb-2">ASSET_002</div>
            <h3 className="font-mono text-2xl text-white mb-2 group-hover:text-[#FFB000] transition-colors">DATA_WEAVE</h3>
            <p className="text-sm text-gray-500 font-mono leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
              {cableData}
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative border border-gray-800 bg-[#0a0a0a] hover:border-[#FFB000] transition-all duration-300 p-0 rounded-sm overflow-hidden hover:shadow-[0_0_30px_rgba(255,176,0,0.15)] flex flex-col">
          <div className="h-64 w-full relative overflow-hidden shrink-0">
             <Image 
               src="/assets/tube.png" 
               alt="Vacuum Tube" 
               fill 
               className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80" />
          </div>
          <div className="p-6 relative z-20 -mt-12 flex-grow flex flex-col">
            <div className="text-[#FFB000] text-xs font-mono mb-2">ASSET_003</div>
            <h3 className="font-mono text-2xl text-white mb-2 group-hover:text-[#FFB000] transition-colors">ANALOG_WARMTH</h3>
            <p className="text-sm text-gray-500 font-mono leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
              {tubeData}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-gray-800 text-center font-mono text-sm text-gray-600">
        <p>
          Developed by <span className="text-[#FFB000]">Eduardo Arana</span> and <span className="text-[#FFB000]">Soda</span> 🥤
        </p>
        <p className="text-xs mt-2 opacity-50">
          POWERED BY NEXT.JS // RAILWAY // NANO-BANANA
        </p>
      </footer>
    </main>
  );
}
