//
import { useThemeStore } from '../../stores/useThemeStore';
import { useTranslation } from 'react-i18next';

function ExperienceSection() {
  const { t } = useTranslation();
  const { primaryColor } = useThemeStore();

  const skillsWorked: string[] = [
    'React',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express',
    'NestJS',
    'React Query',
    'Redux',
    'Zustand',
    'Tailwind CSS',
    'Styled Components',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Docker',
    'CI/CD'
  ];

  return (
    <section id="experience" className="py-20">
      <div className="w-full max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-6">{t('home.skills.title')}</h3>
          <div className="flex flex-wrap gap-3">
            {skillsWorked.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 transition transform hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: primaryColor, boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
