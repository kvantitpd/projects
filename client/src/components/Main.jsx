import aero from "@/assets/aero.png"
import bio from "@/assets/bio.png"
import cosmo from "@/assets/cosmo.png"
import hightech from "@/assets/hightech.png"
import it from "@/assets/it.png"
import media from "@/assets/media.jpg"
import nano from "@/assets/nano.png"
import photonics from "@/assets/photonics.png"
import promdesign from "@/assets/promdesign.png"
import robo from "@/assets/robo.png"
import vrar from "@/assets/vrar.png"
import { Link } from "react-router-dom"

const icons = [
    { img: aero, name: "Аэроквантум", link: "aero" },
    { img: bio, name: "Биоквантум", link: "bio" },
    { img: cosmo, name: "Космоквантум", link: "cosmo" },
    { img: hightech, name: "Хай-тек", link: "hightech" },
    { img: it, name: "IT-квантум", link: "it" },
    { img: media, name: "Медиаквантум", link: "media" },
    { img: nano, name: "Наноквантум", link: "nano" },
    { img: photonics, name: "Квантум Фотоника", link: "photonics" },
    { img: promdesign, name: "Промдизайнквантум", link: "promdesign" },
    { img: robo, name: "Промробоквантум", link: "robo" },
    { img: vrar, name: "VR/AR-квантум", link: "vrar" },
]

const Main = () => {
    return (
        <div className="w-full ">

            <div className="m-auto py-10 w-3/4 flex items-center justify-center gap-10 md:gap-20 flex-wrap">
                {
                    icons.map((icon, i) => {
                        return (
                            <Link
                                key={i}
                                to={icon.link}
                                className=" group relative m-8 flex justify-center  hover:scale-125 transition ease-in-out"
                            >
                                <img
                                    className="h-[220px] md:h-[150px]"
                                    src={icon.img}
                                    alt={icon.name}
                                />
                                <span className="absolute bottom-[-30px] scale-0 rounded bg-white p-2 text-xs text-black group-hover:scale-100">{icon.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main