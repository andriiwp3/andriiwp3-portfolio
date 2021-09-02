import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

export default function ContainerBlock({ children, ...customMeta }) {
   const router = useRouter();

   const meta = {
      title: 'Andrew Herchykov - Frontend React Developer',
      description: `I\`m Frontend React developer and a bit of a Writer on my Twitter. I've been developing websites for 1 years straight. Get in touch with me to know more.`,
      image: '/avatar.jpg',
      type: 'website',
      ...customMeta,
   };

   return (
      <div>
         <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <link rel="canonical" href={`https://andriiwp3.vercel.app${router.asPath}`} />
         </Head>
         <main className="dark:bg-gray-800 w-full">
            <Header />
            <main>{children}</main>
            <Footer />
         </main>
      </div>
   );
}
