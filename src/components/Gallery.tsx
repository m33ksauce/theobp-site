import React from 'react';

const Gallery: React.FC = () => (
  <div className="container my-5" id="gallery">
    <h2 className="text-center mb-4">Image Gallery</h2>
    <div className="row justify-content-center">
      <div className="col-md-4 col-sm-6 mb-4">
        <img src="https://via.placeholder.com/300x600" alt="Scenic landscape" className="img-fluid rounded" />
      </div>
      <div className="col-md-4 col-sm-6 mb-4">
        <img src="https://via.placeholder.com/300x600" alt="Urban cityscape" className="img-fluid rounded" />
      </div>
      <div className="col-md-4 col-sm-6 mb-4">
        <img src="https://via.placeholder.com/300x600" alt="Wildlife portrait" className="img-fluid rounded" />
      </div>
    </div>
  </div>
);

export default Gallery;