import React, { useEffect, useRef, useState } from 'react';
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
    tags: ['React Native', 'Healthy lifestyle']
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

  const trackRef = useRef<HTMLDivElement | null>(null);
  const cycleRef = useRef<HTMLDivElement | null>(null);
  const [cycleWidth, setCycleWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!cycleRef.current) return;
      const width = cycleRef.current.scrollWidth;
      setCycleWidth(width);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (cycleRef.current) ro.observe(cycleRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const speedPxPerSec = 80; // const speed; larger -> faster
  const durationSec = cycleWidth > 0 ? cycleWidth / speedPxPerSec : 20;

  return (
    <section id="real-projects" className="mt-20 overflow-x-hidden touch-pan-y overscroll-x-none">
      <div className="w-full max-w-5xl mx-auto overflow-hidden">
        <style>
          {`
            @keyframes marqueeScrollMeasured {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-1 * var(--cycle, 0px))); }
            }
          `}
        </style>
        <div
          ref={trackRef}
          className="flex gap-0 sm:gap-4 md:gap-6 will-change-transform"
          style={{
            ['--cycle' as any]: `${cycleWidth}px`,
            animation: cycleWidth ? `marqueeScrollMeasured ${durationSec}s linear infinite` : undefined,
          }}
        >
          <div ref={cycleRef} className="flex gap-0 sm:gap-4 md:gap-6">
            {projects.map((project) => {
              const href = project.appstore ? project.appstore : project.playstore ? project.playstore : project.website;
              const hasWebsite = Boolean(project.website);
              const content = <ProjectCard {...project} />;
              return (
                <div key={`${project.name}-a`} className="min-w-full sm:min-w-[60%] md:min-w-[33%] xl:min-w-[320px]">
                  <div className="mx-2 sm:mx-0">
                    {hasWebsite ? content : (
                      <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-0 sm:gap-4 md:gap-6" aria-hidden="true">
            {projects.map((project) => {
              const href = project.appstore ? project.appstore : project.playstore ? project.playstore : project.website;
              const hasWebsite = Boolean(project.website);
              const content = <ProjectCard {...project} />;
              return (
                <div key={`${project.name}-b`} className="min-w-full sm:min-w-[60%] md:min-w-[33%] xl:min-w-[320px]">
                  <div className="mx-2 sm:mx-0">
                    {hasWebsite ? content : (
                      <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
