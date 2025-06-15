const Footer = () => {
  return (
    <footer className="border-t py-4 px-6 text-center text-sm bg-gray-100 dark:bg-gray-800">
      &copy; {new Date().getFullYear()} QuickEats. All rights reserved.
    </footer>
  );
};

export default Footer;