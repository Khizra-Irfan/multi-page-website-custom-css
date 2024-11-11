"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setImageLoaded(true), 200); // Simulate image load delay
    }, []);

    return (
        <div className="about-container">
            {/* Text Section */}
            <div className="about-left">
                <h1 className="about-title">ABOUT</h1>
                <div className="about-underline"></div>
                <p className="about-text">
                Construction and infrastructure are the backbone of modern society, shaping the environments in which we live, work, and travel. The construction industry encompasses a wide range of activities that involve the planning, design, and building of structures such as residential homes, commercial buildings, bridges, highways, and more. Infrastructure, on the other hand, refers to the essential facilities and systems that support the daily functions of society, including transportation networks, utilities, water systems, and energy grids.

Over the years, construction has evolved with advancements in technology, materials, and design, enabling the creation of more efficient, sustainable, and innovative structures. The integration of smart technologies, such as building information modeling (BIM) and green building practices, has revolutionized the construction process, enhancing safety, reducing costs, and minimizing environmental impact.
                </p>
            </div>

            {/* Image Section with Animation */}
            <div className={`about-right ${imageLoaded ? 'about-image-loaded' : ''}`}>
                <Image 
                    src="/construction-img.jpg" 
                    alt="Construction Site" 
                    width={500} 
                    height={500} 
                    className="about-image"
                />
            </div>
        </div>
    );
}
