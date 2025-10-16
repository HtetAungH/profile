const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-400">
        <p>
          &copy; {currentYear}{" "}
          <a
            href="#home"
            className="font-semibold text-slate-300 hover:text-amber-400 transition-colors"
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
