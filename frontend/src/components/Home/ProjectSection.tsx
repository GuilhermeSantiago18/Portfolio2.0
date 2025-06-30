import React from 'react';
import ProjectCard from '../Cards/ProjectCard';


//THE BACKEND WILL BRING THIS INFOS
const projects = [
  {
    name: 'Jazmin Chebar',
    image: '/assets/JazminChebar.png',
    playstore: 'https://play.google.com/store/apps/details?id=ar.com.jazminchebar.app&hl=pt_BR&pli=1',
    appstore: 'https://apps.apple.com/br/app/jazmin-chebar/id6444320645',
  },
  {
    name: 'Bembos',
    image: '/assets/Bembos.png',
    playstore: 'https://play.google.com/store/apps/details?id=com.osp.projects.bembos&hl=pt_BR',
    appstore: 'https://apps.apple.com/pe/app/bembos/id952866349',
  },
  {
    name: 'MasBien',
    image: '/assets/MasBien.png',
    playstore: 'https://play.google.com/store/apps/details?id=com.masbienv2.app',
    appstore: 'https://play.google.com/store/apps/details?id=com.masbienv2.app',
  },
   {
    name: 'Urupago',
    image: '/assets/Urupago.png',
    website: 'https://urupago.com.uy/'
  },
    {
    name: 'Booking',
    image: '/assets/Booking.png',
    website: 'https://goold-booking.up.railway.app'
  },
];

const ProjectsSection: React.FC = () => {
//   const { t } = useTranslation();

  return (
    <section id="real-projects" className="mt-20">
      <div className="w-full max-w-4xl grid gap-6 grid mt-6 md:grid-cols-4 gap-4">
        {projects.map((project) => (
          <a href={project.appstore ? project.appstore : project.playstore ? project.playstore : project.website} target="_blank">
          <ProjectCard key={project.name} {...project} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
