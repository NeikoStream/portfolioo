import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'minedle',
		color: '#5e95e3',
		description:
			"J'ai développé un jeu en ligne quotidien où les joueurs doivent trouver un monstre issu du jeu Minecraft chaque jour. Ce projet m'a offert l'opportunité d'apprendre en autodidacte le framework front-end ViteJS, ainsi que de découvrir TypeScript. J'ai également pu mettre en pratique mes connaissances en JavaScript, acquises notamment grâce à la ressource R5.C.04 - Programmation au format web des informations décisionnelles, suivie en cours.",
		shortDescription:
			'Jeu en ligne quotidien, tous les jours les joueurs doivent trouver un monstres venant du jeu Minecraft.',
		links: [{ to: 'https://minedle.com', label: 'Minedle.com' }],
		logo: Assets.Minedle,
		name: 'Minedle',
		period: {
			from: new Date('2023-12-01')
		},
		skills: getSkills('NodeJs', 'reactjs', 'ts', 'js', 'ViteJs'),
		type: 'Application WEB',
		screenshots: [
			{
				label: 'Accueil',
				src: "https://i.imgur.com/IimwfoT.png"
			},
			{
				label: 'Monstres',
				src: "https://i.imgur.com/V4gPsGt.png"
			},
			{
				label: 'Comparaison des monstres',
				src: "https://i.imgur.com/sQmS5O8.png"
			},
			{
				label: 'Victoire',
				src: "https://i.imgur.com/KyTiNzB.png"
			}
			
		]
	},
	{
		slug: 'machine-learning-comparaison',
		color: '#5e95e3',
		description:"L'objectif de ce projet était de comparer différents modèles de machine learning pour prédire la qualité des commentaire de livres. Pour cela, nous avons utilisé des modèles de machine learning tels que la régression linéaire, la régression logistique, les arbres de décision, les forêts aléatoires, les machines à vecteurs de support et les réseaux de neurones.",
		shortDescription:"Comparation de divers modèles de machine learning pour prédire la qualité des commentaires de livres.",
		links: [{ to: 'https://github.com/4PoH/SAES6', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: "Comparaison de différent modèle",
		period: {
			from: new Date('2024-02-01'),
			to: new Date('2024-03-07')
		},
		skills: getSkills('python','git','Trello'),
		type: "Situation d'Apprentissage et d'Évaluation (SAÉ) Semestre 6"
		
	},
	
	{
		slug: 'search-engine',
		color: '#ff3e00',
		description:
			'Le moteur de recherche de séries est un projet de fin de semestre 5, réalisé en binôme avec un camarade de classe. Il s’agit d’un moteur de recherche de séries basé sur les sous-titres, en utilisant des algorithmes complexes tels que TF-IDF pour trouver des séries en fonction de leur sous-titre et de leur description.',
		shortDescription:
			"Moteur de recherche de série basé sur les sous-titre, en utilisant des algorithme complexe tel que TF-IDF",
		links: [{ to: 'https://github.com/NeikoStream', label: 'GitHub' }],
		logo: Assets.SearchEngine,
		name: 'Moteur de recherche de séries',
		period: {
			from: new Date('2023-09-04'),
			to: new Date('2024-01-01')
		},
		skills: getSkills('python','git','Trello'),
		type: "Situation d'Apprentissage et d'Évaluation (SAÉ) Semestre 5",
	},
	{
		slug: 'visualisation-donnees-r5c04',
		color: '#ff3e00',
		description:
			"Création d'un site web de visualisation de données en utilisant des librairies tel que <b>Chart.js</b>. Ce projet a été réalisé en binôme avec un camarade de classe. Nous avons utilisé des outils de gestion de projet tel que <b>Trello</b> pour la répartition des tâches et la gestion du projet.",
		shortDescription:
			"Création d'un site web de visualisation de données en utilisant des librairies tel que Chart.js...",
		links: [{ to: 'https://github.com/AlexPloz/R5C04projet', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Site web de visualisation de données',
		period: {
			from: new Date('2023-11-01'),
			to: new Date('2023-12-15')
		},
		skills: getSkills('js','html','css'),
		type: "Projet de la resource (R5.C04) Semestre 5",
		screenshots: [
			{
				label: 'Application',
				src: "https://i.imgur.com/3MODCGd.png"
			}
		]
	},
	{
		slug: 'power-bi-sae4',
		color: '#ff3e00',
		description:
			"Création de tableau de bord de visualisation de données en utilisant le logiciel <b>Power BI</b>. Ce projet a été réalisé en équipe de 4. Nous avons utilisé des outils de gestion de projet tel que <b>Trello</b> pour la répartition des tâches et la gestion du projet.",
		shortDescription:
			"Création de tableau de bord de visualisation de données",
		links: [],
		logo: Assets.Unknown,
		name: 'Tableau de bord de visualisation de données',
		period: {
			from: new Date('2023-11-01'),
			to: new Date('2023-12-15')
		},
		skills: getSkills('PowerBI','Trello'),
		type: "Situations d'Apprentissage et d'Évaluation (SAÉ) Semestre 4",
		screenshots: [
			{
				label: 'Tableau de bord',
				src: "https://i.imgur.com/bjLW7RM.png"
			}
		
		]
	},
	{
		slug : 'application-gestion-locative',
		color: '#ff3e00',
		description:
			"Création d'une application de gestion locative en utilisant le langage <b>Java</b> pour la partie front-end et back-end. Ce projet a été réalisé en équipe de 4. Nous avons utilisé des outils tel que <b>Git</b> pour la gestion de version et la collaboration sur le projet. Nous avons également utilisé des outils de gestion de projet tel que <b>Trello</b> pour la répartition des tâches et la gestion du projet.",
		shortDescription:
			"Création d'une application de gestion locative",
		links: [{ to: 'https://github.com/gaiailou/housing-rentals-application', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Application de gestion locative',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2023-01-15')
		},
		skills: getSkills('java','Trello','git'),
		type: "Situations d'Apprentissage et d'Évaluation (SAÉ) Semestre 3",
		screenshots:[
			{
				label: 'Application',
				src: "https://i.imgur.com/LXSfKiO.png"
			}
		]
	},
	{
		slug: 'site-equipe-sportive',
		color: '#ff3e00',
		description:
			"Création d'un site web pour une équipe sportive en utilisant des langages tel que <b>PHP, HTML, CSS et JavaScript</b> pour la partie front-end et back-end. Ce projet a été réalisé en binôme avec un camarade de classe. Nous avons utilisé des outils tel que <b>Git</b> pour la gestion de version et la collaboration sur le projet. Nous avons également utilisé des outils de gestion de projet tel que <b>Trello</b> pour la répartition des tâches et la gestion du projet.",
		shortDescription:
			"Création d'un site web pour une équipe sportive",
		links: [{ to: 'https://github.com/NeikoStream/Ultimate-Gestion', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Site web pour une équipe sportive',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-12-15')
		},
		skills: getSkills('php','js','html','css','Trello','git'),
		type: "Projet de la resource (R3.C01) Semestre 3",
	},

];

export const title = 'Projets';
