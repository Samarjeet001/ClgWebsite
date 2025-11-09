import { Box, Container, Typography, Paper, Stepper, Step, StepLabel, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AdmissionsSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: 'hsl(var(--background))',
}));

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  borderLeft: '4px solid hsl(var(--gold))',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
  },
}));

const steps = ['Fill Application', 'Entrance Test', 'Document Verification', 'Fee Payment', 'Admission Confirmed'];

const admissionInfo = [
  {
    title: 'Eligibility Criteria',
    points: [
      'Passed 10+2 with Physics, Chemistry, and Mathematics',
      'Minimum 45% marks in qualifying examination (40% for reserved categories)',
      'Valid score in MHT-CET / JEE Main',
      'Age limit as per state government norms',
    ],
  },
  {
    title: 'Important Documents',
    points: [
      '10th & 12th Mark Sheets and Certificates',
      'MHT-CET / JEE Main Score Card',
      'Caste Certificate (if applicable)',
      'Domicile Certificate',
      'Passport size photographs',
      'Aadhar Card',
    ],
  },
  {
    title: 'Admission Process',
    points: [
      'Online Application Submission',
      'Entrance Test Score Submission',
      'Merit List Publication',
      'Counseling and Seat Allocation',
      'Document Verification',
      'Fee Payment and Admission Confirmation',
    ],
  },
];

export const Admissions = () => {
  return (
    <AdmissionsSection id="admissions">
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
            Admissions 2025-26
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Begin your engineering journey with us
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{
            padding: { xs: 3, md: 5 },
            mb: 6,
            backgroundColor: 'hsl(var(--primary))',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <SchoolIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" gutterBottom fontWeight={700}>
            Admissions Now Open!
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.95 }}>
            Apply now for B.Tech programs in 8 engineering branches
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'hsl(var(--gold))',
              color: 'white',
              fontWeight: 600,
              paddingX: 4,
              paddingY: 1.5,
              mt: 2,
              '&:hover': {
                backgroundColor: 'hsl(38 92% 45%)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Apply Online Now
          </Button>
        </Paper>

        <Box mb={8}>
          <Typography variant="h4" gutterBottom fontWeight={700} color="primary" textAlign="center" mb={4}>
            Admission Process
          </Typography>
          <Paper elevation={2} sx={{ padding: 4 }}>
            <Stepper activeStep={-1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {admissionInfo.map((info, index) => (
            <InfoCard elevation={2} key={index}>
              <Typography variant="h5" gutterBottom fontWeight={700} color="primary">
                {info.title}
              </Typography>
              <Box>
                {info.points.map((point, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'hsl(var(--gold))', fontSize: 20, mt: 0.3 }} />
                    <Typography variant="body2">{point}</Typography>
                  </Box>
                ))}
              </Box>
            </InfoCard>
          ))}
        </Box>

        <Paper
          elevation={3}
          sx={{
            padding: { xs: 3, md: 4 },
            mt: 6,
            backgroundColor: 'hsl(var(--secondary))',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight={700} color="primary">
            Need Help with Admissions?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Our admission team is here to guide you through the process
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 3 }}>
            <Button variant="contained" color="primary" startIcon={<AssignmentIcon />}>
              Download Prospectus
            </Button>
            <Button variant="outlined" color="primary" startIcon={<PaymentIcon />}>
              Fee Structure
            </Button>
          </Box>
        </Paper>
      </Container>
    </AdmissionsSection>
  );
};
