import './banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export default function CommentsTitle() {
    return (
        <div className="color-fondo text-white p-5">
            <h1 className="text-center text-white-50 fs-6"> Testimonials</h1>
            <h1 className="text-center"> <FontAwesomeIcon icon={ faComments }/> Valuable Clients Reviews</h1>
        </div>
    )
}