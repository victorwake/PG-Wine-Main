import './carousel.css'

export const Carousel = () => {
  const expDetail = []
  return (
    <div className="carousel">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          {/* {(expDetail.image).map(e => (
            <div class="carousel-item active">
              <img
                src={[e]}
                class="d-block w-100"
                alt="..."
              />
            </div>
          ))} */}
          <div class="carousel-item active">
            <img
              src="https://tienda.lagarde.com.ar/media/images/1-Teia-Malbec-Desktop_1.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://tienda.lagarde.com.ar/media/images/1--Lagarde-Seleccio_n-Malbec--Desktop.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
