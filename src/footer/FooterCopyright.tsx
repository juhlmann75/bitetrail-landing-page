const FooterCopyright = () => (
  <div className="footer-copyright">
    Made with <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
