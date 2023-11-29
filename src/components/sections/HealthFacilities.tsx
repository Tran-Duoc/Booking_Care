'use client';
import React from 'react';
import Wrapper from '../common/Wrapper';
import ContentSection from '../common/ContentSection';
import Slider from '../common/Slider';

interface IHealthFacilities {
  imagePath: string;
  title: string;
  href: string;
}

const HealthFacilitiesData: IHealthFacilities[] = [
  {
    imagePath: '/images/lo-go-viet-duc.jpg',
    title: 'Bệnh viện Hữu nghị Việt Đức',
    href: 'co-so-y-te/benh-vien-huu-nghi-viet-duc-p58',
  },
  {
    imagePath: '/images/logo-bvcr-moi.jpg',
    title: 'Bệnh viện Chợ Rẫy',
    href: 'co-so-y-te/benh-vien-cho-ray-p141',
  },
  {
    imagePath: '/images/doctor-check.jpg',
    title: 'Trung tâm Tiêu hóa Doctor Check',
    href: 'co-so-y-te/trung-tam-tieu-hoa-doctor-check-p450',
  },
  {
    imagePath: '/images/logo-y-duoc-1.jpg',
    title: 'Phòng khám Bệnh viện Đại học Y Dược 1',
    href: 'co-so-y-te/phong-kham-benh-vien-dai-hoc-y-duoc-1-p154',
  },
  {
    imagePath: '/images/logobenhvien108.jpg',
    title: 'Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108',
    href: 'co-so-y-te/trung-tam-kham-suc-khoe-dinh-ky-benh-vien-trung-uong-quan-doi-108-p75',
  },
  {
    imagePath: '/images/logo-hung-viet.jpg',
    title: 'Bệnh viện Ung bướu Hưng Việt',
    href: 'co-so-y-te/benh-vien-ung-buou-hung-viet-p137',
  },
];

const HealthFacilities = () => {
  return (
    <Wrapper className=' py-10'>
      <ContentSection title='Cơ sở y tế' moreInfo>
        <Slider data={HealthFacilitiesData} />
      </ContentSection>
    </Wrapper>
  );
};

export default HealthFacilities;
