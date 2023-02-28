/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from 'theme-ui';
import { Link } from 'components/link';
import Satisfaction from 'assets/images/satisfaction.png'
import menuItems from './footer.data';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
          ))}
          <div>
            <h5 sx={styles.footer.heading}>Who are we?</h5>
            <div className='who-are-we'>
              Robomate is one of the pioneers in Marketing automation and Website Designer Company in India. We Lead international customers. We believe that every business, irrespective of its size small, medium or big looks for a way to communicate with its targeted audience.
            </div>
          </div>
          <div style={{display:'grid'}}>
            <div className="header-info-box">
              <div className="header-info-icon">
              <i class="bi bi-envelope-open-fill"></i>
              </div>
              <p>Email Us</p>
              <a href="mailto:support@robomate.in?subject=We Need help Robomate"><h6>support@robomate.in</h6></a>
            </div>
            <div className="header-info-box">
            <p>Call Us</p>
              <a href="tel:+919398305627"> <div className="header-info-icon">
              <i class="bi bi-telephone-fill"></i>
              </div>
                
                <h6>+919398305627</h6></a>
            </div>
            <div className="header-info-box">
              <img src={Satisfaction} width="150px" alt="Robomate - Best IT Service Provider" />
            </div>
          </div>

        </Box>

      </Container>
      <Text sx={styles.footer.copyright}>
        All right reserved - © Robomate
      </Text>
      <div>
        <div style={{ position: 'fixed', right: '5px', bottom: '130px', zIndex: 999999 }}>
          <a href="https://api.whatsapp.com/send?phone=919398305627&text=Hi Robomate👋" title="Whatspp Now For Inquiry" target="_blank">
            <img src="https://www.truelinesolution.com/public/Asset/img/whatspp-now-for-free-quotation.gif" alt="Whatspp Now For Inquiry" title="Whatspp Now For Inquiry" width="60px;" />
          </a>
        </div>
        <div style={{ position: 'fixed', right: '8px', bottom: '200px', zIndex: 999999 }} title="Call Now For Inquiry">
          <a href="tel:+919398305627">
            <img src="https://www.truelinesolution.com/public/Asset/img/call-now-for-free-quotation.gif" alt="Call Now For Inquiry" title="Call Now For Inquiry" width="55px;" />
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    container: {
      width: '100%',
      alignItems: 'stretch',
    },
    footerTopArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [7, null, 8],
      pb: ['10px', null, null, '20px'],
      px: [0, null, null, null, 4],
    },
    menus: {
      width: ['50%', null, null, '25%'],
      display: 'flex',
      flexDirection: 'column',
      mb: ['40px', null, null, '60px'],
    },

    heading: {
      fontSize: [3, null, null, 4],
      color: 'deeppink',
      fontWeight: 'bold',
      mb: [3, 4, 5, null, 6],
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', null, 1],
      color: 'text',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
    copyright: {
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      p: ['20px 20px'],
      backgroundColor: '#FCFDFE',
      color: 'text',
      a: {
        textDecoration: 'none',
        color: 'inherit',
        pl: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
};
