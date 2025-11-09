import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import ComputerIcon from '@mui/icons-material/Computer';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MemoryIcon from '@mui/icons-material/Memory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BuildIcon from '@mui/icons-material/Build';
import ScienceIcon from '@mui/icons-material/Science';

const DepartmentsSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: 'hsl(var(--secondary))',
}));

const DepartmentCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease',
  border: '1px solid hsl(var(--border))',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
    borderColor: 'hsl(var(--primary))',
    '& .department-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      color: 'hsl(var(--gold))',
    },
  },
}));

const departments = [
  {
    icon: <ComputerIcon className="department-icon" sx={{ fontSize: 50 }} />,
    name: 'Computer Science & Engineering',
    intake: 120,
    highlights: ['AI & ML', 'Data Science', 'Cloud Computing', 'Cybersecurity'],
  },
  {
    icon: <MemoryIcon className="department-icon" sx={{ fontSize: 50 }} />,
    name: 'Electronics & Telecommunication',
    intake: 60,
    highlights: ['IoT', 'VLSI Design', 'Embedded Systems', '5G Technology'],
  },
  {
    icon: <ElectricalServicesIcon className="department-icon" sx={{ fontSize: 50 }} />,
    name: 'Electrical Engineering',
    intake: 60,
    highlights: ['Power Systems', 'Renewable Energy', 'Automation', 'EV Technology'],
  },
  {
    icon: <PrecisionManufacturingIcon className="department-icon" sx={{ fontSize: 50 }} />,
    name: 'Mechanical Engineering',
    intake: 120,
    highlights: ['CAD/CAM', 'Robotics', 'Thermal Engineering', 'Manufacturing'],
  },
  {
    icon: <AccountBalanceIcon className="department-icon" sx={{ fontSize: 50 }} />,
    name: 'Civil Engineering',
    intake: 60,
    highlights: ['Structural Design', 'Smart Cities', 'Geotechnical', 'Water Resources'],
  },
  {
    icon: <EngineeringIcon className="department-icon" sx={{ fontSize: 50 }} />,
    name: 'Information Technology',
    intake: 60,
    highlights: ['Web Development', 'Mobile Apps', 'DevOps', 'Blockchain'],
  },
  {
    icon: <BuildIcon className="department-icon" sx={{ fontSize: 50 }} />,
    name: 'Instrumentation & Control',
    intake: 30,
    highlights: ['Process Control', 'Sensors', 'Automation', 'Industry 4.0'],
  },
  {
    icon: <ScienceIcon className="department-icon" sx={{ fontSize: 50 }} />,
    name: 'Chemical Engineering',
    intake: 30,
    highlights: ['Process Engineering', 'Petrochemicals', 'Biochemical', 'Green Tech'],
  },
];

export const Departments = () => {
  return (
    <DepartmentsSection id="departments">
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
            Departments & Programs
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', margin: '0 auto' }}
          >
            World-class engineering programs with industry-aligned curriculum
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
          {departments.map((dept, index) => (
            <DepartmentCard elevation={2} key={index}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                    color: 'hsl(var(--primary))',
                  }}
                >
                  {dept.icon}
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  fontWeight={600}
                  textAlign="center"
                  sx={{ minHeight: '48px' }}
                >
                  {dept.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  mb={2}
                  fontWeight={600}
                >
                  Intake: {dept.intake} Students
                </Typography>
                <Box>
                  {dept.highlights.map((highlight, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{
                        fontSize: '0.85rem',
                        padding: '4px 8px',
                        backgroundColor: 'hsl(var(--muted))',
                        borderRadius: '4px',
                        marginBottom: '4px',
                        textAlign: 'center',
                      }}
                    >
                      • {highlight}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </DepartmentCard>
          ))}
        </Box>
      </Container>
    </DepartmentsSection>
  );
};
