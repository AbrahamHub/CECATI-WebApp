import React from 'react';

const Carrusel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://firebasestorage.googleapis.com/v0/b/cecati-125.appspot.com/o/news%2Fimages%2FmFHllUXt5jcnbmW4CJuk?alt=media&token=81bb8551-1974-46f2-b6fd-fded5040b160" className="d-block w-100" alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cecati-125.appspot.com/o/news%2Fimages%2Fg43sAF1A90Z7WEG9TZ3w?alt=media&token=4032a11f-ffbf-418b-ab2b-3ab260a28af0" className="d-block w-100" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cecati-125.appspot.com/o/news%2Fimages%2FJs9PSiugBF86qWK8l3HE?alt=media&token=83fe3727-5804-4346-be1d-f41fd6f35a1c" className="d-block w-100" alt="Imagen 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carrusel;
