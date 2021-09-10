import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import Image from 'next/image';
import { socialLinks } from '../constants/data';

export default function Hero() {
   return (
      <div className="max-w-full sm:max-w-7xl mx-auto flex flex-row justify-center items-center overflow-hidden">
         <div className="w-full px-6 lg:w-3/5 lg:px-0">
            <RoughNotationGroup show={true}>
               <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                  Привет, меня зовут{' '}
                  <RoughNotation type="highlight" color="#E9D5FF" order="1">
                     <span className="dark:text-black inline-block pt-1 sm:pt-4"> Андрей Герчиков </span>
                  </RoughNotation>{' '}
               </h1>
               <h2 className="text-gray-600 text-sm sm:text-base mb-16 mt-4 font-light tracking-wide leading-normal sm:leading-loose dark:text-gray-400">
                  Я разработчик, работаю на фриланс-биржах в качестве  &nbsp;
                  <RoughNotation type="highlight" color="#FDE68A" order="2">
                     <span className="dark:text-black whitespace-nowrap px-3"> Frontend Developer. </span>
                  </RoughNotation> &nbsp;
						И рад приветствовать вас на моем сайте. Здесь вы найдете всю
                  профессиональную информацию про меня: рабочий стек, опыт работы, портфолио и многое другое. Я также начинаю
                  вести
                  {
                     <RoughNotation color="#FECACA" order="3">
                        <a href={socialLinks.filter(item => item.name === 'Twitter')[0].url} className="font-bold">
                           {' '}Twitter{' '}
                        </a>
                     </RoughNotation>
                  }
                  , где пишу о различных историях из жизни и стараюсь делиться полезной информации про ИТ, поэтому подписывайтесь
                  - будет интересно. Крути колесико мышки и добро пожаловать!
               </h2>
            </RoughNotationGroup>
         </div>
         <div className="hidden lg:block md:w-2/5 -mr-40 mt-10 ml-20">
            <div className="w-3/4 ">
               <Image src="/avatar.jpg" alt="avatar" className="shadow" width={960} height={1280} layout="responsive" />
               <div className="flex flex-row justify-between mt-4">
                  <div className="flex flex-row space-x-4">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-90deg-up"
                        viewBox="0 0 16 16">
                        <path
                           fillRule="evenodd"
                           d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                        />
                     </svg>
                     <p className="font-mono">Это я</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
