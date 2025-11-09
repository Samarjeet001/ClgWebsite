import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';

const AboutSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: 'hsl(var(--background))',
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  border: '1px solid hsl(var(--border))',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
    borderColor: 'hsl(var(--primary))',
  },
}));

const highlights = [
  {
    icon: <SchoolIcon sx={{ fontSize: 48, color: 'hsl(var(--primary))' }} />,
    title: 'NAAC A Accredited',
    description: 'Recognized for academic excellence and quality education standards',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 48, color: 'hsl(var(--gold))' }} />,
    title: 'Autonomous Status',
    description: 'Freedom to design innovative curriculum and assessment methods',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48, color: 'hsl(var(--primary))' }} />,
    title: '40+ Years Legacy',
    description: 'Four decades of producing skilled engineers and leaders',
  },
];

export const About = () => {
  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'hsl(var(--primary))',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            About D. Y. Patil College of Engineering & Technology
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}
          >
            Empowering Future Engineers Since 1984
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, mb: 6 }}>
          {highlights.map((highlight, index) => (
            <FeatureCard elevation={2} key={index}>
              <Box mb={2}>{highlight.icon}</Box>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                {highlight.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {highlight.description}
              </Typography>
            </FeatureCard>
          ))}
        </Box>

        <Paper
          elevation={3}
          sx={{
            padding: { xs: 3, md: 5 },
            backgroundColor: 'hsl(var(--secondary))',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" gutterBottom fontWeight={700} color="primary">
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph lineHeight={1.8}>
                To emerge as a center of excellence in technical education, fostering innovation,
                research, and entrepreneurship to produce globally competitive engineers.
              </Typography>
              
              <Typography variant="h4" gutterBottom fontWeight={700} color="primary" mt={3}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph lineHeight={1.8}>
                To provide quality education with state-of-the-art infrastructure, experienced
                faculty, and industry partnerships, preparing students for successful careers
                and contributing to society.
              </Typography>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" gutterBottom fontWeight={600} color="primary">
                Why Choose DYPCET?
              </Typography>
              {[
                'NAAC "A" Accredited Institution',
                'Autonomous status for academic flexibility',
                'Experienced and dedicated faculty',
                'State-of-the-art laboratories and facilities',
                'Strong industry partnerships and placements',
                'Research-oriented curriculum',
                'Active student clubs and technical societies',
                'Beautiful campus with modern amenities',
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 1.5,
                  }}
                >
                  <CheckCircleIcon sx={{ color: 'hsl(var(--primary))', fontSize: 24 }} />
                  <Typography variant="body1">{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Container>
    </AboutSection>
  );
};
