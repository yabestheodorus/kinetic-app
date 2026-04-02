import React from 'react'

const Tooltips = () => {
  return (
    <div class="md:col-span-8 order-1 md:order-2 relative aspect-square md:aspect-video bg-surface-container-low overflow-hidden">


      <div class="absolute top-1/4 left-1/3 z-50 group">
        <div class="relative">
          <div class="w-3 h-3 bg-primary animate-ping absolute rounded-full"></div>
          <div class="w-3 h-3 bg-primary relative rounded-full"></div>
          <div class="absolute left-6 top-0 opacity-0 group-hover:opacity-100 transition-all bg-surface-bright/80 backdrop-blur-md p-4 w-48 border-l-2 border-primary translate-x-2 group-hover:translate-x-0">
            <span class="font-label text-[0.6rem] text-primary uppercase block mb-1">Internal Optic</span>
            <span class="font-headline text-xs font-bold uppercase tracking-widest">Tensor Anchor</span>
          </div>
        </div>
      </div>
      <div class="absolute bottom-1/3 right-1/4 z-50 group ">
        <div class="relative">
          <div class="w-3 h-3 bg-primary animate-ping absolute rounded-full"></div>
          <div class="w-3 h-3 bg-primary relative rounded-full"></div>
          <div class="absolute right-6 top-0 opacity-0 group-hover:opacity-100 transition-all bg-surface-bright/80 backdrop-blur-md p-4 w-48 border-r-2 border-primary text-right -translate-x-2 group-hover:translate-x-0">
            <span class="font-label text-[0.6rem] text-primary uppercase block mb-1">Outsole Spec</span>
            <span class="font-headline text-xs font-bold uppercase tracking-widest">Kinetic Grip-V2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tooltips