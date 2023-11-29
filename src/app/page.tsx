import Header from '@/components/common/Header';
import About from '@/components/sections/About';
import HealthFacilities from '@/components/sections/HealthFacilities';
import HeroSlide from '@/components/sections/HeroSlide';
import PopulateDoctor from '@/components/sections/PopulateDoctor';
import Service from '@/components/sections/Service';
import Specialized from '@/components/sections/Specialized';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='h-[60vh] bg-[#edfffa]'>
        <Header />
        <HeroSlide />
        <About />
        <Service />
        <Specialized />
        <HealthFacilities />
        <PopulateDoctor />
      </div>
    </div>
  );
}
