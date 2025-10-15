import AnimatedSection from "./AnimatedSection";
import Icons from "./Icons"; // Make sure this path is correct
import IconSkillMarquee from "./IconSkillMarquee"; // Import the new marquee
import ElegantShape from "./ElegantShape"; // Import the shape component

const Skills = () => {
  // UPDATED: Skills data is now an array of objects with names and icons
  const developmentSkills = [
    { name: "React.js", icon: <Icons.ReactIcon /> },
    { name: "Vite", icon: <Icons.ViteIcon /> },
    { name: "JavaScript", icon: <Icons.JavaScriptIcon /> },
    { name: "TypeScript", icon: <Icons.TypeScriptIcon /> },
    { name: "Redux", icon: <Icons.ReduxIcon /> },
    { name: "Tailwind CSS", icon: <Icons.TailwindCssIcon /> },
    { name: "Node.js", icon: <Icons.NodeJsIcon /> },
    { name: "Firebase", icon: <Icons.FirebaseIcon /> },
    { name: "Git", icon: <Icons.GitIcon /> },
  ];

  return (
    <AnimatedSection id="skills">
      {/* UPDATED: Added relative positioning and background from About.jsx */}
      <section
        id="skills"
        className="py-24 overflow-hidden relative bg-[#030303]"
      >
        {/* START: BACKGROUND LAYERS from About.jsx */}
        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-fuchsia-500/[0.1]"
            className="left-[-5%] top-[10%]"
          />
          <ElegantShape
            delay={0.5}
            width={600}
            height={140}
            rotate={12}
            gradient="from-purple-500/[0.1]"
            className="right-[-10%] top-[60%]"
          />
        </div>
        {/* END: BACKGROUND LAYERS */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-white">My Tech Stack</h2>

          {/* NEW: Using the IconSkillMarquee */}
          <div className="space-y-8">
            <IconSkillMarquee
              skills={developmentSkills}
              speed={30}
              direction="left"
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;
