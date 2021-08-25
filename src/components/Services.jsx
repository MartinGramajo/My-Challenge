import React from 'react';
import Service from './Service';

export default function Services() {
  const servicios = [
    {
      image: "https://jrroofers.com/static/media/repair.f5ca3f92.jpg",
    },
    {
      image: "https://jrroofers.com/static/media/sunlight.7cf2a671.jpg",
    },
    {
      image: "https://jrroofers.com/static/media/gutter.6fadf4ae.jpg",
    },
    {
      image: "https://jrroofers.com/static/media/solar.7dcefd9b.jpg",
    },
    {
      image: "https://jrroofers.com/static/media/downspout.e5335229.jpeg",
    },
    {
      image: "https://jrroofers.com/static/media/flatroof.932f5801.jpg",
    },
    {
      image: "https://jrroofers.com/static/media/shingles-roof.6de5d173.jpg",
    },
    {
      image: "https://jrroofers.com/static/media/gutter-cleaning.c390c4b0.jpeg",
    },
    {
      image: "https://jrroofers.com/static/media/chimneys-repairs.74859bd3.jpg",
    },
  ];

  return (
    <>
      <div className="mt-5 color-fondo" id="services">
        <h1 className="text-center text-white-50 fs-6 mt-5"> What we Do</h1>
        <h1 className="text-center text-white mt-3 mb-5 fs-1">  Our Services </h1>
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
