import { Link } from "react-router-dom"

const Project = (proj) => {

    return (

        <div className=" my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`${proj.id}`}>
                <img className="rounded-t-lg" src={`http://localhost:5000/files/${proj.image}`} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`${proj.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{proj.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {proj.description}
                </p>
            </div>
        </div>
    )
}

export default Project


