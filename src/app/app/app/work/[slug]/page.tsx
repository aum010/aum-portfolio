// app/work/[slug]/page.tsx
"use client";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  // In real app you'd fetch data by slug from JSON/CMS
  return (
    <div className="px-6 md:px-24 py-12">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
        <h1 className="text-4xl font-bold capitalize">{slug.replace("-", " ")}</h1>
        <p className="mt-4 text-secondary-dark dark:text-secondary-light">Project overview and role...</p>

        <section className="mt-12 space-y-8">
          <div className="rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-accent/10 to-accent/5" />
          <div>
            <h3 className="text-2xl font-semibold">Challenge</h3>
            <p className="text-secondary-dark dark:text-secondary-light mt-2">Describe the problem here...</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Solution</h3>
            <p className="text-secondary-dark dark:text-secondary-light mt-2">Explain approach, results, metrics...</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}