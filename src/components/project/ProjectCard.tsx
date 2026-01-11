import fabflix_thumbnail from '../../../public/projects/fabflix/login.png'
import glub_world_thumbnail from '../../../public/projects/glub_world/login.png'
import guidance_glasses_thumbnail from '../../../public/projects/guidance_glasses/guidance_glasses.png'
import purin_car_thumbnail from '../../../public/projects/purin_car/purin_car_records.png'

interface Project {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
}

function ProjectCardItem({ title, description, thumbnail, link }: Project) {
    return (
        <article className="card">
            <img src={thumbnail} alt={`${title} thumbnail`} width="100"/>
            <div className="p">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="button">
                    <a href={link}> Details</a>
                </button>
            </div>
        </article>
    );
}

function ProjectCard() {
    const projects: Project[] = [
        {
            title: "Purin Car",
            description: "Android application using Kotlin, Room Database and Jetpack Compose Android app for tracking vehicle maintenance intervals with a reactive UI.",
            thumbnail: purin_car_thumbnail,
            link: "purin_car.html"
        },
        {
            title: "Glub World",
            description: "Video game website using HTML, JavaScript, and CSS with AWS for my significant other.",
            thumbnail: glub_world_thumbnail,
            link: "glub_world.html"
        },
        {
            title: "Fabflix",
            description: "Movie catalog website using Java Servlets, MySQL, HTML, JavaScript/jQuery, and CSS with AWS, Maven, and Docker.",
            thumbnail: fabflix_thumbnail,
            link: "fabflix.html"
        },
        {
            title: "Guidance Glasses",
            description: "A pair of glasses that can assist the visually impaired to navigate urban environments by providing information about their surroundings via haptic feedback.",
            thumbnail: guidance_glasses_thumbnail,
            link: "guidance_glasses.html"
        }
    ]

    return (
        <section className="projects">
            <h1>Projects</h1>
            {projects.map((project) => (
                <ProjectCardItem
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    thumbnail={project.thumbnail}
                    link={project.link}
                />
            ))}
        </section>
    );
}

export default ProjectCard;