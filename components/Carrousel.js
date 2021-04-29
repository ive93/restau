import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Text,
  Flex
} from "@chakra-ui/react";


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carrousel = () => {
  return (

    <Swiper
      autoplay={{delay: 3000, disableOnInteraction: false}}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide>
        <Flex flexDirection="column">
          <Text marginBottom="30px"
                fontStyle="italic">
              I have never looked back and I’m absolutely in love with the treatment. 
              My results are brilliant and clients are continually amazed at this very new and innovative treatment. 
              I am just glad to get in at the beginning of this revolutionary work and very happy that I chose such a 
              Professional and supportive company to partner with!
          </Text>
          <Text>Sarah</Text>
          <Text>Equilibrium</Text>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex flexDirection="column">
          <Text marginBottom="30px"
                fontStyle="italic">
            What a breath of fresh air this company is, I felt like I was investing with a company that looks after me, 
            the client to ensure that I can deliver and look after mine. LOVE my laser machine!
          </Text>
          <Text>Sarah</Text>
          <Text>Equilibrium</Text>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex flexDirection="column">
          <Text marginBottom="30px"
                fontStyle="italic">
            I absolutely love this company, I can honestly say they have been 100% helpful in anything I ask, 
            this company goes out of their way for you, quick to respond to you when you're in desperate need of assistance.  
            ………….this company is 5* all the way, Thank you.
          </Text>
          <Text>Sarah</Text>
          <Text>Equilibrium</Text>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrousel;
