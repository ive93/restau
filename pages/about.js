import styled from 'styled-components';



const Hero = styled.div`
    width: 100%;
    height: 115%
`
const HeroContainer = styled.div`
    position: relative
`

const Contentabout = styled.div`
    position: absolute;
    top: 33%;
    left: 12%
`
const HeroText = styled.h1`
    max-width: 530px;
    font-size:40px
`
const HeroSubtext = styled.h4`
    font-weight: 200;
    font-size: 20px
`

const AboutContent = styled.div`
    display: flex;
`

const SectionSeparator = styled.div`
    display: flex;
    flex-direction: row
`

  const About = () => (
<section>
    <HeroContainer>
        <Hero>
            <img src="https://smarths.wpengine.com/wp-content/uploads/2020/09/About-Header.png" style={{width:"100%"}}/>
        </Hero>
        <Contentabout>
            <HeroText>BE SMART, THINK SMART, WORK SMART</HeroText>
            <HeroSubtext>Consumer Led NOT Manufacturer Driven</HeroSubtext>
        </Contentabout>
    </HeroContainer>
    <SectionSeparator>
        <div style={{backgroundColor:"#000"}}></div>
        <div style={{backgroundColor:"#fff"}}></div>
        <div style={{backgroundColor:"#000"}}></div>
        <div style={{backgroundColor:"#fff"}}></div>
        <div style={{backgroundColor:"#000"}}></div>
    </SectionSeparator>
    <AboutContent>
    <div>
        <img src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/older-woman-smiling.png"/>
    </div>

        <p>We aim to help people enjoy beauty through technology easily. 
        We are always committed to providing leading, reliable products and services to every customer. 
        Technological innovation is the lifeblood of our life with a strong technical foundation and high-end talent pipeline.</p>
    </AboutContent>
</section>
  );
  
  export default About;