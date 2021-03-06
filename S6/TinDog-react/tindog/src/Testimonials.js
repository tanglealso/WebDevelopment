import React from "react";
import dogImg from './images/dog-img.jpg' ;
import ladyImg from './images/lady-img.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials">
   

      <div id="carouselExampleControls" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2>
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on TinDog. Woof.
            </h2>
            <img
              class="testimonial-image"
              src={dogImg}
              alt="dog-profile"
            />
            <em>Pebbles, New York</em>
          </div>

          <div class="carousel-item">
            <h2 class="testimonial-text">
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img
              class="testimonial-image"
              src={ladyImg}
              alt="lady-profile"
            />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};
export default Testimonials;
