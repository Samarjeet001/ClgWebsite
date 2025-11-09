import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const ContactSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: 'hsl(var(--secondary))',
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  },
}));

const contacts = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 40, color: 'hsl(var(--primary))' }} />,
    title: 'Address',
    info: 'Kasaba Bavada, Kolhapur, Maharashtra - 416006',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: 'hsl(var(--primary))' }} />,
    title: 'Phone',
    info: '+91-231-2601234',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: 'hsl(var(--primary))' }} />,
    title: 'Email',
    info: 'info@dypcoekolhapur.ac.in',
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 40, color: 'hsl(var(--primary))' }} />,
    title: 'Website',
    info: 'coek.dypgroup.edu.in',
  },
];

export const Contact = () => {
  return (
    <ContactSection id="contact">
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
            Get In Touch
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Have questions? We're here to help you
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 6 }}>
          {contacts.map((contact, index) => (
            <ContactCard elevation={2} key={index}>
              <Box mb={2}>{contact.icon}</Box>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                {contact.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {contact.info}
              </Typography>
            </ContactCard>
          ))}
        </Box>

        <Paper
          elevation={3}
          sx={{
            padding: { xs: 3, md: 5 },
            textAlign: 'center',
            background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
            color: 'white',
          }}
        >
          <Typography variant="h4" gutterBottom fontWeight={700}>
            Ready to Start Your Engineering Journey?
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.95 }}>
            Join thousands of successful alumni who started their careers at DYPCET
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 3 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'hsl(var(--gold))',
                color: 'white',
                fontWeight: 600,
                paddingX: 4,
                paddingY: 1.5,
                '&:hover': {
                  backgroundColor: 'hsl(38 92% 45%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Apply for Admission
            </Button>
            <Button
              variant="outlined"
              size="large"
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
              Download Brochure
            </Button>
          </Box>
        </Paper>
      </Container>
    </ContactSection>
  );
};
