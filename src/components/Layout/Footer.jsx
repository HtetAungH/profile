const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-950 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-zinc-500 text-sm">
        <p>
          &copy; {currentYear}{" "}
          <a
            href="#home"
            className="font-semibold text-zinc-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Htet Aung Hlaing
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
