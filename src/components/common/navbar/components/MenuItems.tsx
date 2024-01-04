import { Button } from '@/components/ui/button';
import Link from 'next/link'
import React from 'react'

interface Props {
    className?: string;
}

const menuItems = [
    { id: 1, label: "How it works", href: "#how-it-works" },
    { id: 2, label: "Features", href: "#why-classcript" },
    { id: 3, label: "Pricing", href: "#pricing" },
    { id: 4, label: "Contact us", href: "#" },
]

export default function MenuItems({ className }: Props) {
    return (
        <menu className={`${className} flex flex-col items-start gap-10 lg:items-center lg:flex-row font-semibold`}>
            <div className='flex flex-col gap-4 w-full lg:flex-row'>
                {
                    menuItems.map(item => (
                        <li key={item.id}><Link href={item.href}>{item.label}</Link></li>
                    ))
                }
            </div>
            <div className='flex flex-col gap-4 lg:flex-row'>
                <Button variant="outline">
                    Log In
                </Button>
                <Button>
                    Free Trial
                </Button>
            </div>
        </menu>
    )
}
