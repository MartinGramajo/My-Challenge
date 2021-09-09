import { Image, Button } from "react-bootstrap"


export default function Article() {
    return (
        <div className=" container d-flex flex-wrap mt-5 mb-4 mr-5" id="article">
            <div className="text-white col-lg-6 col-sm-12 m-auto">
                <Image src="https://jrroofers.com/static/media/roofing-2.0c0bfeff.jpg" rounded style={{ maxWidth: '500px', height: '400px' }} />
                
            </div>
            <div className="text-dark col-lg-6 col-sm-12 mt-5">
                <h1 className="blockquote-footer">
                MOST TRUSTED ROOFING COMPANY
                </h1>
                <h5 className="fs-1">Why People Choose Us?</h5>
                <p> JR Roofing provide superior services and protection for your home or business at an affordable price through quality workmanship, long-lasting materials, and exceptional customer service. </p>
                <p> Whether your roof needs repair, maintenance services, or replacement, our roofing professionals have the knowledge and expertise to complete the job in a timely manner and to your satisfaction. </p>
                <Button className="mt-3" variant="danger" type="submit">
                    Get Free Quote
                </Button>
            </div>
        </div>
    )
}
