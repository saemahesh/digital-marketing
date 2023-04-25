

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
