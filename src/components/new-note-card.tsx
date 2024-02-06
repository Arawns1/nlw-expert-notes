export default function NewNoteCard() {
  return (
    <div className="bg-slate-700 rounded-md p-5 flex flex-col gap-3">
      <span className="text-slate-200 font-medium text-sm">Adicionar nota</span>
      <p className="text-slate-400 leading-6 text-sm">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  )
}
