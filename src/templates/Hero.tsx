import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
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
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
