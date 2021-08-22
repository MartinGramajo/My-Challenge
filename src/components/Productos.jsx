
import { Image } from 'react-bootstrap'

export default function Productos({ data }) {
    const { image, titulo, descripcion } = data;
    return (
        <div className="container d-flex flex-wrap">
            <div className="my-5">
                    <Image style={{ width: '250px' }} src={image} roundedCircle />
                    <h2>{titulo}</h2>
                    <p> {descripcion}</p>
            </div>
        </div>    
    )
}
