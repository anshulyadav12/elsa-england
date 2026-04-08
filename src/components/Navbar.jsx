import React, { Fragment, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Transition, Dialog } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      children: [
        { name: 'About & Board', href: '/about' },
        { name: 'Why Join', href: '/why-join' },
      ],
    },
    { name: 'Events', href: '/events' },
    {
      name: 'Programs',
      children: [
        { name: 'All Programs', href: '/programs' },
        { name: 'Yearbook', href: '/programs/yearbook' },
        { name: 'School Supplies', href: '/programs/school-supplies' },
        { name: 'Watch D.O.G.S.', href: '/programs/watchdogs' },
      ],
    },
    {
      name: 'Get Involved',
      children: [
        { name: 'Overview', href: '/get-involved' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Forms & Resources', href: '/forms' },
      ],
    },
    { name: 'Membership', href: '/membership' },
    { name: 'Store', href: '/store' },
    { name: 'Sponsors', href: '/sponsors' },
  ];

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold flex items-center gap-2 tracking-tight">
              <span className="text-2xl">🏫</span>
              <span>Elsa England PTA</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              item.children ? (
                <Menu as="div" key={item.name} className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="px-3 py-2 rounded-md text-sm font-medium hover:text-accent flex items-center gap-1 transition-colors">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Menu.Item key={child.name}>
                            {({ active }) => (
                              <Link
                                to={child.href}
                                className={`${
                                  active ? 'bg-gray-100 text-primary' : 'text-gray-700'
                                } block px-4 py-2 text-sm transition-colors`}
                              >
                                {child.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            
            <Link
              to="/membership"
              className="ml-4 bg-accent hover:bg-opacity-90 text-primary px-4 py-2 rounded-md text-sm font-bold transition-all shadow-md transform hover:scale-105"
            >
              Join PTA
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="block h-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-over */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 text-xl font-bold flex items-center gap-2">
              <span className="text-2xl">🏫</span>
              <span>Elsa England PTA</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-blue-800">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-1">
                        <div className="px-3 py-2 text-base font-semibold text-accent uppercase tracking-wider">
                          {item.name}
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block rounded-lg px-6 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/membership"
                  className="block rounded-lg px-3 py-2.5 text-base font-bold leading-7 bg-accent text-primary text-center"
                >
                  Join PTA
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default Navbar;
