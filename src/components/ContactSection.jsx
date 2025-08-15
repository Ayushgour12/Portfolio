import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import axios from "axios"; // ✅ Axios import


const BASE = 'https://emailrepository-production.up.railway.app'
export const ContactSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();

    // Form data state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        try {
            // ✅ Axios POST request to backend
            await axios.post(`${BASE}/api/contact`, formData);

            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you soon.",
            });

            // Reset form after success
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message", error);
            toast({
                title: "Error",
                description: "Failed to send your message. Please try again later.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitted(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 realtive bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="py-24 px-4 relative bg-secondary/30"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:aaayushgour12@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        aaayushgour12@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:9981214705"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        +91 9981214705
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <span className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Indore, Madhya Pradesh, India
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/ayushgour12/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>




                    {/* Contact Form  in which backend is integrated */}

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Ayush Gour..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="ayush12@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitted}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitted ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
