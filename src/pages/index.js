import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="An educational resource for robotics and AI learners">
      <main>
        <div className="container">
          <div className="row padding-horiz--md">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <p>
                This AI-Native Textbook provides educational content for robotics and AI learners,
                with a focus on Vision-Language-Action systems that enable natural human-robot interaction.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}