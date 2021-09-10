import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, ArrowDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { socialLinks, navigation } from '../constants/data';

function classNames(...classes) {
   return classes.filter(Boolean).join(' ');
}

export default function Example() {
   const { theme, setTheme } = useTheme();

   return (
      <Disclosure as="header" className="relative bg-white dark:bg-gray-800">
         {({ open }) => (
            <>
               <div className="max-w-6xl mx-auto px-2 py-10 md:px-6 lg:px-8">
                  <div className="relative flex items-center justify-between h-16">
                     <div className="flex items-center md:hidden">
                        <Disclosure.Button className="inline-flex items-center rounded-md justify-center p-2 text-gray-400 hover:ring-2 focus:outline-none focus:ring-2 focus:ring-inset">
                           <span className="sr-only">Open main menu</span>
                           {open ? (
                              <XIcon className="block h-6 w-6" aria-hidden="true" />
                           ) : (
                              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                           )}
                        </Disclosure.Button>
                     </div>
                     <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex-shrink-0 flex flex-col">
                           <Link href="/">
                              <a className="text-center md:text-left">
                                 <h1 className="text-sm font-semibold md:text-base dark:text-gray-100">Andrew Herchykov</h1>
                                 <p className="text-sm font-light md:text-base text-gray-500 dark:text-gray-300">Frontend Dev</p>
                              </a>
                           </Link>
                        </div>
                        <div className="hidden items-center md:flex md:ml-8">
                           <div className="flex space-x-4">
                              {navigation.map(item => (
                                 <Link key={item.name} href={item.href}>
                                    <a
                                       className={classNames(
                                          item.current
                                             ? 'text-gray-800 font-bold dark:text-gray-400'
                                             : 'text-gray-600 font-normal dark:text-gray-300',
                                          'text-base',
                                       )}
                                       aria-current={item.current ? 'page' : undefined}>
                                       {item.name + ' '}
                                       {item.current && (
                                          <ArrowDownIcon
                                             fill="currentColor"
                                             className={classNames('bi bi-arrow-down inline-block h-3 w-3')}
                                          />
                                       )}
                                    </a>
                                 </Link>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="flex items-center ml-3">
                        {socialLinks.map(item => (
                           <a
                              key={item.name}
                              href={item.url}
                              className="text-base font-normal text-gray-600 dark:text-gray-300 mr-3 md:hover:opacity-60 duration-200"
										rel="noreferrer"
										target="_blank">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 16 16"
                                 fill="currentColor"
                                 className="h-4 w-4 sm:h-5 sm:w-5">
                                 <path d={item.path} />
                              </svg>
                           </a>
                        ))}
                        <button
                           aria-label="Toggle Dark Mode"
                           type="button"
                           className="w-10 h-10 p-3 rounded focus:outline-none"
                           onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              className="w-4 h-4 text-yellow-500 dark:text-yellow-500">
                              {theme === 'dark' ? (
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                 />
                              ) : (
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                 />
                              )}
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>

               <Disclosure.Panel className="md:hidden absolute left-o w-full bg-white dark:bg-gray-800 z-50">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                     {navigation.map(item => (
                        <Link key={item.name} href={item.href}>
                           <a
                              className={classNames(
                                 item.current
                                    ? 'text-gray-800 font-bold dark:text-gray-400'
                                    : 'text-gray-600 font-normal dark:text-gray-300',
                                 'text-base block',
                              )}
                              aria-current={item.current ? 'page' : undefined}>
                              {item.name + ' '}
                              {item.current && (
                                 <ArrowDownIcon
                                    fill="currentColor"
                                    className={classNames('bi bi-arrow-down inline-block h-3 w-3')}
                                 />
                              )}
                           </a>
                        </Link>
                     ))}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   );
}
