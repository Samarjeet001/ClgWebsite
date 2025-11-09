import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const AchievementsSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: 'hsl(var(--background))',
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  transition: 'all 0.3s ease',
  border: '2px solid hsl(var(--border))',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    borderColor: 'hsl(var(--primary))',
  },
}));

const NewsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  borderLeft: '4px solid hsl(var(--primary))',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
    transform: 'translateX(8px)',
  },
}));

const stats = [
  { icon: <TrendingUpIcon sx={{ fontSize: 50, color: 'hsl(var(--primary))' }} />, value: '95%', label: 'Placement Rate' },
  { icon: <WorkIcon sx={{ fontSize: 50, color: 'hsl(var(--gold))' }} />, value: '100+', label: 'Top Companies' },
  { icon: <EmojiEventsIcon sx={{ fontSize: 50, color: 'hsl(var(--primary))' }} />, value: '₹12 LPA', label: 'Highest Package' },
  { icon: <StarIcon sx={{ fontSize: 50, color: 'hsl(var(--gold))' }} />, value: '40+', label: 'Years of Excellence' },
];

const news = [
  {
    date: 'March 2025',
    title: 'NAAC A Accreditation Achieved',
    description: 'College receives prestigious NAAC A accreditation for academic excellence.',
    category: 'Achievement',
  },
  {
    date: 'February 2025',
    title: 'Students Win National Hackathon',
    description: 'DYPCET team secures first place in Smart India Hackathon 2025.',
    category: 'Competition',
  },
  {
    date: 'January 2025',
    title: 'MoU with Tech Giants',
    description: 'Partnerships signed with leading IT companies for training and placements.',
    category: 'Partnership',
  },
  {
    date: 'December 2024',
    title: 'Research Paper Published',
    description: 'Faculty and students publish research in IEEE international journal.',
    category: 'Research',
  },
];

export const Achievements = () => {
  return (
    <AchievementsSection id="achievements">
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
            Achievements & Highlights
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Excellence in academics, placements, and research
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 8 }}>
          {stats.map((stat, index) => (
            <StatCard elevation={2} key={index}>
              <Box mb={2}>{stat.icon}</Box>
              <Typography variant="h3" fontWeight={700} color="primary" gutterBottom>
                {stat.value}
              </Typography>
              <Typography variant="body1" color="text.secondary" fontWeight={500}>
                {stat.label}
              </Typography>
            </StatCard>
          ))}
        </Box>

        <Box mb={4}>
          <Typography variant="h4" gutterBottom fontWeight={700} color="primary">
            Latest News & Events
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
          {news.map((item, index) => (
            <NewsCard elevation={2} key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Chip
                  label={item.category}
                  size="small"
                  sx={{
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  {item.date}
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </NewsCard>
          ))}
        </Box>
      </Container>
    </AchievementsSection>
  );
};
