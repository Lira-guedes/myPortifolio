import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../assets/images/IMG_lira_perfil.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "#0A0A2E",
    height: "100vh"
  }))

   const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <StyledImg src={Avatar} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography color="primary" variant="h1" textAlign="center">Lira Guedes</Typography>
                <Typography color="primary" variant="h3" textAlign="center">I'm a Full Stack Developer</Typography>
                <Grid container display={"flex"} justifyContent={"center"}>
                  <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                    <Button><DownloadIcon/>Download my CV</Button>
                  </Grid>
                  <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                    <Button><EmailIcon/>Contact me</Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
