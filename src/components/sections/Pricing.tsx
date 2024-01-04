import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";

interface PriceItem {
    id: number;
    title: string;
    price: number;
    char1: number;
    char2: string;
    char3: string;
    char4: string;
    popular?: boolean;
}

const PricingList: PriceItem[] = [
    { id: 1, title: "Starter", price: 10, char1: 180, char2: "30 MB", char3: "30 +", char4: "General" },
    { id: 2, title: "Personal", price: 19, char1: 380, char2: "60 MB", char3: "30 +", char4: "Domain-Specific" },
    { id: 3, title: "Standard", price: 49, char1: 990, char2: "200 MB", char3: "30 +", char4: "Domain-Specific", popular: true },
    { id: 4, title: "Business", price: 99, char1: 2000, char2: "1 GB", char3: "30 +", char4: "Domain-Specific" },
]

export default function Pricing() {
    return (
        <section id="pricing" className="flex flex-col gap-8 items-center justify-center w-full h-full my-10 px-4 snap-start md:my-20 md:px-8 lg:px-32">
            <h2 className="text-3xl font-bold">Pricing</h2>
            <p>Affordable pay-as-you-go pricing plans. No monthly fee, pay only for what you use</p>
            <div className="flex gap-10 flex-wrap justify-center">
                {
                    PricingList.map(item => (
                        <Card className={cn("w-[240px] relative overflow-hidden flex flex-col items-center gap-5 pb-5 h-auto hover:shadow-lg transition-shadow text-center")} key={item.id}>
                            {
                                item.popular
                                && <div className="absolute transform rotate-45 bg-[#5ae0ab] text-center text-white font-semibold py-1 right-[-55px] top-[15px] w-[170px]">
                                    Popular
                                </div>
                            }
                            <CardHeader className="gap-4">
                                <CardTitle className="uppercase font-semibold text-base z-10">{item.title}</CardTitle>
                            </CardHeader>
                            <CardDescription className="text-sm text-black flex flex-col gap-5">
                                <span className="text-3xl font-bold">${item.price}</span>
                                <ul className="flex flex-col gap-5">
                                    <p className="font-light"><span className="font-bold">{item.char1}</span> Transcription Minutes</p>
                                    <p className="font-light"><span className="font-bold">{item.char2}</span> Maximum Filesize</p>
                                    <p className="font-light"><span className="font-bold">{item.char3}</span> Languages</p>
                                    <p className="font-light"><span className="font-bold">{item.char4}</span> Models</p>
                                </ul>
                            </CardDescription>
                            <Button className={`w-full max-w-[80%] ${item.popular ? 'bg-[#5ae0ab]' : 'bg-[#15b4d1]'}`}>Get Plan</Button>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}
