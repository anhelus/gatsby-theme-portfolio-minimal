import React from 'react';
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    LecturesSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal-multiproject';

export default function IndexPage() {
    return (
        <>
            <Seo title="Gatsby Theme Portfolio Minimal" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog', 'Medium']} />
                <AboutSection sectionId="about" heading="About Portfolio Minimal" />
                <InterestsSection sectionId="details" heading="Details" />
                <ProjectsSection sectionId="features" heading="Built-in Features" />
                <ContactSection sectionId="github" heading="Issues?" />
                <LecturesSection sectionId="lectures" heading="mortacci" />
            </Page>
        </>
    );
}
