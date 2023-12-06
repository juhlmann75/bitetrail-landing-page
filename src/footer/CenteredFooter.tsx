
import { FooterCopyright } from './FooterCopyright';

// eslint-disable-next-line unused-imports/no-unused-vars
const CenteredFooter = () => (
  <div className="text-center">
    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
