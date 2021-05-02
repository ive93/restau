import { Flex, Button, Tooltip, Link, WrapItem } from "@chakra-ui/react";

const Header = () => (
  <Flex
    w="100%"
    justifyContent="space-evenly"
    alignItems="center"
    position="fixed"
    zIndex="2"
  >
    <img src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SMARTGroup-Logo-Blue.png" />
    <ul className="top-level-menu">
      <li className="underline">
        <a href="/">Home</a>
      </li>
      <li className="underline">
        <a href="#">Products</a>
        <ul className="second-level-menu">
          <li>
            <Link
              href="#"
              bgColor="#fff"
              boxShadow="inset 0 -3px 4px 0 #02010130"
              w="100%"
              textAlign="center"
            >
              Diode
            </Link>
            <ul className="third-level-menu">
              <li>
                <a href="#">Intro</a>
              </li>
              <li>
                <a href="#">Features & Benefits</a>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Revenue</a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/juvium"
              bgColor="#fff"
              boxShadow="inset 0 -3px 4px 0 #02010130"
              w="100%"
              textAlign="center"
            >
              Juvium
            </Link>
            <ul className="third-level-menu">
              <li>
                <a href="#">Intro</a>
              </li>
              <li>
                <a href="#">Features & Benefits</a>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Revenue</a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="#"
              bgColor="#fff"
              boxShadow="inset 0 -3px 4px 0 #02010130"
              w="100%"
              textAlign="center"
            >
              M Tone XL
            </Link>
            <ul className="third-level-menu">
              <li>
                <a href="#">Intro</a>
              </li>
              <li>
                <a href="#">Features & Benefits</a>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Revenue</a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="#"
              bgColor="#fff"
              boxShadow="inset 0 -3px 4px 0 #02010130"
              w="100%"
              textAlign="center"
            >
              Multi Lasi
            </Link>
            <ul className="third-level-menu">
              <li>
                <a href="#">Intro</a>
              </li>
              <li>
                <a href="#">Features & Benefits</a>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Revenue</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="underline">
        <a href="#">Finance</a>
      </li>
      <li className="underline">
        <a href="/about">About</a>
      </li>
      <li className="underline">
        <a href="/news">News</a>
      </li>
    </ul>
    <Button
      bg="#3271B8"
      size="lg"
      color="#fff"
      h="39px"
      w="148px"
      borderRadius="3px"
    >
      <a href="/contact">Enquire Now</a>
    </Button>

    <Tooltip
      hasArrow="true"
      label="324234"
      background="red.600"
      color="#fff"
      h="30px"
      w="100px"
    >
      <img src="https://smarths.wpengine.com/wp-content/uploads/2020/09/Phone-Icon.png" />
    </Tooltip>
  </Flex>
);

export default Header;
