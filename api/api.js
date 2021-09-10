import axios from 'axios';

export const githubAPI = {
   async getRepos(token) {
      try {
         const res = await axios.get(`https://api.github.com/user/repos?per_page=6&sort=created`, {
            headers: {
					Authorization: `token ${token}`,
				}
			});
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
};
