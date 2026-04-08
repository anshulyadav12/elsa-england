import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition, Disclosure } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
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
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <X className="block h-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="absolute top-16 left-0 w-full bg-primary border-t border-blue-800 shadow-xl overflow-y-auto max-h-[calc(100vh-64px)] lg:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          item.children ? (
                            <Disclosure key={item.name}>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-accent">
                                    {item.name}
                                    <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="pl-6 space-y-1">
                                    {item.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        to={child.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-blue-200 hover:text-accent"
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ) : (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-accent"
                            >
                              {item.name}
                            </Link>
                          )
                        ))}
                        <Link
                          to="/membership"
                          className="block px-3 py-2 rounded-md text-base font-bold bg-accent text-primary text-center mt-4"
                        >
                          Join PTA
                        </Link>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
