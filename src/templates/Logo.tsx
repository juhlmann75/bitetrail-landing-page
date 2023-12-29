import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        className={'w-10 mr-2.5'}
        src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/1b/77/44/1b774415-e22a-b043-a432-6b9cee3d25f8/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/540x540bb.jpg"
        alt="Bitetrail"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
