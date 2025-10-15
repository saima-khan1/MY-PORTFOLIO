const Footer = () => {
  return (
    <footer className="bg-amber-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-t border-gray-300 dark:border-gray-700 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Saima Khan</span>. All rights
          reserved.
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
