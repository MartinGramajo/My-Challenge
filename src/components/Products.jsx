import React from 'react';
import Product from './Product';

export default function Products() {
    const trabajos = [
        {
          image: "https://jrroofers.com/static/media/step1.dc109171.jpg",
          titulo: "Schedule Estimate",
          descripcion: "Contact us via call or email. We'll be in touch ASAP.",
        },
        {
          image: "https://jrroofers.com/static/media/step2.79bcd8a5.jpg",
          titulo: "Pick Material Color",
          descripcion: "That is a tough part, choosing color.",
        },
        {
          image: "https://jrroofers.com/static/media/step3.c2db276f.jpg",
          titulo: "Install New Roof",
          descripcion: "Our assistant will be there and install new roof.",
        },
        {
          image: "https://jrroofers.com/static/media/step4.3bc93ed9.jpg",
          titulo: "Enjoy Peace of Mind",
          descripcion: "Your new rooftop is ready and it's awesome.",
        },
      ];
      
  return (
    <>
    <div>
      <h1 className="text-center text-dark mt-3 mb-5 fs-1">  Our Working Process </h1>
        <div className=" container d-flex col-12 text-center">
          {trabajos.map((trabajo, id) =>
            <Product key={id} data={trabajo} />
          )}
        </div>
      </div>
    </>
  );
}
