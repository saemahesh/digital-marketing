import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';
import TestimonialCard from 'sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Robomate | Automate your business" />
          <Banner />
          <Feature />
          {/* <WorkFlow /> */}
          <TestimonialCard />
          {/* <Package /> */}
          {/* <Faq /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
