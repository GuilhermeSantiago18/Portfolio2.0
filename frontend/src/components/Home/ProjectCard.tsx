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
    <div>
    <h4 className="font-semibold text-lg mb-2  flex justify-center">{name}</h4>
    <div className="dark:bg-gray-800 rounded-lg flex flex-col">
      <img src={image} alt={name} className="w-72 max-h-128 object-contain rounded mb-4" />
      <div className="flex justify-around items-center">
        <a href={playstore} target="_blank" rel="noopener noreferrer">
          <img src={GOOGLE_PLAY_BADGE} alt="Google Play" className="w-30" />
        </a>
        <a href={appstore} target="_blank" rel="noopener noreferrer">
          <img src={APP_STORE_BADGE} alt="App Store" className="w-24" />
        </a>
      </div>
    </div>
        </div>
  );
};

export default ProjectCard;
