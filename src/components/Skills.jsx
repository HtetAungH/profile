import AnimatedSection from "./AnimatedSection";
import Icons from "./Icons"; // Make sure this path is correct
import IconSkillMarquee from "./IconSkillMarquee"; // Import the new marquee
import darkVideo from "../assets/video/dark.mp4"; // Import the video

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
        {/* START: Background Section */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={darkVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        {/* END: Background Section */}
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
