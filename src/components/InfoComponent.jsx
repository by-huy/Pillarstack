import Image from 'next/image';
import Clipboard from '@/components/Clipboard';

/**
 * Renders the info component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.infoData - The data for the info component.
 * @returns {JSX.Element} The rendered info component.
 */
function InfoComponent({ infoData }) {
  return (
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12">
      <div className="text-display col-span-4">
        <h1 className="mb-8 lg:pl-8">
          {infoData.title.main}&nbsp;
          <span className="text-light-gray">{infoData.title.sub}</span>
        </h1>
      </div>
      <div className=" col-start-6 col-span-5 max-w-xl lg:max-w-none text-h5 md:text-h4 leading-[130%] text-light-gray font-medium space-y-7">
        <p className="space-y-8 flex flex-col">
          <span>{infoData.description[0]}</span>
          <span>{infoData.description[1]}</span>
          <span>
            {infoData.title.main == 'About' ? '' : infoData.description[2]}
          </span>
        </p>
        <div className="flex items-center gap-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              className=" scale-150"
              src="/images/profile.webp"
              width={40}
              height={40}
              alt="profile headshot of Huy Nguyen "
            />
          </div>
          <div className="text-primary text-base xl:text-h6 2xl:text-h5 font-medium flex flex-col">
            <p className=" leading-tight">Huy Nguyen</p>
            <Clipboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoComponent;
