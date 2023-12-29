import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Welcome to '}
            <span className="text-primary-500">Bitetrail</span>
            {'\nYour Personal Dining Diary!\n'}
          </>
        }
        description=""
        button={
          <Link href="https://apps.apple.com/us/app/bitetrail/id6460586415?itsct=apps_box_badge&amp;itscg=30200">
            <img
              className="m-auto w-[250px] h-[83px]"
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1703030400"
              alt="Download on the App Store"
            />
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
