import Image from "next/image";
import { Button } from "../ui/button";
import HeroImage from '@/assets/HeroImage.png'

export default function Hero() {
    return (
        <main className="flex flex-col gap-5 justify-center items-center h-[calc(100vh-80px)] mx-auto max-w-[1920px] max-h-[992px] px-4 md:px-8 md:max-w-xl lg:gap-20 lg:px-32 lg:flex-row lg:max-w-none">
            <div className="flex flex-col gap-5 text-center items-center lg:items-start lg:text-start lg:max-w-2xl lg:justify-between lg:h-full max-h-96 lg:py-10">
                <h1 className="text-3xl lg:text-5xl font-bold">Transcribe audio and video into text</h1>
                <p className="text-lg lg:text-2xl">Get accurate transcriptions of audio files with domain-specific speech recognition technology!</p>
                <Button className="uppercase w-10/12 text-base max-w-64 rounded-full">Start free trial</Button>
            </div>
            <Image src={HeroImage} alt="Hero Image" width={264} className="rounded-lg w-72 -z-10 lg:flex-1 lg:w-auto lg:max-w-lg drop-shadow-xl" />
        </main>
    )
}
