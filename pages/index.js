// pages/index.js
import Image from 'next/image';
import styled from 'styled-components';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import SolutionSection from '../components/SolutionSection';

export default function HomePage() {
  return (
    <PageContainer>
      <Head>
        <title>Xabila</title>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          `}
        </style>
      </Head>

      {/* Background Image */}
      <Background>
        <Image
          src="/xabila-bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Background>

      {/* Main Content */}
      <MainSection>
        <LogoContainer>
          <Image src="/xabila-logo.png" alt="Xabila Logo" width={100} height={50} />
        </LogoContainer>

        <Content>
          <Title className="syncopate-bold">XaBIla</Title>
          <Subtitle className="roboto-regular">
            Using blockchain technology to link Web 3.0 brands with Africa’s top creators
          </Subtitle>
        </Content>
      </MainSection>

      {/* About Section (Placed below the main content) */}
      <AboutSection />
      <SolutionSection/>
    </PageContainer>
  );
}

// Styled-components for styling
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  color: #ecb71f;
  font-family: 'Syncopate', sans-serif;
`;

const MainSection = styled.section`
  width: 100%;
  min-height: 100vh; /* Each section will take at least the viewport height */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Full viewport height */
 
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 50px;
`;

const Content = styled.div`
  margin-top: 300px; /* Adjust for spacing below the logo */
  margin-left: 150px;
  width: 75%; 
  text-align: left;
  color: #ecb71f;
`;

const Title = styled.h1`
  font-size: 14rem; 
  font-weight: 400;
  color: #ecb71f;
  font-family: 'Syncopate', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  color: white;
  margin-top: 20px;
  width: 600px; 
  font-family: 'Roboto', sans-serif;
`;
