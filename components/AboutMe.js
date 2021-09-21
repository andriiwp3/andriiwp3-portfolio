import Image from 'next/image';
import { userData } from '../constants/data';

export default function AboutMe() {
   return (
      <section className="bg-white dark:bg-gray-800">
         <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">Обо мне.</h1>
         </div>
         <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
            <div className="text-container max-w-6xl mx-auto pt-20">
               <p className="leading-loose text-2xl md:text-4xl font-semibold  mx-4" style={{ lineHeight: '3rem' }}>
                  {userData.about.title}. Сейчас работаю в{' '}
                  <a
                     className="bg-red-500 rounded-md px-2 py-1 text-white whitespace-nowrap"
                     href={userData.about.currentProjectUrl}>
                     {userData.about.currentProject} ✈️
                  </a>
               </p>
            </div>
         </div>
         <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
            <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
               {/* Social Buttons */}
               <div className="inline-flex flex-col">
                  <div>
                     <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Связаться</h1>
                     <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                        За любой помощью/вопросом пишите на{' '}
                        <a
                           href={`mailto:${userData.contact.email}`}
                           className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300">
                           почту
                        </a>{' '}
                        и я отвечу
                     </p>
                  </div>
                  <div className="mt-8">
                     <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Возможости работы</h1>
                     <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                        В настоящее время я ищу работу, если вы видите во мне подходящую кандидатуру, проверьте мое{' '}
                        <a
                           href={userData.resumeUrl}
                           target="__blank"
                           className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300">
                           резюме,
                        </a>{' '}
                        я буду рад работать на вас
                     </p>
                  </div>
                  {/* Social Links */}
                  {userData.socialLinks && (
                     <>
                        <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">Социальные ссылки</h1>
                        <div className="mt-4 ml-4">
                           {userData.socialLinks.map(social => (
                              <div key={social.name} className="flex flex-row justify-start items-center">
                                 <a href={social.url} className="flex flex-row items-center space-x-4 group" target="_blank" rel="noopener noreferrer">
                                    <div className="my-4">&rarr;</div>
                                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                       <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                       {social.name}
                                    </p>
                                 </a>
                              </div>
                           ))}
                        </div>
                     </>
                  )}
               </div>
               {/* Text area */}
               <div className="col-span-1 md:col-span-2">
                  {userData.about.description?.map((desc, idx) => (
                     <p key={idx} className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                        {desc}
                     </p>
                  ))}

                  <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Техничный стек</h1>
                  <div className="flex flex-row flex-wrap mt-8">
                     {userData.techStack.map(({ image, ...tech }) => {
                        console.log(image);
                        return (
                           <div key={tech.name} className="h-20 w-20 mx-4 my-4">
                              <Image
                                 src={image}
                                 width="70"
                                 height="70"
                                 layout="responsive"
                                 alt=""
                              />
                           </div>
                        );
                     })}
                     {/*  <img
                        src=
                        className="h-20 w-20 mx-4 my-4"
                     /> */}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
