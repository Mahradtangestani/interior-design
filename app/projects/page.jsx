import { m } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id:1,
        name:"Drowing room for family time",
        description:"bedroom with a clean and comfortable design for our family. charming with a modern design",
        image:"/image/project3.jpg",
        link:""
    },
    {
        id:2,
        name:"Kitchen look modern and clean",
        description:"Kitchen look modern and clean for our family with good quality. charming with a modern design",
        image:"/image/project2.jpg",
        link:""
    },
    {
        id:2,
        name:"Perfect living room for family time",
        description:"Drowing room with a clean and comfortable design for our family. charming with a modern design",
        image:"/image/project4.png",
        link:""
    },
]

const Projects = ()=>{
    return (
        <div>
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
                <h1 className="w-3/4 mx-auto py-64 text-6xl font-semibold tracking-widest text-white">Our Projects</h1>
            </div>

            <div className="w-3/4 mx-auto grid lg:grid-cols-2 gap-8 py-8">
                {projects.map(project=>(
                    <div key={project.id} className="relative overflow-hidden rounded-xl group">
                        <div>
                            <Image src={project.image} width={480} height={380} alt="" className="w-full"/>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-white/70 dark:bg-black/40
                        flex-col items-center justify-end sm:w-96 w-52 sm:gap-32 gap-1 sm:p-12 p-1 sm:text-xl text-sm transition duration-300 ease-in-out translate-y-full from-transparent to to-black group-hover:translate-y-0">
                            <h1 className="sm:text-2xl text-xl font-semibold">{project.name}</h1>
                            <p className="py-4">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;