import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { userData } from '../constants/data';
import ContactForm from './ContactForm';

export default function ContactBlock() {
   return (
      <section>
         <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">Связаться</h1>
         </div>
         <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="md:ml-4">
                  <header className="">
                     <h1 className="text-gray-50 font-semibold text-2xl">Свяжитесь, давайте поговорим</h1>
                     <p className="font-light text-base text-gray-200 mt-2">
                        Введите данные и я свяжусь с вами, как только смогу
                     </p>
                  </header>
                  <div className="icons-container inline-flex flex-col my-20">
                     <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                        <PhoneIcon width="18" height="18" className="h-5 w-5 text-blue-500" />
                        <p className="text-gray-50 font-light text-sm">{userData.contact.phone}</p>
                     </div>
                     <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                        <MailIcon width="18" height="18" className="h-5 w-5 text-blue-500" />
                        <p className="text-gray-50 font-light text-sm">{userData.contact.email}</p>
                     </div>
                     <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                        <LocationMarkerIcon width="18" height="18" className="h-5 w-5 text-blue-500" />
                        <p className="text-gray-50 font-light text-sm">{userData.contact.address}</p>
                     </div>
                  </div>
                  {userData.socialLinks && (
                     <div className="social-icons flex flex-row space-x-8">
                        {userData.socialLinks.map(social => (
                           <a
                              key={social.name}
                              href={social.url}
                              className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                              rel="noreferrer"
                              target="_blank">
                              <svg
                                 width="16"
                                 height="16"
                                 className="text-gray-50"
                                 viewBox="0 0 16 16"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path d={social.path} fill="currentColor" />
                              </svg>
                           </a>
                        ))}
                     </div>
                  )}
               </div>
					<ContactForm />
            </div>
         </div>
      </section>
   );
}
