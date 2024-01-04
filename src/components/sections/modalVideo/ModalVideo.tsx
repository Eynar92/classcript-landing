import { Particles } from "./components/Particles";
import Modal from "./components/Modal";

export default function ModalVideo() {
    return (
        <section id="modal-video" className="w-screen h-96 inset-0 flex items-center relative justify-center my-20 snap-center bg-[#272e3f] lg:my-20 ">
            <Particles className="absolute w-full h-auto inset-0" />
            <div
                className="flex justify-center items-center cursor-pointer"
            >
                <div className="h-20 w-20 bg-[#5ae0ab] rounded-full flex justify-center items-center animation-pulse">
                    <Modal />
                </div>
            </div>
        </section>
    )
}
