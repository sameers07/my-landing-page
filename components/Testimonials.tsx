import styled from 'styled-components';

const TestimonialsSection = styled.section``;

const TestimonialsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Testimonial = styled.div`
  flex: 1 1 300px;
  margin: 20px;
  text-align: center;
`;

const TestimonialImage = styled.img`
  max-width: 50px;
  margin-bottom: 10px;
`;

const Testimonials = () => (
  <TestimonialsSection>
    <div className="container">
      <h2>Testimonials</h2>
      <TestimonialsList>
        <Testimonial>
          <TestimonialImage src="https://via.placeholder.com/50" alt="User One" />
          <p>"This app is fantastic! It has changed my life."</p>
          <h4>User One</h4>
        </Testimonial>
        <Testimonial>
          <TestimonialImage src="https://via.placeholder.com/50" alt="User Two" />
          <p>"I can't imagine my daily routine without this app."</p>
          <h4>User Two</h4>
        </Testimonial>
      </TestimonialsList>
    </div>
  </TestimonialsSection>
);

export default Testimonials;

