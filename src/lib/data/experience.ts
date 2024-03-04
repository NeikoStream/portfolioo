import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'departement-tarn',
		company: 'Département du Tarn',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SandwichCourse,
		type: 'Software Development',
		location: 'Albi',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Alternance',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'ADDINFORMATIQUE',
		company: 'ADD INFORMATIQUE',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Toulouse',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js', 'laravel', 'php'),
		name: 'Stage junior full stack',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';
