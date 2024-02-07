import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

export default function NewNoteCard() {
  const [showOnBoarding, setShowOnBoarding] = useState(true)
  const [content, setContent] = useState('')

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)

    if (event.target.value === '') setShowOnBoarding(true)
  }

  function handleStartEditor() {
    setShowOnBoarding(false)
  }

  function handleSaveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    toast.success('Nota criada com sucesso!')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-700 rounded-md p-5 flex flex-col gap-3 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-slate-200 font-medium text-sm">
          Adicionar nota
        </span>
        <p className="text-slate-400 leading-6 text-sm">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>
          <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-slate-300 font-medium text-sm">
                Adicionar nota
              </span>
              {showOnBoarding ? (
                <p className="text-slate-400 leading-6 text-sm">
                  Comece{' '}
                  <button className="font-medium text-lime-400 hover:underline">
                    gravando uma nota
                  </button>{' '}
                  em áudio ou se preferir
                  <button
                    className="font-medium text-lime-400 hover:underline"
                    onClick={handleStartEditor}
                  >
                    utilize apenas texto
                  </button>
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent outline-none resize-none flex-1"
                  placeholder="Digite sua nota aqui..."
                  onChange={handleContentChanged}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover: bg-line-500"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
