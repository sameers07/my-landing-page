import styled from 'styled-components';

const HeroSection = styled.header`
  background: #f7f7f7;
  padding: 100px 0;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin: 0 10px;
  padding: 10px 20px;
  background: #0070f3;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
`;

const Hero = () => (
  <HeroSection>
    <div className="container">
      <h1>Discover Our App</h1>
      <p>The best app for all your needs.</p>
      <div>
        <CTAButton href="/download">Download Now</CTAButton>
        <CTAButton href="#features">Learn More</CTAButton>
      </div>
    </div>
  </HeroSection>
);

export default Hero;

