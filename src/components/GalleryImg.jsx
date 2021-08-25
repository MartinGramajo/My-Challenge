import React from 'react';
import Gallery from './Gallery';

export default function GalleryImg() {
    const imagenes = [
        {
            img: "https://jrroofers.com/static/media/roofing-1-thumb.0595fab5.jpg",
        },
        {
            img: "https://jrroofers.com/static/media/roofing-2-thumb.bb1959d6.jpg",
        },
        {
            img: "https://jrroofers.com/static/media/roofing-3-thumb.d0df1fd3.jpg",
        },
        {
            img: "https://jrroofers.com/static/media/roofing-4-thumb.e9bc3d81.jpg",
        },
        {
            img: "https://jrroofers.com/static/media/roofing-5-thumb.1a0a216f.jpg",
        },
        {
            img: "https://jrroofers.com/static/media/roofing-6-thumb.7a6cbe1e.jpg",
        },

    ];
    return (
        <>
            <div className="container d-flex flex-wrap justify-content-around">
                {imagenes.map((imagen, id) =>
                    <Gallery key={id} data={imagen} />
                )}
            </div>
        </>
    );
}
