import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Nicolas';

export const lastName = 'Rousseau';

export const description =
	"J'ai un fort sens du travail d'équipe, je suis capable de m'adapter à toutes les situations et je persévère dans tout ce que j'entreprends.";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/NeikoStream' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/nicolas-rousseau-dev/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/NeikoStream'
	},
	{
		platform: Platform.Twitch,
		link: 'https://twitch.tv/NeikoStream'
	},
	{
		platform: Platform.Email,
		link: 'contact@nrousseau.fr'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
