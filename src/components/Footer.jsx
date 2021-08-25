import "./footer.css";

function Footer() {
  return (
    <div className="main-footer mt-5">
      <div className="container">
        <div className="row">
          <div className=" d-flex justify-content-center">
            <img style={{ width: '250px'}} src="https://jrroofers.com/static/media/logo.cc97ffc4.png" alt="" />
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="d-flex justify-content-center">
            &copy;{new Date().getFullYear()} JR Roofing & Gutter Services. Powered by Embtel Solutions, Inc.
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;