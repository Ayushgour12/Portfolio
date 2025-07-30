import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6"> 
                        <h3 className = "text-2xl font-semibold">Passionate Software Developer</h3>
                        <p className = "text-muted-foreground">
                            I'm a passionate Java Backend Developer with 1 year of hands-on experience, having worked on real-world projects like DRDO's Unified Workflow Manager at Advantal Technologies. My core skills include Java, Spring Boot, REST APIs, and SQL. I also have frontend experience using React and solid understanding of DevOps tools like Jenkins, Docker, and Kubernetes.
                        </p>

                        <p className = "text-muted-foreground">
                            I'm currently deep-diving into system design, Spring Security, Microservices, JUnit, MongoDB, and Redis, while also practicing DSA in Java using the Striver Sheet. I believe in writing clean, efficient code and building scalable backend systems that solve real problems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                            <a href="#contact" className="cosmic-button">
                                GET IN TOUCH
                            </a>
                           <a
                             href="/Resume/AyushResume.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                             className="cosmic-button border border-primary bg-transparent text-primary hover:bg-primary/10"
                            >
                             Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Backend Engineering </h4>
                                <p className="text-muted-foreground"> 
                                    Building robust and scalable REST APIs using Java & Spring Boot.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Frontend Integration </h4>
                                <p className="text-muted-foreground"> 
                                    Crafting responsive UIs and seamless API integration with React.
                                </p>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">DevOps & Microservices </h4>
                                <p className="text-muted-foreground"> 
                                    CI/CD, Docker, and scalable microservice architecture for real-world apps.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                  
                </div>
            </div>
        </section>
    );
}
