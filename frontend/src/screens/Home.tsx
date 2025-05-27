import React from 'react';
import { useTranslation } from 'react-i18next';
import { OWNER_NAME } from '../constants/constants';
import { useThemeStore } from '../stores/useThemeStore';
import ScrollTo from '../components/ScrollTo';
import Card from '../components/Home/Card';
import ProjectsSection from '../components/Home/ProjectSection';

interface CardData {
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const { primaryColor } = useThemeStore();
  const { t } = useTranslation();

  const cardKeys = ['experience', 'projects', 'guilherme_AI', 'contact'];

  const cardsData: CardData[] = cardKeys.map((key) => ({
    title: t(`home.${key}.title`),
    description: t(`home.${key}.description`),
  }));

  return (
    <main className="min-h-screen p-12 md:p-40 flex flex-col justify-start items-center gap-8">
      <section className="text-center max-w-3xl h-48">
        <h2 className="text-4xl font-bold mb-4">
          {t('home.greeting', { name: OWNER_NAME })}
        </h2>
        <p className="text-lg">{t('home.intro')}</p>
      </section>

      <section className="w-full max-w-4xl grid md:grid-cols-2 gap-6 mt-12">
        {cardsData.map(({ title, description }, index) => {
          const key = cardKeys[index];

          const cardContent = (
            <Card
              key={`${title}-${index}`}
              backgroundColor={primaryColor}
              title={title}
              description={description}
              onClick={() => console.log('Clicou')}
            />
          );

          const scrollMap: Record<string, string> = {
            projects: 'real-projects',
            guilherme_AI: 'guilherme-ai',
            contact: "contact",
            experieince: "experience"
          };

          if (scrollMap[key]) {
            return (
              <ScrollTo key={`${title}-${index}`} targetId={scrollMap[key]}>
                {cardContent}
              </ScrollTo>
            );
          }

          return cardContent;
        })}
      </section>

      {/* Seção dos projetos reais */}
      <ProjectsSection />
    </main>
  );
};

export default Home;
