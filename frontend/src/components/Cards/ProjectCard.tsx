import React from 'react';
import { APP_STORE_BADGE, GOOGLE_PLAY_BADGE } from '../../constants/constants';

interface ProjectCardProps {
  name: string;
  image: string;
  playstore?: string;
  appstore?: string;
  website?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, playstore, appstore, website }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col items-center border border-gray-200 dark:border-gray-700 transition hover:shadow-xl">
      <h4 className="font-semibold text-xl text-center mb-4 text-black">{name}</h4>

      <img
        src={image}
        alt={name}
        className="w-full max-h-60 object-contain rounded-xl mb-4 bg-white p-2"
      />

      <div className="flex gap-4 justify-center items-center">
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Acessar Site
            </button>
          </a>
        ) : (
          <>
            {playstore && (
              <a href={playstore} target="_blank" rel="noopener noreferrer">
                <img
                  src={GOOGLE_PLAY_BADGE}
                  alt="Google Play"
                  className="w-32 hover:scale-105 transition"
                />
              </a>
            )}
            {appstore && (
              <a href={appstore} target="_blank" rel="noopener noreferrer">
                <img
                  src={APP_STORE_BADGE}
                  alt="App Store"
                  className="w-26 hover:scale-105 transition mr-2"
                />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
