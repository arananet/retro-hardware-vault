import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('/noise.png')] z-50 mix-blend-overlay"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="absolute inset-0 z-[-1] opacity-30">
           {/* Placeholder for Nano Banana Hero Image */}
           <div className="w-full h-full bg-gradient-to-b from-[#FFB000]/10 to-transparent rounded-full blur-[100px]" />
        </div>
        
        <h1 className="font-mono text-4xl md:text-7xl font-bold tracking-tighter text-[#FFB000] drop-shadow-[0_0_15px_rgba(255,176,0,0.5)]">
          HARDWARE_VAULT
        </h1>
        <p className="max-w-2xl text-lg text-gray-400 font-mono">
          [SYSTEM_READY] // ARCHIVING THE SILICON SOUL OF THE PAST.
        </p>
        
        <button className="px-8 py-3 bg-[#FFB000] text-black font-mono font-bold uppercase tracking-widest hover:bg-[#FFD000] transition-all shadow-[0_0_20px_rgba(255,176,0,0.3)] hover:shadow-[0_0_40px_rgba(255,176,0,0.6)]">
          Enter Archives
        </button>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group relative border border-gray-800 bg-[#111] hover:border-[#FFB000] transition-colors p-6 rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            
            {/* Image Placeholder */}
            <div className="h-48 w-full bg-gray-900 mb-4 group-hover:scale-105 transition-transform duration-500 relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-xs">
                 [NANO_BANANA_ASSET_0{i}]
               </div>
            </div>
            
            <div className="relative z-20">
              <h3 className="font-mono text-xl text-white mb-2">COMPONENT_0{i}</h3>
              <p className="text-sm text-gray-500 font-mono">
                Status: DECOMMISSIONED<br/>
                Origin: 199{i + 5}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
