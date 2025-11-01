import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "UX/UI Design",
    description: "User Experience & Interface Projects",
    link: "#",
    imageSrc: "/images/project1.webp",
    id: "ux",
  },
  {
    title: "Product Design",
    description: "Physical & Digital Products",
    link: "#",
    imageSrc: "/images/project2.webp",
    id: "product",
  },
  {
    title: "Data Science",
    description: "Data Analytics & Visualization",
    link: "#",
    imageSrc: "/images/project3.webp",
    id: "data",
  },
  {
    title: "Digital Art",
    description: "Illustrations & Digital Artworks",
    link: "#",
    imageSrc: "/images/project4.webp",
    id: "art",
  },
];

export default function Home() {
  return (
    <>
      <main className="pt-24">
        <Hero />

        <section className="p-6 space-y-12 max-w-7xl mx-auto">
          {projects.map((proj) => (
            <div key={proj.id} id={proj.id}>
              <h2 className="text-4xl font-bold text-[#3895D3] mb-6">{proj.title}</h2>
              <ProjectCard
                title={proj.title}
                description={proj.description}
                link={proj.link}
                imageSrc={proj.imageSrc}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
