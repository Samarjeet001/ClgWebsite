import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  backgroundColor: 'hsl(var(--primary))',
  color: 'white',
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'hsl(var(--gold))',
    transform: 'translateY(-4px)',
  },
}));

export const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 4 }}>
          <Box>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              D. Y. Patil College of Engineering & Technology
            </Typography>
            <Typography variant="body2" paragraph sx={{ opacity: 0.9 }}>
              Empowering future engineers with quality education, innovation, and excellence since 1984.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <SocialIcon>
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon>
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon>
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon>
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon>
                <YouTubeIcon />
              </SocialIcon>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="#home" color="inherit" underline="hover">
                Home
              </MuiLink>
              <MuiLink href="#about" color="inherit" underline="hover">
                About Us
              </MuiLink>
              <MuiLink href="#departments" color="inherit" underline="hover">
                Departments
              </MuiLink>
              <MuiLink href="#admissions" color="inherit" underline="hover">
                Admissions
              </MuiLink>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Academics
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="#" color="inherit" underline="hover">
                UG Programs
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                PG Programs
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                Research
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                Faculty
              </MuiLink>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Campus Life
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="#" color="inherit" underline="hover">
                Student Activities
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                Sports
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                Clubs
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                Events
              </MuiLink>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} D. Y. Patil College of Engineering & Technology. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
            NAAC 'A' Accredited | Autonomous Institute | Affiliated to Shivaji University, Kolhapur
          </Typography>
        </Box>
      </Container>
    </FooterSection>
  );
};
