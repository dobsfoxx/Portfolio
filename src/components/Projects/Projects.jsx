import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "../ProjectCard/ProjectCard";

const arrowClasses ="absolute top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition hover:bg-yellow-600 ";

export default function Projects({ projects = [] }) {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="projects" className="w-full bg-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center">Projetos</h2>
        <p className="mt-2 text-gray-300 text-center">
          Uma seleção de projetos recentes. Clique para ver mais detalhes.
        </p>

        <div className="relative mt-10">
          
            <button
              type="button"
              onClick={scrollPrev}
              className={`${arrowClasses} -left-8 lg:-left-14`}
              aria-label="Projeto anterior"
            >
              <div aria-hidden="true" className="text-2xl leading-none">
                &#8249;
              </div>
            </button>
         

          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -mx-3">
              { projects.map((project, index) => (
                  <div
                    className="embla__slide px-3 flex-[0_0_100%] sm:flex-[0_0_75%] md:flex-[0_0_50%] "
                    key={project.slug ?? index}
                  >
                    <ProjectCard {...project} />
                  </div>
              )
              )}

            </div>
          </div>

          
            <button
              type="button"
              onClick={scrollNext}
              className={`${arrowClasses} -right-5 lg:-right-14`}
              aria-label="Próximo projeto"
            >
              <div aria-hidden="true" className="text-2xl leading-none">
                &#8250;
              </div>
            </button>
         
        </div>
      </div>
    </section>
  );
}
