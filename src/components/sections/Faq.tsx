import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqProps {
    id: number;
    question: string;
    answer: string;
}

const Faqs: FaqProps[] = [
    {
        id: 1, question: "Is my data secure with Classcript?", answer: "Classcript is fully GDPR compliant. All our physical servers are hosted in Europe (France) and we encrypt all your data sent between you and the service. Classcript is fully automated, hence your data is confidential and the process has no place for human-factor and other risks that manual transcription has. You can delete transcription results and uploaded files from the user dashboard at any time."
    },
    {
        id: 1, question: "How do I convert audio files into text files?", answer: "Log in to your account and upload audio files. After uploading process finishes, select a transcription language, industry domain, audio type and click the 'Transcribe' button to start transcribing."
    },
    {
        id: 1, question: "How to transcribe MP3 files to DOCX?", answer: "Upload MP3 files and click the 'Transcribe' button to start MP3 files analysis. When the transcription process has finished, tap on the 'Download' icon and save the transcription file as 'Word Document' type."
    },
    {
        id: 1, question: "How can I generate subtitles for video files?", answer: "Upload your files and select the 'Speaker recognition' option before starting video files transcription process. The transcription service will try to identify the different speakers in video files and represent transcription results in the dialog form."
    },
]


export default function Faq() {
    return (
        <section id="faq" className="flex flex-col gap-10 items-center justify-center w-full h-full my-10 px-4 mx-auto max-w-[1920px] snap-start md:my-20 md:px-8 lg:px-32">
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-2 w-full">
                {
                    Faqs.map(item => (
                        <Accordion type="single" className="w-full flex flex-col items-start hover:text-[#15b4d1] transition-colors" collapsible key={item.id}>
                            <AccordionItem value={`item-${item.id}`}>
                                <AccordionTrigger className="flex items-center flex-row-reverse justify-end gap-4">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))
                }
            </div>
        </section>
    )
}
