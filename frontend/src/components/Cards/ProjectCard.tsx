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
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  playstore,
  appstore,
  website,
  tags = []
}) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-3 sm:p-4 flex flex-col justify-between border border-gray-200 dark:border-gray-700 transition hover:shadow-xl cursor-pointer md:h-[360px]">
      <h4 className="font-semibold text-base sm:text-lg text-center mb-2 sm:mb-3 text-black dark:text-white">{name}</h4>

      <img
        src={image}
        alt={name}
        className="w-full max-h-40 sm:max-h-52 object-contain rounded-xl mb-2 sm:mb-3 bg-white p-1 sm:p-2"
      />

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-2 sm:mb-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      )}

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
