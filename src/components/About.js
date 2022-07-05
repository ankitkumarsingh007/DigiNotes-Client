import React from "react";

const About = () => {
  return (
    <div>
      <main role="main">
        <div className="container marketing">
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Your Notes.{" "}
                <span className="text-muted">Secured on cloud.</span>
              </h2>
              <p>
                <br /> <br />
                Cloud storage keeps your notes available anywhere, anytime,
                across the globe. <br /> Log in using any device and access your
                notes any time
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image  mx-auto"
                width={465}
                height={230}
                src="https://i.ibb.co/8gfckhy/cloud.jpg"
                alt=""
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading mx-auto">
                Notes at your fingertip . <span className="text-muted"></span>
              </h2>
              <p>
                <br />
                Taking notes has never been so simple . <br /> You don't have to
                find pen and paper every time you need to take notes . <br />{" "}
                Just open iNotebook on your phone and start taking notes.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image  mx-auto"
                width={465}
                height={230}
                src="https://i.ibb.co/zZRvn7d/2.jpg"
                alt="Generic placeholder image"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Security is our primary concern.{" "}
                <span className="text-muted"></span>
              </h2>
              <p>
                <br /> <br />
                We have taken the utmost care to ensure your security. Only
                authorized login is allowed. <br /> Also, our password is stored
                in encrypted form , Therefore, no one other than you can access
                them.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image  mx-auto"
                width={465}
                height={230}
                src="https://i.ibb.co/3RkcnG1/Hands-protecting-Personal-Data-information-on-Tablet-Information-and-cyber-security-Technology-Servi.jpg"
                alt=""
              />
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>
        {/* /.container */}
        {/* FOOTER */}
        <footer className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default About;
