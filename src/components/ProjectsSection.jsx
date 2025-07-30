import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id : 1,
        title : "Digital Working Assistant",
        description : "A job portal website where users can find jobs and employers can post job listings.",
        image : "projects/kaampar.png",
        tags: ["React", "Java", "Spring Boot", "MySQL"],
        demourl : "#",
        githuburl : "#"
    },

     {
        id : 2,
        title : "Hotel Management System",
        description : "A web application to book rooms, manage reservations, and view detailed hotel information.",
        image : "projects/hotelManagement.png",
        tags: ["React", "Java", "Spring Boot", "MySQL"],
        demourl : "#",
        githuburl : "#"
    },
    {
        id : 3,
        title : "Socket Chat Application",
        description : "Socket-based chat application that allows real-time communication between users.",
        image : "projects/socket.png",
        tags: ["React", "Java", "Spring Boot", "MySQL"],
        demourl : "#",
        githuburl : "#"
    }

];
export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">


        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span>  </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> 
                Here are some of the projects I have worked on, showcasing my skills in Java, Spring Boot, React, and more.
            </p>
              <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                {projects.map((project , key ) => (

                    <div key = {key} className=" group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src = {project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 ">
                               <div className="flex flex-wrap gap-2 mb-4">

                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-large border 
                                    rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                                </div>
                                
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">

                                <div className="flex space-x-3">
                                    <a href={project.demourl} 
                                    target="_blank"

                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/></a>
                                      <a href={project.githuburl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>

                                    </div>
                                    </div>
                                </div>
                        </div>

                ))}
                    </div>

                    <div className="text-center mt-12">
                        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Ayushgour12" target="_blank" rel="noopener noreferrer">
                            Check My GitHub <ArrowRight size={16} />
                        </a>
                    </div>
         </div>
        </section>
       
}


