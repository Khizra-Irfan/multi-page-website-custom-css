"use client"; // Mark the component as client-side

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="home-container">
      {/* Image with fade-in effect */}
      <Image
        src="/construction.jpg"
        alt="Construction Site"
        layout="fill"
        objectFit="cover"
        priority
        className={`home-image ${isLoaded ? 'loaded' : ''}`}
      />

      {/* Text overlay on top of the image */}
      <div className="home-overlay">
        <h3 className="home-text">
          LEADERS IN QUALITY
          <br />
          CONSTRUCTION AND
          <br />
          INFRASTRUCTURE
        </h3>
      </div>
    </div>
  );
}
