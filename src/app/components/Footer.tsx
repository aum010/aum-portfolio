export default function Footer() {
  return (
    <footer className="w-full bg-background-light dark:bg-background-dark py-8 mt-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center text-secondary-light dark:text-secondary-dark">
        <p>© {new Date().getFullYear()} Om Bhushal. All rights reserved.</p>
        <p>
          Built with <span className="text-[#3895D3]">Next.js</span>, TailwindCSS & GSAP
        </p>
      </div>
    </footer>
  );
}