import Logo from "../../../public/images/logo.webp"
import Image from 'next/image'
import Link from "next/link"
import React from 'react'

interface FooterLinkItem {
    id: number,
    path: string,
    text: string,
}

interface FooterCategory {
    id: number,
    links: FooterLinkItem[],
}

const FooterLinks: FooterCategory[] = [
    {
        id: 1, links: [
            { id: 1, path: '/', text: 'Transcription service' },
            { id: 2, path: '/', text: 'Podcast transcription' },
            { id: 3, path: '/', text: 'Interview transcription' },
        ]
    },
    {
        id: 2, links: [
            { id: 1, path: '/', text: 'Speech recognition' },
            { id: 2, path: '/', text: 'API' },
            { id: 3, path: '/', text: 'API documentation' },
            { id: 4, path: '/', text: 'Privacy policy' },
        ]
    },
    {
        id: 3, links: [
            { id: 1, path: '/', text: 'Terms of use' },
            { id: 2, path: '/', text: 'Cookies policy' },
            { id: 3, path: '/', text: 'Audio cutter' },
        ]
    },
    {
        id: 4, links: [
            { id: 1, path: '/', text: 'Voice recorder' },
            { id: 2, path: '/', text: 'Subtitle editor' },
            { id: 3, path: '/', text: 'Transcriber bot' },
        ]
    },

]

export default function Footer() {
    return (
        <footer id='footer' className="flex flex-col gap-10 items-center justify-center w-full h-auto py-10 px-4 bg-gradient-to-r from-slate-600 to-slate-900 snap-start md:px-8 lg:px-32">
            <section className='w-full h-full mx-auto max-w-[1920px] flex flex-col gap-10 md:flex-row md:gap-20 '>
                <Link href={'/'} className="flex items-start justify-between w-full max-w-40">
                    <Image src={Logo} alt="Logo" width={30} className="drop-shadow-md" />
                    <span className="font-black text-2xl text-white">Classcript</span>
                </Link>
                <div className="w-full flex-col hidden gap-10 justify-between max-w-3xl px-10 md:flex md:flex-row">
                    {
                        FooterLinks.map(item => (
                            <div className="flex flex-col gap-4 text-xs" key={item.id}>
                                {
                                    item.links.map(link => (
                                        <Link href={link.path} key={link.id} className="text-white hover:text-[#15b4d1] transition-colors">
                                            {link.text}
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </section>
            <div className="flex flex-col gap-1 items-center text-xs text-white">
                <p>© {new Date().getFullYear()} Classcript. All rights reserved.</p>
                <Link href={'https://github.com/Eynar92'} target="_blank" className="hover:text-[#15b4d1] transition-colors">Eynar Joel Alvarez M.</Link>
            </div>
        </footer>
    )
}
