import Image from "next/image";
import {
    Mic,
    Stethoscope,
    PhoneCall,
    Podcast,
    Video,
    FileAudio,
    Film,
    AudioLines
} from "lucide-react"

interface Costumer {
    id: number;
    icon: string;
    title: string;
}

const iconComponents: { [key: string]: React.ComponentType } = {
    Mic: Mic,
    Stethoscope: Stethoscope,
    PhoneCall: PhoneCall,
    Podcast: Podcast,
    Video: Video,
    FileAudio: FileAudio,
    Film: Film,
    AudioLines: AudioLines,
}

const CostumersUsingList: Costumer[] = [
    { id: 1, icon: "Mic", title: "Transcription of interviews." },
    { id: 2, icon: "Stethoscope", title: "Medical data transripcion." },
    { id: 3, icon: "PhoneCall", title: "Conference call analysis." },
    { id: 4, icon: "Podcast", title: "Transcription of podcasts." },
    { id: 5, icon: "Video", title: "Video to text conversion." },
    { id: 6, icon: "FileAudio", title: "MP3 to text conversion." },
    { id: 7, icon: "Film", title: "Subtitle generation." },
    { id: 8, icon: "AudioLines", title: "Voice recognition." },
]

export default function HowCostumersUsing() {
    return (
        <section className="flex flex-col gap-8 items-center justify-center text-center w-full h-full my-10 px-4 snap-start md:my-20 md:px-8 lg:px-32">
            <h1 className="text-3xl font-semibold">How Customers are using <span className="font-bold">Classcript</span>?</h1>
            <p>Save money and speed up your business processes with automatic transcription software</p>
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row w-full">
                <Image src={'https://media.istockphoto.com/id/1097340552/es/foto/mano-masculina-holding-smartphone-hombre-de-negocios-con-ordenador-port%C3%A1til-y-tableta-digital.jpg?s=1024x1024&w=is&k=20&c=7aWiSKhiXxVC9yXW8g-vOVmWaMt-ZYuluE5RCR7RlG4='} alt="Costumers image" width={200} height={200} className="w-64 md:w-full md:min-w-64 md:max-w-lg h-auto rounded-lg shadow-md" />
                <ul className="flex flex-col gap-4">
                    {
                        CostumersUsingList.map(item => {
                            const IconComponent = iconComponents[item.icon]
                            return (
                                <li key={item.id} className="flex gap-2">
                                    {IconComponent && <IconComponent />}
                                    <span>{item.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
