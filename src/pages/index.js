import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Social from '../components/social';
import Email from '../components/email';
import Hero from '../components/hero';
import About from '../components/about';
import Jobs from '../components/jobs';
import Projects from '../components/projects';
import { Certifications, Contact } from '../components/sections';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => {
    return (
        <Layout>
            <Nav />
            <Social />
            <Email />
            <StyledMainContainer className="container">
                <Hero />
                <About />
                <Jobs />
                <Projects />
                <Certifications />
                <Contact />
            </StyledMainContainer>
            <footer style={{ textAlign: 'center', padding: '40px 0', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                <p>Designed & Built by Ali Bin Saeed</p>
            </footer>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Ali Bin Saeed | Software Engineer in Test</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </>
);
