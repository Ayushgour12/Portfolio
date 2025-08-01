import React, { useState, useEffect } from 'react';

export const StarBackground = () => {
    // id , size , x , y , opacity , animationDuration
    const [stars, setStars] = useState([]);
    
    // id , size , x , y , delay , animationDuration
    const [meteors, setMeteors] = useState([]);
    
    const generateStars = () => {
            const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
            const newStars = [];
            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: i,
                    size: Math.random() * 3 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 4 + 2
                });
            }
            setStars(newStars);
        };
    useEffect(() => {
        
        generateStars();
    }, []);

        
    const generateMeteors = () => {
            const numberOfMeteros = 6; // Fixed number of meteors
            const newMeteors = [];
            for (let i = 0; i < numberOfMeteros; i++) {
                newMeteors.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 20,
                    delay : Math.random() * 15,
                    animationDuration: Math.random() * 3 + 3
                });
            }
            setMeteors(newMeteors);
        };
    useEffect(() => {
        
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        position: 'absolute'
                    }}
                />
            ))}


             {meteors.map(meteor => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size *50+ "px",
                        height: meteor.size * 2  + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationdelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                        position: 'absolute'
                    }}
                />
            ))}
        </div>
    );
};
   
    
    