import React from 'react';

export default function Services() {
    return (
        <div className="services-container">
            {/* Main Heading */}
            <h1 className="services-title">SERVICES</h1>
            
            {/* Underline */}
            <div className="services-underline"></div>

            {/* Services Container */}
            <div className="services-grid">
                {/* Service Item */}
                <div className="service-item">
                    <img 
                        src="/preconstruction-planning.jpg" 
                        alt="Pre-construction Planning" 
                    />
                    <h2 className="service-title">
                        Preconstruction <br /> Planning
                    </h2>
                    <p className="service-description">
                        Pre-construction planning is a crucial phase in architecture, laying the foundation for the successful execution of a project. It involves comprehensive preparation and coordination, including site analysis, budgeting, scheduling, and risk assessment.
                    </p>
                </div>

                {/* Service Item */}
                <div className="service-item">
                    <img 
                        src="/architectural-modelling.jpg" 
                        alt="Architectural Modelling" 
                    />
                    <h2 className="service-title">
                        Architectural <br /> Modelling
                    </h2>
                    <p className="service-description">
                        Architectural modeling is a vital process in architecture that involves creating digital or physical representations of a building or structure. This allows architects to visualize and refine their designs before construction begins.
                    </p>
                </div>

                {/* Service Item */}
                <div className="service-item">
                    <img 
                        src="/construction-management.jpg" 
                        alt="Construction Management" 
                    />
                    <h2 className="service-title">
                        Construction <br /> Management
                    </h2>
                    <p className="service-description">
                        Construction management in architecture involves overseeing and coordinating the entire building process from start to finish, ensuring that design plans are realized accurately, on time, and within budget.
                    </p>
                </div>
            </div>
        </div>
    );
}
