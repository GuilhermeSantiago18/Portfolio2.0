import React from 'react';
import { APP_STORE_BADGE, GOOGLE_PLAY_BADGE } from '../../constants/constants';

interface ProjectCardProps {
  name: string;
  image: string;
  playstore: string;
  appstore: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, playstore, appstore }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col items-center border border-gray-200 dark:border-gray-700 transition hover:shadow-xl">
      <h4 className="font-semibold text-xl text-center mb-4 text-black">{name}</h4>

      <img
        src={image}
        alt={name}
        className="w-full max-h-60 object-contain rounded-xl mb-4 bg-white p-2"
      />

      <div className="flex gap-4 justify-center align-center">
        <a href={playstore} target="_blank" rel="noopener noreferrer">
          <img
            src={GOOGLE_PLAY_BADGE}
            alt="Google Play"
            className="w-32 hover:scale-105 transition"
          />
        </a>
        <a href={appstore} target="_blank" rel="noopener noreferrer">
          <img
            src={APP_STORE_BADGE}
            alt="App Store"
            className="w-32 hover:scale-105 transition"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
