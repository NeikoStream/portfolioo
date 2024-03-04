import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Nicolas';

export const lastName = 'Rousseau';

export const description =
	"Actuellement étudiant en informatique, je suis passionné par le développement web et les nouvelles technologies. Je suis également streamer sur Twitch et j'aime partager mes connaissances avec les autres. N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez en savoir plus sur moi.";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/NeikoStream' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/nicolas-rousseau-dev/',
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

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'php', 'svelte', 'ts');
