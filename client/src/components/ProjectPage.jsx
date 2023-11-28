import { useLocation } from "react-router-dom";
import { data } from "@/data"

const ProjectPage = () => {
    const location = useLocation().pathname.split('/')[2];
    const cur = data.filter(p => p.id === +location)[0];

    return (
        <div className="w-[90%] xl:w-1/3 p-5 my-7 flex items-center flex-col gap-5 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >{cur.direction}</div>
            <div>{cur.name}</div>
            <div><span>Руководитель: </span>{cur.mentor}</div>
            <div>
                <span>Участники: </span>
                {
                    cur.students.map((s, i) => (<span key={i}>{`${s} `}</span>))
                }
            </div>
            <div className="max-w-[800px]">{cur.description}</div>
            <img src={`http://localhost:5000/files/${cur.image}`} alt={cur.name} />

            <div> <span>Год выполнения:</span> {cur.year}</div>
        </div>
    )
}

export default ProjectPage