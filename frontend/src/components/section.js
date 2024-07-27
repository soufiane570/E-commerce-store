/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Grid, Typography, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, Pinterest, Instagram } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import url1 from '../assets/hero/hero-1.jpg';
import url2 from '../assets/hero/hero-2.jpg';

const Section = () => {
  return (
    <section css={heroStyles.hero}>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div css={heroStyles.heroItem} style={{ backgroundImage: `url(${url1})` }}>
          <Container>
            <Grid container>
              <Grid item xl={5} lg={7} md={8}>
                <div css={heroStyles.heroText}>
                  <Typography variant="subtitle1" css={heroStyles.heroSubtitle}>
                    Summer Collection
                  </Typography>
                  <Typography variant="h2" css={heroStyles.heroTitle}>
                    Fall - Winter Collections 2030
                  </Typography>
                  <Typography variant="body1" css={heroStyles.heroDescription}>
                    A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
                  </Typography>
                  <Button variant="contained" color="primary" css={heroStyles.heroButton}>
                    Shop now <span css={heroStyles.arrowRight}>→</span>
                  </Button>
                  <div css={heroStyles.heroSocial}>
                    <IconButton href="#"><Facebook /></IconButton>
                    <IconButton href="#"><Twitter /></IconButton>
                    <IconButton href="#"><Pinterest /></IconButton>
                    <IconButton href="#"><Instagram /></IconButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div css={heroStyles.heroItem} style={{ backgroundImage: `url(${url2})` }}>
          <Container>
            <Grid container>
              <Grid item xl={5} lg={7} md={8}>
                <div css={heroStyles.heroText}>
                  <Typography variant="subtitle1" css={heroStyles.heroSubtitle}>
                    Summer Collection
                  </Typography>
                  <Typography variant="h2" css={heroStyles.heroTitle}>
                    Fall - Winter Collections 2030
                  </Typography>
                  <Typography variant="body1" css={heroStyles.heroDescription}>
                    A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
                  </Typography>
                  <Button variant="contained" color="primary" css={heroStyles.heroButton}>
                    Shop now <span css={heroStyles.arrowRight}>→</span>
                  </Button>
                  <div css={heroStyles.heroSocial}>
                    <IconButton href="#"><Facebook /></IconButton>
                    <IconButton href="#"><Twitter /></IconButton>
                    <IconButton href="#"><Pinterest /></IconButton>
                    <IconButton href="#"><Instagram /></IconButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Carousel>
    </section>
  );
};

const heroStyles = {
  hero: css`
    position: relative;
  `,
  heroItem: css`
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
  `,
  heroText: css`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 16px;
    border-radius: 8px;
  `,
  heroSubtitle: css`
    color: red;
    margin-bottom: 8px;
  `,
  heroTitle: css`
    color: white;
    margin-bottom: 16px;
  `,
  heroDescription: css`
    color: white;
    margin-bottom: 32px;
  `,
  heroButton: css`
    color: white;
  `,
  arrowRight: css`
    margin-left: 8px;
  `,
  heroSocial: css`
    margin-top: 16px;
  `,
  socialIcon: css`
    color: white;
  `,
};

export default Section;
