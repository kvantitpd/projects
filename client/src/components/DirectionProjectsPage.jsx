import Project from "./Project"
import { data } from "@/data"


const DirectionProjectsPage = () => {


    return (
        <div className="w-3/4 grid grid-cols-1 gap-10  sm:grid-cols-2 sm:gap-10 md:grid-cols-3 py-5">
            {
                data.map((project, index) => <Project {...project} key={index} />)
            }
        </div>
    )
}

export default DirectionProjectsPage