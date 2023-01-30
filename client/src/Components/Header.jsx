import React from 'react'
import {NavLink, BrowserRouter} from "react-router-dom";

const Header = () => {
    return (
        <>
            <BrowserRouter>
            
            {/* <div id="carouselExampleIndicators" className="carousel slide mainhead" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./uploads/pic3.jpg" className="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./uploads/pic2.jpg" className="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./uploads/pic4.jpg" className="d-block w-100 img-fluid" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  */}
        <div className="">
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1260/images/mainpage.jpg" alt="main" className="img-fluid"/>
                </div>
            </div>
        </div>  
        </BrowserRouter>
        </>
    )
}

export default Header
