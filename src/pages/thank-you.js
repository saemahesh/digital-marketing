

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
                <h3 style={{textAlign:'center'}}>Payment Successful</h3>
                <center>
                <img src="https://astrixinc.com/wp-content/uploads/2017/05/thank-you.png" alt="" />
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
