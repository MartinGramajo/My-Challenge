
import { Image } from 'react-bootstrap'

export default function Productos({ data }) {
    const { image, titulo, descripcion } = data;
    return (
        <div className="container d-flex flex-wrap m-auto">
            <div className="my-5">
                <Image style={{ width: '250px'}} src={image} roundedCircle />
                <h2 className="text-center">{titulo}</h2>
                <p className="text-center"> {descripcion}</p>
            </div>
        </div>    
    )
}
