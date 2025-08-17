import React from 'react';
import ProjectCard from '../Cards/ProjectCard';


//THE BACKEND WILL BRING THIS INFOS
const projects = [
  {
    name: 'Jazmin Chebar',
    image: '/assets/JazminChebar.png',
    playstore: 'https://play.google.com/store/apps/details?id=ar.com.jazminchebar.app&hl=pt_BR&pli=1',
    appstore: 'https://apps.apple.com/br/app/jazmin-chebar/id6444320645',
    tags: ['React Native', 'E-commerce', 'LATAM']
  },
  {
    name: 'Bembos',
    image: '/assets/Bembos.png',
    playstore: 'https://play.google.com/store/apps/details?id=com.osp.projects.bembos&hl=pt_BR',
    appstore: 'https://apps.apple.com/pe/app/bembos/id952866349',
    tags: ['React Native', 'Food', 'Delivery']
  },
  {
    name: 'MasBien',
    image: '/assets/MasBien.png',
    playstore: 'https://play.google.com/store/apps/details?id=com.masbienv2.app',
    appstore: 'https://play.google.com/store/apps/details?id=com.masbienv2.app',
    tags: ['React Native', 'Real Estate']
  },
   {
    name: 'Urupago',
    image: '/assets/Urupago.png',
    website: 'https://urupago.com.uy/',
    tags: ['Web', 'Fintech']
  },
    {
    name: 'Goold-Booking',
    image: '/assets/Booking.png',
    website: 'https://goold-booking.up.railway.app',
    tags: ['Web', 'Node.js', 'React']
  },
];

const ProjectsSection: React.FC = () => {
//   const { t } = useTranslation();

  return (
    <section id="real-projects" className="mt-20">
      <div className="w-full max-w-5xl mx-auto overflow-hidden">
        <style>
          {`
            @keyframes marqueeScroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}
        </style>
        <div
          className="flex gap-6"
          style={{
            width: '200%',
            animation: 'marqueeScroll 40s linear infinite'
          }}
        >
          {[...projects, ...projects].map((project, idx) => {
            const href = project.appstore ? project.appstore : project.playstore ? project.playstore : project.website;
            const hasWebsite = Boolean(project.website);
            const content = <ProjectCard {...project} />;
            return (
              <div key={`${project.name}-${idx}`} className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px]">
                {hasWebsite ? (
                  content
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
