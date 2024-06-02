import styled from 'styled-components';

const FeaturesSection = styled.section``;

const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Feature = styled.div`
  flex: 1 1 300px;
  margin: 20px;
  text-align: center;
`;

const FeatureImage = styled.img`
  max-width: 100px;
  margin-bottom: 20px;
`;

const Features = () => (
  <FeaturesSection id="features">
    <div className="container">
      <h2>Features</h2>
      <FeaturesList>
        <Feature>
          <FeatureImage src="https://via.placeholder.com/100" alt="Feature One" />
          <h3>Feature One</h3>
          <p>Description of feature one.</p>
        </Feature>
        <Feature>
          <FeatureImage src="https://via.placeholder.com/100" alt="Feature Two" />
          <h3>Feature Two</h3>
          <p>Description of feature two.</p>
        </Feature>
      </FeaturesList>
    </div>
  </FeaturesSection>
);

export default Features;

