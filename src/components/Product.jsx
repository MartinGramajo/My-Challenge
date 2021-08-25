
import { Image } from 'react-bootstrap'

export default function Product({ data }) {
    const { image, titulo, descripcion } = data;
    return (
        <div className="d-flex m-auto">
            <div className="container my-1">
                <Image style={{ width: '150px'}} src={image} roundedCircle />
                <h2 className="text-center">{titulo}</h2>
                <p className="text-center"> {descripcion}</p>
            </div>
        </div>    
    )
}
