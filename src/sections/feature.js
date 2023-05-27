/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import { MDBBtn } from 'mdb-react-ui-kit';
import SectionHeader from 'components/section-header';
import Chatbot from 'assets/images/chatbot.png'
import CloudSender from 'assets/images/cloud_sender.png'

import GoAds from 'assets/images/services/go-ad.png'
import InstaAd from 'assets/images/services/insta-ads.jpg'
import YoutubeAd from 'assets/images/services/youtube-ads.png'
import FacebookAd from 'assets/images/services/fb-ads.png'

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          title="Explore Our Products"
        />

        {/* <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid> */}
      </Container>
      <div className="container" id='products'>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <img src="./graphicbaba.in_files/wa-sender.png" className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body">
                <h5 className="card-title">Bulk WhatsApp Sender</h5>
                <h6 className="card-price">Offer Price <span style={{color:'green', fontSize:'x-large', fontWeight:'bold'}}>Rs.350</span>/ Lifetime</h6>
                <center>
                <a href="https://robomatein.mojo.page/wa-sender">
                <button type="button" class="btn btn-outline-success" style={{marginRight:'20px'}}>Buy Now</button>
                  </a>
                  <a href="/wa-sender">
                    <button type="button" class="btn btn-outline-success">Details</button>
                  </a>
                </center>
               
                {/* <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={CloudSender} className="card-img-top" alt="Skyscrapers" />
              <div className="card-body">
              <h5 className="card-title">Wa cloud sender</h5>
                <h6 className="card-price">Offer Price <span style={{color:'green', fontSize:'x-large', fontWeight:'bold'}}>Rs.899</span>/ Year</h6>
                <center>
                  <a href="https://robomatein.mojo.page/digital-marketing">
                  <button type="button" class="btn btn-outline-success" style={{marginRight:'20px'}}>Buy Now</button>
                  </a>
                  <a href="https://robomatein.mojo.page/wa-cloud-sender">
                  <button type="button" class="btn btn-outline-success">Details</button>
                    </a>
                </center>
                {/* <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://static.wixstatic.com/media/5f1e4f_eb05fd848fe54e2faaf15069429bbfa9~mv2.png/v1/fit/w_500,h_500,q_90/file.png" className="card-img-top" alt="Palm Springs Road" />
              <div className="card-body">
              <h5 className="card-title">Just Dail Extractor</h5>
              <h6 className="card-price">Offer Price <span style={{color:'green', fontSize:'x-large', fontWeight:'bold'}}>Rs.499</span>/ Year</h6>
                <center>
                  <a href="https://robomatein.mojo.page/just-dail-data-extractor">
                  <button type="button" class="btn btn-outline-success" style={{marginRight:'20px'}}>Buy Now</button>
                  </a>
                  <a href="https://robomatein.mojo.page/just-dail-data-extractor">
                  <button type="button" class="btn btn-outline-success">Details</button>
                    </a>
                </center>
                {/* <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://productimages.withfloats.com/serviceimages/tile/60bd23e97d1520bb48c5cfeebde2c0670d9516a475df6882bb1b1f04" className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body">
              <h5 className="card-title">Google Map Extractor</h5>
              <h6 className="card-price">Offer Price <span style={{color:'green', fontSize:'x-large', fontWeight:'bold'}}>Rs.499</span>/ Year</h6>
                <center>
                  <a href="https://robomatein.mojo.page/google-data-extractor">
                  <button type="button" class="btn btn-outline-success" style={{marginRight:'20px'}}>Buy Now</button>
                  </a>
                  <a href="https://robomatein.mojo.page/google-data-extractor">
                  <button type="button" class="btn btn-outline-success">Details</button>
                    </a>
                </center>
                {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://i.ibb.co/JFDrb94/All-in-data-extractor-image.jpg"
              className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body">
                <h5 className="card-title">All In One Extractor</h5>
                <h6 className="card-price">Offer Price <span style={{color:'green', fontSize:'x-large', fontWeight:'bold'}}>Rs.499</span>/ Lifetime</h6>
                <center>
                  <a href="https://robomatein.mojo.page/all-in-one-data-extractor">
                  <button type="button" class="btn btn-outline-success" style={{marginRight:'20px'}}>Buy Now</button>
                    <a href="https://robomatein.mojo.page/all-in-one-data-extractor">
                  <button type="button" class="btn btn-outline-success">Details</button>
                    
                    </a>
                  </a>
                </center>
               
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="https://i.ibb.co/qpHJp1p/chatbot.jpg" className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body">
                <h5 className="card-title">Chat Bot</h5>
                <h6 className="card-price">Offer Price <span style={{color:'green', fontSize:'x-large', fontWeight:'bold'}}>Rs.1000</span>/ Year</h6>
                <center>
                  <a href="https://robomatein.mojo.page/chat-bot">
                  <button type="button" class="btn btn-outline-success" style={{marginRight:'20px'}}>Buy Now</button>
                  </a>
                  <a href="https://robomatein.mojo.page/chat-bot">
                  <button type="button" class="btn btn-outline-success">Details</button>
                    </a>
                </center>
               
              </div>
            </div>
          </div>

          

          <div className="col">
            <div className="card">
              <img src="https://i.ibb.co/pZg1MXX/digital-marketing.jpg" className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body">
                <h5 className="card-title">Digital Marketing</h5>
                <h6 className="card-price">Offer Price <span style={{color:'green', fontSize:'x-large', fontWeight:'bold'}}>Rs.2999</span>/ Month</h6>
                <center>
                  <a href="https://robomatein.mojo.page/digital-marketings">
                  <button type="button" class="btn btn-outline-success" style={{marginRight:'20px'}}>Buy Now</button>
                  </a>
                  <a href="https://robomatein.mojo.page/digital-marketings">
                  <button type="button" class="btn btn-outline-success">Details</button>
                    </a>
                </center>
               
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="https://i.ibb.co/Fx6Y3J1/website-development.jpg" className="card-img-top" alt="Hollywood Sign on The Hill" />
              <div className="card-body">
                <h5 className="card-title">Website Development</h5>
                <h6 className="card-price">Starts from <span style={{color:'green', fontSize:'x-large', fontWeight:'bold'}}>Rs.999</span></h6>
                <center>
                  <a href="https://robomatein.mojo.page/website-development">
                  <button type="button" class="btn btn-outline-success" style={{marginRight:'20px'}}>Buy Now</button>
                  </a>
                  <a href="https://robomatein.mojo.page/website-development">
                  <button type="button" class="btn btn-outline-success">Details</button>
                    </a>
                </center>
               
              </div>
            </div>
          </div>

        </div>

      </div>
      <SectionHeader
          title="Explore Our Services"
        />
      <div className="container" id="services">
        <div className="row text-center">
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about wow  bounceInLeft animated" style={{ visibility: 'visible', animationName: 'bounceInLeft' }}>
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://cdn-icons-png.flaticon.com/512/1233/1233540.png?w=740&t=st=1677310412~exp=1677311012~hmac=2a3088e49536e8a36edb247ecea48dff312a4e7286ec86cf21c64ee43636fbba" padding-bottom="10px" alt="Bulk SMS" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif" color="#ff8106" style={{ textShadow: '1px 1px #000' }}><a href="#">Bulk SMS</a></font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ Transactional SMS
                        <br /> ✓ Promotional SMS
                        <br /> ✓ Open DND SMS
                        <br /> ✓ Voice SMS/Call
                        <br /> ✓ Whatsapp SMS
                        <br /> ✓ PHP, HTML API
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about wow  bounceInUp animated" style={{ visibility: 'visible', animationName: 'bounceInUp' }}>
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://cdn-icons-png.flaticon.com/512/999/999039.png?w=740&t=st=1677311058~exp=1677311658~hmac=9830c3f7cd13ef448e32dbcb68206e5b928bb03d45ba0e638af020251b85da0e" padding-bottom="10px" alt="website" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif"><a href="#" style={{ color: '#27c471' }}>Web Designing</a></font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ Statics Website
                        <br /> ✓ Dynamic Website
                        <br /> ✓ School Website
                        <br /> ✓ Coaching Website
                        <br /> ✓ Matrimony Website
                        <br /> ✓ Real Estate Website
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about wow  bounceInRight animated" style={{ visibility: 'visible', animationName: 'bounceInRight' }}>
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://cdn-icons-png.flaticon.com/512/1162/1162162.png?w=740&t=st=1677311138~exp=1677311738~hmac=d35589065bf475f523a3930620ead31a2d41cb85cbf06d107bfb2eb58db09f79" padding-bottom="10px" alt="Portal Development" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif"><a href="#" style={{ color: '#27a9e1' }}>Portal Design</a></font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ Any Web Portal
                        <br /> ✓ Matrimonial Portal
                        <br /> ✓ E-Commerce Portal
                        <br /> ✓ Classifieds Portal
                        <br /> ✓ Real Estate Portal
                        <br /> ✓ CRM/CMS Portal
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about wow  bounceInLeft animated" style={{ visibility: 'visible', animationName: 'bounceInLeft' }}>
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://img.freepik.com/free-icon/speaker_318-614062.jpg?t=st=1677311172~exp=1677311772~hmac=b623320b8e1686efa32aef7198dc2a47ae2dd1e75f25f039fcff16bd9c726e44" padding-bottom="10px" alt="Advertiesment" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif" color="#db006b">Promotion</font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ Coaching Advertisement
                        <br /> ✓ Facebook Promotion
                        <br /> ✓ Web Promotion
                        <br /> ✓ Miss Call Alert
                        <br /> ✓ Mobile No. Data
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about wow  bounceInUp animated" style={{ visibility: 'visible', animationName: 'bounceInUp' }}>
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://cdn-icons-png.flaticon.com/512/1208/1208203.png?w=740&t=st=1677311260~exp=1677311860~hmac=7ee959067b655d707113f010764f435a4b874331d54138f6fc046e306da4a519" padding-bottom="10px" alt="Online Software" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif"><a href="#" style={{ color: '#f20076' }}>Online ERP</a></font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ School Management ERP
                        <br /> ✓ Online Exam/Test Series
                        <br /> ✓ Hospital Management
                        <br /> ✓ Bill or Invoice Software
                        <br /> ✓ GST or Accounting Soft.
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about wow  bounceInRight animated" style={{ visibility: 'visible', animationName: 'bounceInRight' }}>
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://cdn-icons-png.flaticon.com/512/1238/1238451.png?w=740&t=st=1677311347~exp=1677311947~hmac=1708d1546cf3c5880a379f0ab09222895ecd4b8c7805f416d3a7064edb9a57fe" padding-bottom="10px" alt="Socail Management" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif" color="#ff7400" style={{ textShadow: '1px 1px #000' }}><a href="#">SEO / SMO</a></font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ Search Engine Opt.
                        <br /> ✓ Social Media Opt.
                        <br /> ✓ Facebook Page Mgmt.
                        <br /> ✓ Google Search &amp; Map
                        <br /> ✓ Keyword &amp; Ad-Sense
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about">
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://cdn-icons-png.flaticon.com/512/681/681567.png?w=740&t=st=1677311377~exp=1677311977~hmac=792b7ed42cf75ad963df7c02f1e38a6acec3344523a4cd298c4dc4ce7ce45855" padding-bottom="10px" alt="Graphic Design" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif" color="#00ad02">Graphic Design</font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ Logo Design
                        <br /> ✓ Banner Design
                        <br /> ✓ Icon Design
                        <br /> ✓ Favicon Design
                        <br /> ✓ Picture Design
                        <br /> ✓ More ...
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about">
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://cdn-icons-png.flaticon.com/512/1122/1122550.png?w=740&t=st=1677311412~exp=1677312012~hmac=de6f01cd4d62654fbec9f842cb1e6047c2da2cd1e2fceb7e8b307c70bc326b2b" padding-bottom="10px" alt="Web Hosting" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif" color="#00e8b0">Host Services</font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ Domain Registration
                        <br /> ✓ Hosting Plan
                        <br /> ✓ G-Mail Hosting
                        <br /> ✓ Payment Gateway
                        <br /> ✓ SSL Certificate
                        <br /> ✓ More ...
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
          <div className="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
            <div className="single-about">
              <div className="single-about-caption">
                <div className="single-about-dec">
                  <div className="row">
                    <div className="column left">
                      <img src="https://cdn-icons-png.flaticon.com/512/345/345672.png?w=740&t=st=1677311459~exp=1677312059~hmac=615361899524189b59191a29370acd2495659775024d558e144d6065097321c3" width="88px" padding-bottom="10px" alt="Robomate-third-party" />
                    </div>
                    <div className="column right">
                      <p> <font size={6} face="Times New Roman, Times, serif" color="#27a9e1">Third-Party</font></p>
                      <p style={{ textAlign: 'left' }}><font size={4} face="Times New Roman, Times, serif">
                        ✓ CCTV camera
                        <br /> ✓ Biometrics
                        <br /> ✓ Plastic I-Card
                        <br /> ✓ Visiting Card
                        <br /> ✓ Digital Flex
                        <br /> ✓ More ...
                      </font></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single about */}
        </div>
      </div>
    </section>
    
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
