import Image from "next/image";
import { getWikiSummary } from "@/lib/wikipedia";

export default async function Home() {
  const chipData = await getWikiSummary("Intel_80486");
  const cableData = await getWikiSummary("Ribbon_cable");
  const tubeData = await getWikiSummary("Vacuum_tube");

  const specs = [
    {
      id: "001",
      title: "CERAMIC_CORE",
      term: "Intel 80486",
      wiki: chipData,
      img: "/assets/chip.webp",
      tech: { clock: "25-100 MHz", voltage: "5V", transistor_count: "1.2 Million", architecture: "x86 32-bit" }
    },
    {
      id: "002",
      title: "DATA_WEAVE",
      term: "Ribbon Cable",
      wiki: cableData,
      img: "/assets/cables.webp",
      tech: { pitch: "1.27 mm", conductors: "10-80", max_temp: "105°C", signal: "Parallel Bus" }
    },
    {
      id: "003",
      title: "ANALOG_WARMTH",
      term: "Vacuum Tube",
      wiki: tubeData,
      img: "/assets/tube.webp",
      tech: { filament_v: "6.3V", plate_dissipation: "25W", gain: "Variable", lifetime: "~5,000 hrs" }
    }
  ];

  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-hidden flex flex-col">
      {/* Background Texture Overlay (Scanlines) */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8">
        <div className="absolute inset-0 z-[-1]">
           <Image 
             src="/assets/hero-texture.webp" 
             alt="Cyber Texture" 
             fill
             className="object-cover opacity-40 mix-blend-screen"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        </div>
        
        <div className="border border-[#FFB000]/30 bg-black/50 backdrop-blur-sm px-4 py-1 rounded-full text-[#FFB000] text-xs font-mono tracking-widest animate-pulse shadow-[0_0_15px_rgba(255,176,0,0.2)]">
          SYSTEM_ONLINE
        </div>

        <h1 className="font-mono text-6xl md:text-9xl font-bold tracking-tighter text-[#FFB000] drop-shadow-[0_0_20px_rgba(255,176,0,0.6)]">
          VAULT_01
        </h1>
        
        <p className="max-w-2xl text-lg text-gray-400 font-mono border-l-2 border-[#FFB000] pl-4 text-left md:text-center md:border-l-0 md:pl-0">
          Archiving the silicon soul of the pre-AI era. <br/>
          <span className="text-[#FFB000]/60 text-sm">EST. 2026 // SECTOR 7G</span>
        </p>
        
        <button className="group relative px-10 py-4 bg-[#FFB000] text-black font-mono font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_40px_rgba(255,176,0,0.4)]">
          <span className="relative z-10">Access Archives</span>
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xl">→</span>
        </button>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-7xl mx-auto mb-20">
        {specs.map((item) => (
          <div key={item.id} className="group relative border border-gray-800 bg-[#0a0a0a] hover:border-[#FFB000] transition-all duration-500 p-0 rounded-sm overflow-hidden hover:shadow-[0_0_50px_rgba(255,176,0,0.1)] flex flex-col">
            <div className="h-72 w-full relative overflow-hidden shrink-0 border-b border-gray-900">
               <Image 
                 src={item.img} 
                 alt={item.title} 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
            </div>
            <div className="p-8 relative z-20 -mt-16 flex-grow flex flex-col">
              <div className="text-[#FFB000] text-[10px] font-mono mb-2 tracking-widest bg-black/60 w-fit px-2 py-0.5 border border-[#FFB000]/20">DATA_RECORD_{item.id}</div>
              <h3 className="font-mono text-3xl text-white mb-4 group-hover:text-[#FFB000] transition-colors">{item.title}</h3>
              
              <div className="text-sm text-gray-400 font-mono leading-relaxed mb-6 space-y-4">
                <p className="border-l border-gray-800 pl-4">{item.wiki}</p>
              </div>

              {/* Technical Spec Box */}
              <div className="mt-auto">
                <div className="bg-black/40 border border-gray-900 p-4 rounded-sm">
                  <div className="text-[10px] font-mono text-[#FFB000]/50 mb-3 uppercase tracking-tighter">// Technical_Specifications</div>
                  <div className="grid grid-cols-2 gap-y-2">
                    {Object.entries(item.tech).map(([key, val]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-[9px] text-gray-600 uppercase font-mono">{key.replace('_', ' ')}</span>
                        <span className="text-xs text-gray-300 font-mono">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-gray-900 text-center font-mono">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-2">
          <span>DEVELOPED BY</span>
          <a href="https://github.com/arananet" className="text-[#FFB000] hover:underline underline-offset-4">EDUARDO ARANA</a>
          <span>&</span>
          <span className="text-[#FFB000] flex items-center">SODA <span className="ml-1">🥤</span></span>
        </div>
        <p className="text-[10px] text-gray-700 tracking-[0.2em] uppercase">
          Hardware Vault // Archive Node 001 // San Francisco Protocol
        </p>
      </footer>
    </main>
  );
}
