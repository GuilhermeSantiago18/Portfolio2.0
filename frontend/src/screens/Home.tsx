import { useTranslation } from 'react-i18next';
import { OWNER_NAME } from '../constants/constants';
import { useThemeStore } from '../stores/useThemeStore';
import ScrollTo from '../components/ScrollTo';

const Home = () => {
    const {primaryColor} = useThemeStore()
  const { t } = useTranslation();

  return (
    <main className="min-h-screen p-10 md:p-50 flex flex-col justify-start items-center gap-8">
      <section className="text-center max-w-3xl h-40">
        <h2 className="text-4xl font-bold mb-4">
          {t('home.greeting', { name: OWNER_NAME })}
        </h2>
        <p className="text-lg">
          {t('home.intro')}
        </p>
      </section>

      <section className="w-full max-w-4xl grid md:grid-cols-2 gap-6 mt-12 h-8 cursor-pointer">
        <ScrollTo targetId='guilherme-ai'>
        <div style={{backgroundColor: primaryColor}} className="dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105
transition-transform duration-200">
          <h3 className="text-2xl font-semibold mb-2">{t('home.experience.title')}</h3>
          <p>{t('home.experience.description')}.</p>
        </div>
        </ScrollTo>

        <div style={{backgroundColor: primaryColor}} className="dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105
transition-transform duration-200 h-40">
          <h3 className="text-2xl font-semibold mb-2">{t('home.projects.title')}</h3>
          <p>{t('home.projects.description')}</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
