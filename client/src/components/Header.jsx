import Logo from "../assets/logo.jpg"
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom";

const Header = () => {
    const justifyCenter = "flex justify-center items-center";
    return (
        <>
            <header className={`w-full bg-deepblue text-white  ${justifyCenter} text-xs md:text-sm py-1 relative`}>
                <nav className={`w-full md:w-3/4 flex  ${justifyCenter}`}>
                    <ul className={`h-[45px] flex gap-5 md:gap-9 ${justifyCenter}`}>
                        <li>
                            <div className={`${justifyCenter} hidden sm:flex gap-2`}>
                                <EnvelopeIcon className="w-5 h-5" />
                                <a href="mailto:KvantoriumPerm@gmail.com">KvantoriumPerm@gmail.com</a>
                            </div>
                        </li>
                        <li>
                            <div className={`${justifyCenter} gap-2`}>
                                <ClockIcon className="w-5 h-5" />
                                <span>пн-сб, 9:00–20:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={`${justifyCenter}  gap-2`}>
                                <PhoneIcon className="w-5 h-5" />
                                <a href="tel:+ 7 (342) 214-42-69">+ 7 (342) 214-42-69</a>
                            </div>
                        </li>
                        <li className="hidden xxl:block">
                            <a href="http://perminnovation.ru/" target="_blanc">ЧОУ ДПО Центр Инновационного развития человеческого <br />
                                потенциала и управления знаниями</a>
                        </li>
                        <li className="gap-4 hidden xs:flex">
                            <a href="https://vk.com/kvantorium.fotonika" target="_blanc"><i className="fab fa-vk fa-xl"></i></a>
                            <a href="https://t.me/kvantoriumperm" target="_blanc"><i className="fa-brands fa-telegram fa-xl"></i></a>
                        </li>
                    </ul>
                    <div className="absolute right-[2%] md:flex gap-4 items-center hidden" >
                        <i className="fa-solid fa-user "></i>
                        <Link to="/login" className="cursor-pointer hover:text-blue-400">Вход</Link>
                    </div>
                </nav>
            </header>
            <div className="w-full h-[50px] py-10 flex items-center justify-center">
                <Link to="/">
                    <img className="h-[40px]" src={Logo} alt="logo" />
                </Link>
            </div>
            <div className="w-full bg-slate-500 text-sm md:text-xl text-white h-[100px] flex items-center justify-center uppercase font-bold">Проекты ДТ "Кванториум Фотоника" Пермь</div>
        </>
    )
}

export default Header