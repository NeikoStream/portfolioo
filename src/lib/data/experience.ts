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
		slug: 'bk',
		company: 'Burger King',
		description: 'Job étudiant',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Labarthe-sur-Lèze',
		period: {
			from: new Date('2022-01-01'),
			to: new Date('2022-11-01')
		},
		skills: getSkills(''),
		name: 'Employées Polyvalent',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Flip the burger'
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
