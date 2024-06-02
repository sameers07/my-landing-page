import styled from 'styled-components';

const ScreenshotsSection = styled.section``;

const ScreenshotsGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Screenshot = styled.img`
  margin: 20px;
  max-width: 300px;
`;

const Screenshots = () => (
  <ScreenshotsSection>
    <div className="container">
      <h2>Screenshots</h2>
      <ScreenshotsGallery>
        <Screenshot src="https://via.placeholder.com/300" alt="Screenshot 1" />
        <Screenshot src="https://via.placeholder.com/300" alt="Screenshot 2" />
      </ScreenshotsGallery>
    </div>
  </ScreenshotsSection>
);

export default Screenshots;


