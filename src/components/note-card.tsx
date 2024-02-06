import React from 'react'

export function NoteCard() {
  return (
    <button className="bg-slate-800 text-left rounded-md p-5 flex flex-col gap-3 outline-none overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-slate-300 font-medium text-sm">há 2 dias</span>
      <p className="text-slate-400 leading-6 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure minima
        aperiam iste. Architecto ad amet et laudantium illum omnis, vero
        distinctio asperiores placeat, quidem, sit at consequuntur cum veniam?
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-white/0 pointer-events-none" />
    </button>
  )
}
