import React from 'react';
import Service from './Service';

export default function Services() {
  const servicios = [
    {
      image: "https://jrroofers.com/static/media/repair.f5ca3f92.jpg",
      titulo: "Roofing Repair Services",
      descripcion: "Get your Rooftop Repaired",
    },
    {
      image: "https://jrroofers.com/static/media/sunlight.7cf2a671.jpg",
      titulo: "Skylight Installation",
      descripcion: "Get Free Quote",
    },
    {
      image: "https://jrroofers.com/static/media/gutter.6fadf4ae.jpg",
      titulo: "Drain & Gutter Installation",
      descripcion: "Get In Touch",
    },
    {
      image: "https://jrroofers.com/static/media/repair.f5ca3f92.jpg",
      titulo: "Roofing Repair Services",
      descripcion: "Get your Rooftop Repaired",
    },
    {
      image: "https://jrroofers.com/static/media/sunlight.7cf2a671.jpg",
      titulo: "Roofing Repair Services",
      descripcion: "Get your Rooftop Repaired",
    },
    {
      image: "https://jrroofers.com/static/media/gutter.6fadf4ae.jpg",
      titulo: "Roofing Repair Services",
      descripcion: "Get your Rooftop Repaired",
    },
    {
      image: "https://jrroofers.com/static/media/repair.f5ca3f92.jpg",
      titulo: "Roofing Repair Services",
      descripcion: "Get your Rooftop Repaired",
    },
    {
      image: "https://jrroofers.com/static/media/sunlight.7cf2a671.jpg",
      titulo: "Roofing Repair Services",
      descripcion: "Get your Rooftop Repaired",
    },
    {
      image: "https://jrroofers.com/static/media/gutter.6fadf4ae.jpg",
      titulo: "Roofing Repair Services",
      descripcion: "Get your Rooftop Repaired",
    },
  ];

  return (
    <>
      <div className="mt-5 fondo-service ">
        <h1 className="text-center text-dark mt-3 mb-2 fs-1">  Our Services </h1>
        <div className=" container mb-4">
          <div className="row">
            <div className="d-flex flex-wrap justify-content-around mx-auto col-md-10 col-sm-12">
              {servicios.map((servicio, i) =>
                <Service key={i} data={servicio} />
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
