import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroImage from '@/assets/college-hero.jpg';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '600px',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: `linear-gradient(rgba(21, 101, 192, 0.8), rgba(21, 101, 192, 0.9)), url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const BadgeBox = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const Hero = () => {
  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          <Box sx={{ flex: { xs: '1', md: '2' } }}>
            <BadgeBox>
              <VerifiedIcon sx={{ color: 'hsl(var(--gold))' }} />
              <Typography variant="body2" fontWeight={600}>
                NAAC 'A' Accredited | Autonomous Institute
              </Typography>
            </BadgeBox>
            
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              D. Y. Patil College of Engineering & Technology
            </Typography>
            
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                marginBottom: 3,
                opacity: 0.95,
              }}
            >
              Kasaba Bavada, Kolhapur
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                marginBottom: 4,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
              }}
            >
              Celebrating 40+ years of Excellence in Technical Education
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href="#admissions"
                sx={{
                  backgroundColor: 'hsl(var(--gold))',
                  color: 'white',
                  fontWeight: 600,
                  paddingX: 4,
                  paddingY: 1.5,
                  '&:hover': {
                    backgroundColor: 'hsl(38 92% 45%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Apply Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#about"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
                  paddingX: 4,
                  paddingY: 1.5,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
          
          <Box sx={{ flex: { xs: '1', md: '1' }, display: { xs: 'block', sm: 'block' } }}>
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: 3,
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <EmojiEventsIcon sx={{ fontSize: 40, color: 'hsl(var(--gold))' }} />
                <Typography variant="h6" fontWeight={700}>
                  Quick Facts
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography variant="body1">📚 8+ Engineering Departments</Typography>
                <Typography variant="body1">👨‍🎓 3000+ Students</Typography>
                <Typography variant="body1">👨‍🏫 180+ Expert Faculty</Typography>
                <Typography variant="body1">🏢 100+ Placement Partners</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
};
