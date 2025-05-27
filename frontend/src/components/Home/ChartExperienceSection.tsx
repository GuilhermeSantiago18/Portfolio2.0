import ExperienceLineChart from '../Chart/ExperienceLineChart';
import ExperiencePieChart from '../Chart/ExperiencePieChart';

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 max-w mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <ExperiencePieChart />
        <ExperienceLineChart />
      </div>
    </section>
  );
}

export default ExperienceSection;
