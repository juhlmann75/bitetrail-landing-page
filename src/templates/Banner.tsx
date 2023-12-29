import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Embark on a flavorful journey and make every dining experience memorable. Whether you're exploring new spots in your city or traveling the world, Bitetrail is your trusted companion on every food adventure."
      subtitle="Join the Bitetrail Community!"
      button={
        <Link href="https://apps.apple.com/us/app/bitetrail/id6460586415?itsct=apps_box_badge&amp;itscg=30200">
          <img
            className="m-auto w-[500px]"
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1703030400"
            alt="Download on the App Store"
          />
        </Link>
      }
    />
  </Section>
);

export { Banner };
