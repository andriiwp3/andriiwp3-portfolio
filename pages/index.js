import React from 'react';
import { githubAPI } from '../api/api';
import ContactBlock from '../components/ContactBlock';
import ContainerBlock from '../components/ContainerBlock';
import Hero from '../components/Hero';
import LatestRepos from '../components/LatestRepos';
import UpcomingList from '../components/UpcomingList';
import { githubUser } from '../constants/data';

export default function Home({repositories}) {

   return (
      <ContainerBlock>
         <Hero />
			{repositories && <LatestRepos repositories={repositories} />}
			<UpcomingList />
			<ContactBlock />
      </ContainerBlock>
   );
}

export const getServerSideProps = async () => {
	const repositories = await githubAPI.getRepos(githubUser.token)

	if (!repositories) return {props: {}}

	return {
		props: {
			repositories
		}
	}
}
