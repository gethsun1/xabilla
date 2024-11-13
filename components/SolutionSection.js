// components/SolutionSection.js
import styled from 'styled-components';
import DownArrow from './DownArrow';

export default function SolutionSection() {
  return (
    <SolutionSectionWrapper>
      <ContentWrapper>
        <LeftColumn>
          <Title>Our Solution</Title>
          <SubTitle>We are building a bridge for like-minded Web 3.0 tribes</SubTitle>
          <Description>
             <span style={{ color: '#ffd700' }}>Xabila</span> is derived from the Swahili word Kabila, meaning tribe.
          </Description>
        </LeftColumn>
        <RightColumn>
          <Image src="/solution.png" alt="Xabila Logo" />
          <Paragraph>
            We're building more than a platform—we're creating a bridge. Xabila.io is a decentralized marketplace where Web 3.0 brands meet their perfect storytellers: creators who understand blockchain, believe in decentralization, and speak the language of their communities. By leveraging Ethereum blockchain technology, we're building a transparent, secure, and crypto-powered ecosystem where brands can find their perfect storytellers and creators can access new opportunities.
            <br />
            <br />
            In a market projected to grow from $3.08 billion to $17.84 billion by 2030, we're not just riding the wave—we're helping shape it.
          </Paragraph>
        </RightColumn>  
      </ContentWrapper>
    </SolutionSectionWrapper>
  );
}

// Styled components specific to this section
const SolutionSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white; 
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Enable columns to wrap on smaller screens */
`;

const LeftColumn = styled.div`
  flex: 1 1 50%; /* Set width to 50% */
  text-align: center;
`;

const RightColumn = styled.div`
  flex: 1 1 50%; /* Set width to 50% */
`;

const Title = styled.h1`
  font-size: 7rem; /* Adjust for larger size */
  font-weight: 500;
  color: #2f063f;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
  padding: 180px;
`;

const SubTitle = styled.h2`
  font-size: 1.5 rem; /* Adjust for medium size */
  font-weight: 500;
  color: #2f063f;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #000;
  font-family: 'Roboto', sans-serif;
`;

const Image = styled.img`
  width: 800px;
  height: 400px;
  margin-bottom: 20px;
  padding: 40px;
  border: 2px solid #2f063f;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #000;
  font-family: 'Roboto', sans-serif;
`;