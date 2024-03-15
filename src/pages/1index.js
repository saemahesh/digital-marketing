import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Feature from "sections/feature";
import TestimonialCard from "sections/testimonial";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/"); // Redirect to /home when component mounts
  }, []); // Run this effect only once after the initial render

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
