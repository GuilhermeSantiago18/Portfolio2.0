import ExperienceLineChart from '../Chart/ExperienceLineChart';
import ExperiencePieChart from '../Chart/ExperiencePieChart';

function ExperienceSection() {
  return (
     <section id="experience" className="py-20">
    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="w-full max-w-md">
        <ExperiencePieChart />
      </div>
      <div className="w-full max-w-md">
        <ExperienceLineChart />
      </div>
    </div>
  </section>
  );
}

export default ExperienceSection;
