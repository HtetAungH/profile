// src/components/Footer.jsx

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // UPDATED className for glass footer
    <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-400">
        <p>&copy; {currentYear} Htet Aung Hlaing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
