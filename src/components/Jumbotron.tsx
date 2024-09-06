import React from 'react';

const Jumbotron: React.FC = () => (
  <div className="jumbotron" id="home">
    <div className="container">
      <h1 className="display-4">Welcome to Outreach Bible Project</h1>
      <p className="lead">Join us in spreading the Gospel at major sporting events worldwide.</p>
      <hr className="my-4" />
      <div id="featureCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4 offset-md-4 text-center">
                <h3>Super Bowl Outreach</h3>
                <p>Share the Word at America's biggest sporting event.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4 offset-md-4 text-center">
                <h3>Olympic Evangelism</h3>
                <p>Reach out to international audiences at the Olympic Games.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4 offset-md-4 text-center">
                <h3>World Cup Ministry</h3>
                <p>Spread the Gospel during the global soccer phenomenon.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#featureCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#featureCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
);

export default Jumbotron;