

import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Robomate | Automate your business" />
          <section id="home"> 
          <div className="row">
            <div className="col-12">
              <div className="section-title"  style={{marginTop:'150px'}}>
                {/* <h3 style={{textAlign:'center'}}>Payment Successful</h3> */}
                <center>

  <div
    style={{
      position: "relative",
      width: "100%",
      height: 0,
      paddingTop: "70.7143%",
      paddingBottom: 0,
      boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
      marginTop: "1.6em",
      marginBottom: "0.9em",
      overflow: "hidden",
      borderRadius: 8,
      willChange: "transform"
    }}
  >
    <iframe
      loading="lazy"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        border: "none",
        padding: 0,
        margin: 0
      }}
      src="https://www.canva.com/design/DAFfCDieKVo/view?embed"
      allowFullScreen="allowfullscreen"
      allow="fullscreen"
    ></iframe>
  </div>

                  


                <iframe className="airtable-embed" 
                src="https://airtable.com/embed/shrttwrMCjvR6XrBM?backgroundColor=purple" 
                frameborder="0"  width="100%" height="1400" style={{"background": "transparent", border: "1px solid #ccc"}}></iframe>
                </center>
              </div>
            </div>
          </div>
        </section>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
