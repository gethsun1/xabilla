// components/AboutSection.js
import styled from 'styled-components';

export default function AboutSection() {
  return (
    <StorySection>
      <ContentWrapper>
        <LeftColumn>
          <Title>How Our Story Began</Title>
        </LeftColumn>
        <RightColumn>
          <ContentBlock>
            <Button>The Challenge We Saw</Button>
            <Paragraph>
              We watched as innovative Web 3.0 brands struggled to find their voice in African markets.
              Traditional influencer platforms, wary of crypto and blockchain, shut their doors to these
              pioneers of digital transformation. Meanwhile, passionate African creators, eager to champion
              these technologies, found themselves locked out of opportunities that could transform their
              communities.

              In the heart of Africa's digital revolution, two paths converged. Chebet Kipingor, a
            Regional Ambassador for the Association of Women in Crypto, and Mohammed
            Aziz, founder of Kiboko DAO, shared a vision born from years of firsthand
            experience in Africa's Web 3.0 landscape. They saw something others missed: a
            continent ready to embrace the future, held back not by lack of interest, but by
            disconnected pieces of a puzzle waiting to be solved.
            </Paragraph>
          </ContentBlock>
          <ContentBlock>
            <Button>A Market Ready For Change</Button>
            <Paragraph>
              Africa isn’t just another market—it’s the future of Web 3.0 innovation. With over 60% of our
              population under 25, armed with smartphones and hungry for change, we’re seeing crypto adoption
              rates that rival global leaders. Nigeria, Kenya, and South Africa are already showing the world
              what’s possible. Yet, there’s a missing link between brands that could transform lives and the
              voices that could tell their stories.
            </Paragraph>
          </ContentBlock>
        </RightColumn>
      </ContentWrapper>
    </StorySection>
  );
}

// Styled-components specific to this component
const StorySection = styled.div`
  width: 100%;
  height: 50vh; 
  background-color: white; /* White background */
  display: flex;
  align-items: flex-start; /* Aligns content at the top */
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* First column for title, second column for content */
  gap: 20px;
  width: 80%; /* Adjust as needed */
  padding: 40px; /* Padding around the container */
`;

const LeftColumn = styled.div`
  display: flex;
  align-items: flex-start; /* Aligns title at the top of the column */
  justify-content: flex-start;
  padding-right: 20px;
  border-right: 2px solid #2f063f; /* Vertical line */
`;

const Title = styled.h1`
  font-size: 7rem; /* Adjust as needed for prominence */
  font-weight: 400;
  color: #2f063f;
  font-family: 'Roboto', sans-serif;
  margin: 0; /* Remove extra spacing */
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px; /* Space between the line and content */
`;

const ContentBlock = styled.div`
  width: 100%;
`;

const Button = styled.div`
  display: inline-block;
  background-color: #2f063f;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #000; /* Set as needed for contrast with the background */
  font-family: 'Roboto', sans-serif;
`;
