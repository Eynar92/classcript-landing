import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Modal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl h-auto sm:max-h-full">
                <DialogHeader>
                    <DialogTitle>How it Works <span className="font-extrabold">Classcript</span></DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-full h-96 border border-slate-500 rounded-lg">
                        <span>Aquí se verá el video de Classcript</span>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cerrar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
