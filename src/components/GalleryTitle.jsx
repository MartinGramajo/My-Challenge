import './banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export default function GalleryTitle() {
    return (
        <div className="color-fondo text-white p-5">
            <h1 className="text-center text-white-50 fs-6"> Some of our works</h1>
            <h1 className="text-center"> <FontAwesomeIcon icon={ faImage }/> Our Gallery</h1>
        </div>
    )
}