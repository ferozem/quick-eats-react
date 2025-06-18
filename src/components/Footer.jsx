const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8 px-4 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">QuickEats</h4>
          <p>Your favorite food, delivered fast and fresh.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © 2025 QuickEats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
