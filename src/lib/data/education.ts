import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelors Universitaires de Technologie en informatique',
		description: '',
		location: 'Université Toulouse III, Toulouse, France',
		logo: Assets.IUT,
		name: '',
		organization: 'ADMINISTRATION, GESTION & EXPLOITATION DONNEES',
		period: { from: new Date(2021, 0, 1), to: new Date(2024, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Algorithmique', 'Programmation', 'Base de données', 'Réseaux', 'Systèmes', 'Mathématiques', 'Anglais', 'Communication', 'Droit', 'Economie', 'Projet']
	},
	{
		degree: 'DUT informatique',
		description: '',
		location: 'Université Toulouse III, Toulouse, France',
		logo: Assets.IUT,
		name: '',
		organization: '',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Algorithmique', 'Programmation', 'Base de données', 'Réseaux', 'Systèmes', 'Mathématiques', 'Anglais', 'Communication', 'Droit', 'Economie', 'Projet']
	},
	{
		degree: 'Baccalaureat STI2D',
		description: 'mention bien',
		location: 'Lycée Polyvalent Charles Renouviern, Prades, France',
		logo: Assets.Lycee,
		name: '',
		organization: "spécialité Systèmes d'Information et Numérique (SIN)",
		period: { from: new Date(2017, 7, 1), to: new Date(2020, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['Informatique', 'Arduino', 'Electronique', 'Mécanique', 'Mathématiques', 'Physique', 'Anglais', 'Espagnol']
	}
];

export const title = "Parcours d'études";
