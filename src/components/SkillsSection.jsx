import { useState } from "react";
import { cn } from "../lib/utils";
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },


  // Backend
  { name: "Java", level: 95, category: "backend" },
  { name: "Spring Boot", level: 90, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "JDBC", level: 85, category: "backend" },
  { name: "Servlets", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "Redis", level: 70, category: "backend" },
  { name: "SQL", level: 85, category: "backend" },

  // DevOps / Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Jenkins", level: 70, category: "tools" },
  { name: "Kubernetes", level: 65, category: "tools" },
  { name: "JUnit", level: 70, category: "tools" },
  { name: "Mockito", level: 60, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "IntelliJ", level: 85, category: "tools" },

  // Other
  { name: "System Design", level: 60, category: "other" },
  { name: "DSA (Java)", level: 75, category: "other" },
  { name: "Microservices", level: 70, category: "other" },
  { name: "Spring Security", level: 70, category: "other" },
  { name: "AWS (Theory)", level: 50, category: "other" },
];

const categories = ["all", "frontend", "backend", "tools", "other"];

export const SkillsSection = () => {   
    const [activeCategory , setactiveCategory]= useState("all"); 
    const filteredSkills = skills.filter(skill =>
        activeCategory === "all" || skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4 realtive bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category , key) => (
                        <button 
                            key={key} 
                            onClick={() => setactiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-foreground" : "bg-secondary/70 text-foregorund hover:bg-secondary"
                            )}
                            
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-md card-hover">
                            <div className="text-left mb-4 ">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animiate-[grow_1.5s_ease-out"  style={{width : skill.level + "%"}}/>

                                
                           </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}