import InterfaceImage from "@/assets/Interface.png"
import Image from "next/image"

const HowItWorksList = [
    { id: 1, title: 'Upload', description: 'Upload audio or video files. AI transcription software supports various file formats and transcribes from speech to text in any language.' },
    { id: 2, title: 'Select domain', description: 'Select industry domain and audio type from predefined categories to improve the recognition accuracy of domain-specific words.' },
    { id: 3, title: 'Transcribe', description: 'Our speech transcription engine uses state-of-the-art deep neural network models to convert from audio to text with close to human accuracy.' },
    { id: 4, title: 'Edit & Export', description: 'Search, modify and verify audio transcriptions using interactive editing tools. Export your content in different formats.' },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="flex flex-col gap-8 items-center justify-center my-4 w-full px-4 md:my-0 md:px-8 lg:px-32 scroll-p-20">
            <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold">How it Works</h2>
                <p><span className="font-semibold">Classcript</span> is a powerful artificial intelligence software for speech to text conversion and audio transcription</p>
            </div>
            <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-20">
                <Image src={InterfaceImage} alt="Interface Image" className="rounded-xl lg:w-[512px] lg:max-w-lg" width={256} />
                <ul className="flex flex-col gap-4">
                    {
                        HowItWorksList.map(item => (
                            <li key={item.id} className="flex flex-col gap-3">
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
