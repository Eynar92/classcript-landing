import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
}

const CardList: CardItem[] = [
    {
        id: 1, imageUrl: "https://media.istockphoto.com/id/1803852489/es/foto/adornos-navide%C3%B1os-en-casa-y-micr%C3%B3fono.jpg?s=1024x1024&w=is&k=20&c=ySsq3goAuFYYG3aoQrLodoLXdDua4XlFtgCFByr7H7I=", title: 'Speech Recognition', description: 'Powerful speech-to-text technology automatically converts voice to text in seconds.'
    },
    {
        id: 2, imageUrl: "https://media.istockphoto.com/id/478438526/es/foto/hola-en-varios-idiomas.jpg?s=1024x1024&w=is&k=20&c=BMfFBmlOJbqkiRGEIp5sqayy2-BL3Dj0PTcYOxAnS44=", title: 'Multi language', description: 'Audio to text converter supports more than 30 languages and non-native speaker accents.'
    },
    {
        id: 3, imageUrl: "https://media.istockphoto.com/id/1032296056/es/foto/joven-mujer-y-hombre-en-auriculares-aprender-diferentes-idiomas-comunicaci%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=wOy_S-RLJuysOo0GrcHT2OMXoLJFCPLMLLGXqy3hgv0=", title: 'Speaker identification', description: 'Service detects which individuals spoke which words in multi-participant conversations.'
    },
    {
        id: 4, imageUrl: "https://media.istockphoto.com/id/1304335596/es/foto/cliente-que-utiliza-smartphone-con-iconos-faciales-y-porcentaje-gr%C3%A1fico-de-informaci%C3%B3n-para.jpg?s=1024x1024&w=is&k=20&c=oDwzVbq_cAObRq66CtzLrXzk0T-ydU-6deJFEA7b4fw=", title: 'Automatic Punctuation', description: 'Audio and video transcriptions include commas, full stops, question marks, periods, etc..'
    },
    {
        id: 5, imageUrl: "https://media.istockphoto.com/id/1141968788/es/vector/concepto-de-arte-literario-con-letras-saliendo-de-un-l%C3%A1piz.jpg?s=1024x1024&w=is&k=20&c=x6ir4BV9PTo5zCLhwWJcqJ5rTPB-TDKRNpU9b_Awfgo=", title: 'Editing tools', description: 'Proofreading interface helps users to edit and verify speech recognition results.'
    },
    {
        id: 6, imageUrl: "https://media.istockphoto.com/id/1308477625/es/vector/descargue-el-archivo-de-icono-pdf-con-la-etiqueta-en-la-pantalla-del-ordenador-port%C3%A1til.jpg?s=1024x1024&w=is&k=20&c=zE23DhcxIX0ksQ95V1Qn3jptMiihj7Wm0QIhajHD4zk=", title: 'Export transcript', description: 'Export audio transcription results in the format of your choice (txt, pdf, docx, etc.).'
    },
]

const WhyClasscript = () => {
    return (
        <section className="flex flex-col gap-8 items-center justify-center w-full h-full my-10 px-4 snap-start md:my-20 md:px-8 lg:px-32">
            <h2 className="text-3xl font-semibold">Why <span className="font-black">Classcript</span></h2>
            <div className="flex gap-10 flex-wrap justify-center">
                {
                    CardList.map(item => (
                        <Card className={cn("w-[240px] h-auto hover:shadow-lg transition-shadow")} key={item.id}>
                            <Image src={item.imageUrl} alt={`${item.title} image`} width={200} height={200} className="h-auto w-full rounded-t-md" />
                            <CardHeader className="gap-4">
                                <CardTitle className="uppercase font-semibold text-base">{item.title}</CardTitle>
                                <CardDescription className="text-sm">
                                    {item.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </section >
    )
}

export default WhyClasscript
