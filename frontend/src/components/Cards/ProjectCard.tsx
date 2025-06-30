import React from 'react';
import { APP_STORE_BADGE, GOOGLE_PLAY_BADGE } from '../../constants/constants';
import StoreBadge from '../Badges/StoreBadge';
import { ActionButton } from '../Buttons/ActionButton';



interface ProjectCardProps {
  name: string;
  image: string;
  playstore?: string;
  appstore?: string;
  website?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  playstore,
  appstore,
  website
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col justify-between border border-gray-200 dark:border-gray-700 transition hover:scale-105 cursor-pointer md:h-[360px]">
      <h4 className="font-semibold text-xl text-center mb-4 text-black dark:text-white">{name}</h4>

      <img
        src={image}
        alt={name}
        className="w-full max-h-60 object-contain rounded-xl mb-4 bg-white p-2"
      />

      <div className="flex gap-4 justify-center items-center">
        {website ? (
          <ActionButton
            href={website}        />
        ) : (
          <>
            {playstore && (
              <StoreBadge
                href={playstore}
                src={GOOGLE_PLAY_BADGE}
                alt="Google Play"
                className='w-34'
              />
            )}
            {appstore && (
              <StoreBadge
                href={appstore}
                src={APP_STORE_BADGE}
                alt="App Store"
                className='w-28'
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
