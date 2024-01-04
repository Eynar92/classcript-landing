import Link from "next/link";
import { buttonVariants, Button } from "../../ui/button";
import Image from "next/image";
import Logo from "../../../../public/images/logo.webp"
import MenuItems from "./components/MenuItems";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center max-w-[1920px] m-auto px-4 md:px-8 lg:px-32 h-20 sticky top-0 bg-white/90 z-50">
            <nav className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between w-full">
                    <Link href={'/'} className="flex items-center justify-between w-full max-w-40">
                        <Image src={Logo} alt="Logo" width={30} />
                        <span className="font-black text-2xl">Classcript</span>
                    </Link>

                    <MenuItems className="hidden lg:flex" />
                </div>

                <label htmlFor="mobile-menu" className="relative cursor-pointer px-3 py-6 lg:hidden">
                    <input type="checkbox" id="mobile-menu" className="peer hidden" />
                    <div className="relative z-50 block h-[2px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
                    <div className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block"></div>
                    <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
                        <div className="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl">
                            <MenuItems className="flex" />
                        </div>
                    </div>
                </label>
            </nav>
        </header >
    )
}
