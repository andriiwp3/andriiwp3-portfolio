import { upcomingProjects } from '../constants/data';

export default function UpcomingList() {
   return (
      <div className="max-w-6xl mx-auto flex flex-col items-center py-16">
         <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Будущие проекты</h1>
         <div className="flex flex-col">
            {upcomingProjects.map(({Image, ...project}) => (
               <div className="md:w-4/6 mx-auto px-6 py-4" key={project.desc}>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                     <div className="flex-shrink-0 mb-4 sm:mb-0 h-10 w-10">
                        <Image className="h-10 w-10 rounded-full" />
                     </div>
                     <div className="sm:ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-200">{project.name}</div>
                        <div className="text-sm text-gray-500">{project.desc}</div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
