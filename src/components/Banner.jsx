import './banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faBullhorn, faMedal, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
    return (
        <div className="color-fondo text-white mt-5 p-5">
            <div className="container">
                <div className="row">
                    <div className="col-3 text-center">
                        <h1> <FontAwesomeIcon icon={faBullhorn} /> 100+</h1>
                        <p> PROJECTS COMPLETED</p>
                    </div>
                    <div className="col-3 text-center ">
                        <h1> <FontAwesomeIcon icon={faStar} /> 4.9 </h1>
                        <p> AVERAGE RATING</p>
                    </div>
                    <div className="col-3 text-center">
                        <h1> <FontAwesomeIcon icon={faBriefcase} /> 15+ </h1>
                        <p> HARD WORKING PEOPLE</p>
                    </div>
                    <div className="col-3 text-center">
                        <h1> <FontAwesomeIcon icon={faMedal} /> 250+ </h1>
                        <p> SATISFIED CLIENTS </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
