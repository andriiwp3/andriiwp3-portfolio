import { socialLinks, githubUser } from '../constants/data';

export default function Footer() {
   return (
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
         <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
            <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
               <div>
                  <p>
                     &copy;{' '}
                     <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                        <a
                           className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
                           href={`https://github.com/${githubUser.username}`}>
                           Андрей Герчиков.
                        </a>
                     </div>
                     Все права защищены.
                  </p>
               </div>
               {socialLinks && (
                  <div className="space-x-4 flex flex-row items-center">
                     {socialLinks.map(social => (
                        <a key={social.name} href={social.url} className="text-base font-normal text-gray-600 dark:text-gray-300">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-instagram h-5 w-5"
                              viewBox="0 0 16 16">
                              <path d={social.path} />
                           </svg>
                        </a>
                     ))}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
