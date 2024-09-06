import React from 'react';

const CallToAction: React.FC = () => (
  <div className="container my-5" id="cta">
    <div className="p-5 text-center rounded-3">
      <h1 className="text-body-emphasis">Join Our Next Outreach Event</h1>
      <p className="col-lg-8 mx-auto fs-5">
        Be part of our upcoming evangelistic outreach at a major sporting event. Sign up now to make an impact!
      </p>
      <div className="d-inline-flex gap-2 mb-5">
        <button className="btn btn-primary btn-lg px-4 rounded-pill" type="button">
          Register Now
        </button>
        <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
          Event Details
        </button>
      </div>
    </div>
  </div>
);

export default CallToAction;