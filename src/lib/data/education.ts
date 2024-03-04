import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelors Universitaires de Technologie en informatique',
		description: '',
		location: 'Université Toulouse III, Toulouse, France',
		logo: Assets.Unknown,
		name: '',
		organization: 'ADMINISTRATION, GESTION & EXPLOITATION DONNEES',
		period: { from: new Date(2021, 0, 1), to: new Date(2024, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'DUT informatique',
		description: '',
		location: 'Université Toulouse III, Toulouse, France',
		logo: Assets.Unknown,
		name: '',
		organization: 'ADMINISTRATION, GESTION & EXPLOITATION DONNEES',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Baccalaureat STI2D option SIN',
		description: 'mention bien',
		location: 'Prades, France',
		logo: Assets.Unknown,
		name: '',
		organization: 'Lycée Polyvalent Charles Renouvier',
		period: { from: new Date(2017, 7, 1), to: new Date(2020, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['Computer Architecture']
	}
];

export const title = 'Éducation';
