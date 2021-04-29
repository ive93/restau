import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Swiper from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const Carrousel = () => (
    <div>
    <div className="swiper-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide">I have never looked back and I’m absolutely in love with the treatment. 
      My results are brilliant and clients are continually amazed at this very new and innovative treatment. 
      I am just glad to get in at the beginning of this revolutionary work and very happy that I chose such a 
      Professional and supportive company to partner with!</div>
      <div className="swiper-slide">I have never looked back and I’m absolutely in love with the treatment. 
      My results are brilliant and clients are continually amazed at this very new and innovative treatment. 
      I am just glad to get in at the beginning of this revolutionary work and very happy that I chose such a 
      Professional and supportive company to partner with!</div>
      <div className="swiper-slide">I have never looked back and I’m absolutely in love with the treatment. 
      My results are brilliant and clients are continually amazed at this very new and innovative treatment. 
      I am just glad to get in at the beginning of this revolutionary work and very happy that I chose such a 
      Professional and supportive company to partner with!</div>
    </div>

    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>
    <div className="swiper-pagination"></div>
  </div>

  </div>
)
  const swiper = new Swiper('.swiper-container', {
    loop:true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

export default Carrousel;