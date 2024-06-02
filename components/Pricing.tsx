import styled from 'styled-components';

const PricingSection = styled.section``;

const PricingPlans = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PricingPlan = styled.div`
  flex: 1 1 300px;
  margin: 20px;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Pricing = () => (
  <PricingSection>
    <div className="container">
      <h2>Pricing</h2>
      <PricingPlans>
        <PricingPlan>
          <h3>Basic</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Feature A</li>
            <li>Feature B</li>
            <li>Feature C</li>
          </ul>
        </PricingPlan>
        <PricingPlan>
          <h3>Premium</h3>
          <p>$19.99/month</p>
          <ul>
            <li>Feature A</li>
            <li>Feature B</li>
            <li>Feature C</li>
            <li>Feature D</li>
          </ul>
        </PricingPlan>
      </PricingPlans>
    </div>
  </PricingSection>
);

export default Pricing;

