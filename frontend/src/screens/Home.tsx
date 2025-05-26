import { useTranslation } from 'react-i18next';
import { OWNER_NAME } from '../constants/constants';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen p-6 flex flex-col justify-center items-center gap-8">
      <section className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">
          {t('home.greeting', { name: OWNER_NAME })}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t('home.intro')}
        </p>
      </section>

      <section className="w-full max-w-4xl grid md:grid-cols-2 gap-6 mt-12 h-8 cursor-pointer">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105
transition-transform duration-200">
          <h3 className="text-2xl font-semibold mb-2">{t('home.experience.title')}</h3>
          <p>{t('home.experience.description')}.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105
transition-transform duration-200">
          <h3 className="text-2xl font-semibold mb-2">{t('home.projects.title')}</h3>
          <p>{t('home.projects.description')}</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
