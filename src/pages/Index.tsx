import { Box } from '@mui/material';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Departments } from '@/components/Departments';
import { Admissions } from '@/components/Admissions';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <Admissions />
      <Achievements />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Index;
