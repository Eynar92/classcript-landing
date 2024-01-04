import {
    Ghost,
    Fish,
    Gem,
    BatteryMedium
} from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

interface Costumer {
    id: number;
    icon: string;
    title: string;
}

interface Testimonials {
    id: number;
    description: string;
    name: string;
    profession: string;
}

const iconComponents: { [key: string]: React.ComponentType } = {
    Ghost: Ghost,
    Fish: Fish,
    Gem: Gem,
    BatteryMedium: BatteryMedium,
}

const CostumersList: Costumer[] = [
    { id: 1, icon: "Ghost", title: "The Ghost" },
    { id: 2, icon: "Fish", title: "Fishermen" },
    { id: 3, icon: "Gem", title: "OnlineClasses" },
    { id: 4, icon: "BatteryMedium", title: "CallCenter" },
]

const CostumerTestimonials: Testimonials[] = [
    { id: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", name: "John Doe", profession: "CEO - El Ghost" },
    { id: 2, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", name: "Martin Doe", profession: "Data Scientist" },
    { id: 3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", name: "Martin Doe", profession: "IT Journalist" },
    { id: 4, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", name: "Martin Doe", profession: "PR Manager" },
]

export default function OurCostumers() {
    return (
        <section id="our-costumers" className="flex flex-col gap-8 items-center justify-center w-full h-full my-10 px-4 snap-start md:my-20 md:px-8 lg:px-32">
            <h2 className="text-3xl font-semibold">Our Costumers</h2>
            <div className='flex items-center justify-center gap-10 flex-wrap'>
                {
                    CostumersList.map(item => {
                        const IconComponent = iconComponents[item.icon]
                        return (
                            <div key={item.id} className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 hover:drop-shadow-lg transition-opacity">
                                {IconComponent && <IconComponent />}
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center gap-10 flex-wrap'>
                {
                    CostumerTestimonials.map(item => (
                        <Card className={cn("w-[280px] h-auto hover:shadow-lg transition-shadow")} key={item.id}>
                            <CardHeader className="gap-4">
                                <CardDescription className="text-sm">
                                    {item.description}
                                </CardDescription>
                                <CardTitle className="uppercase font-semibold text-sm">{item.name} - <span className="uppercase font-extralight text-xs">{item.profession}</span></CardTitle>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}
