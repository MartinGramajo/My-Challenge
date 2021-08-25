import './service.css'
import { Image } from 'react-bootstrap'

export default function Service({ data }) {
    const { image } = data;
    return (
        <div className="row mb-1">
            <div className="efecto-hover" >
                <Image className="efecto-hover-img" style={{ width: '16rem', MaxWidth: '200px' }} variant="top" src={image} />
            </div>
        </div>
    )
}
