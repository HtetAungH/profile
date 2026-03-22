const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-zinc-500 text-sm">
          © {currentYear}{" "}
          <a
            href="#home"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
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
