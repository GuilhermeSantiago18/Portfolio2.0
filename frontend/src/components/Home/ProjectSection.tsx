"use client"

import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ProjectCard from "../Cards/ProjectCard"
import { useTranslation } from "react-i18next"

//THE BACKEND WILL BRING THIS INFOS
const projects = [
  {
    name: "Jazmin Chebar",
    image: "/assets/JazminChebar.png",
    playstore:
      "https://play.google.com/store/apps/details?id=ar.com.jazminchebar.app&hl=pt_BR&pli=1",
    appstore: "https://apps.apple.com/br/app/jazmin-chebar/id6444320645",
    tags: ["React Native", "E-commerce", "LATAM"],
  },
  {
    name: "Bembos",
    image: "/assets/Bembos.png",
    playstore:
      "https://play.google.com/store/apps/details?id=com.osp.projects.bembos&hl=pt_BR",
    appstore: "https://apps.apple.com/pe/app/bembos/id952866349",
    tags: ["React Native", "Food", "Delivery"],
  },
  {
    name: "MasBien",
    image: "/assets/MasBien.png",
    playstore: "https://play.google.com/store/apps/details?id=com.masbienv2.app",
    appstore: "https://play.google.com/store/apps/details?id=com.masbienv2.app",
    tags: ["React Native", "Nodejs", "Healthy"],
  },
  {
    name: "Urupago",
    image: "/assets/Urupago.png",
    website: "https://urupago.com.uy/",
    tags: ["Angular", "Fintech"],
  },
  {
    name: "Goold-Booking",
    image: "/assets/Booking.png",
    website: "https://goold-booking.up.railway.app",
    tags: ["Next", "Node.js"],
  },
]

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation()
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      drag: false,
      defaultAnimation: { duration: 0 },
      slides: {
        perView: 1.1,
        spacing: 12,
      },
      breakpoints: {
        "(min-width: 640px)": { slides: { perView: 2.1, spacing: 16 } },
        "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
      },
    },
    [
      (slider) => {
        let raf = 0
        let lastTime = 0
        const computeSpeed = () => (window.innerWidth < 640 ? 0.0003 : 0.00008)
        let speed = computeSpeed()

        const step = (time: number) => {
          if (!lastTime) lastTime = time
          const dt = time - lastTime
          lastTime = time

          const track = slider.track
          const max = track.details.max
          let pos = track.details.position + dt * speed
          if (pos >= max) pos -= max
          track.to(pos)

          raf = requestAnimationFrame(step)
        }

        const handleResize = () => {
          speed = computeSpeed()
        }

        slider.on("created", () => {
          window.addEventListener("resize", handleResize)
          raf = requestAnimationFrame(step)
        })
        slider.on("destroyed", () => {
          if (raf) cancelAnimationFrame(raf)
          raf = 0
          lastTime = 0
          window.removeEventListener("resize", handleResize)
        })
        slider.on("updated", () => {
          // reinicia o loop para refletir novos tamanhos
          speed = computeSpeed()
          if (raf) cancelAnimationFrame(raf)
          lastTime = 0
          raf = requestAnimationFrame(step)
        })
      },
    ]
  )

  return (
    <section id="real-projects" className="mt-10 w-[100%] md:w-4xl ">
      <div className="max-w-5xl mx-auto mb-6">
        <h3 className="text-2xl font-bold text-start">
          {t("home.projects.carousel_title")}
        </h3>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {projects.map((project, idx) => {
          const content = <ProjectCard {...project} />

          return (
            <div key={idx} className="keen-slider__slide">
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
