import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'departement-tarn',
		company: 'Département du Tarn',
		description: "Au cours de mon alternance, j'ai été intégré dans une équipe spécialisée, travaillant sur des rapports via Business Object pour un client. En première période, j'ai mis à jour des rapports suite à une réorganisation territoriale, puis élaboré un rapport en autonomie. Pendant la seconde période, formé sur QGIS, j'ai cartographié les actions des associations pour les personnes âgées, analysant les données démographiques pour identifier les zones sous-desservies. J'ai travaillé en autonomie, contactant les acteurs impliqués pour assurer la qualité du projet. J'ai développé des outils Excel et des guides d'utilisation pour optimiser le processus, démontrant ma capacité à gérer des projets de manière indépendante et innovante.",
		contract: ContractType.SandwichCourse,
		type: 'Software Development',
		location: 'Albi',
		period: { from: new Date() },
		skills: getSkills('QGIS', 'python','BO','postgres'),
		name: 'ALTERNANT REFERENT TECHNIQUE SYSTEMES D’INFORMATIONS',
		color: 'red',
		links: [],
		logo: Assets.Tarn,
		shortDescription: "Pendant mon alternance, j'ai rejoint une équipe spécialisée dans la création de rapports via Business Object pour un client. J'ai mis à jour des rapports et élaboré un rapport en autonomie lors de la première période. Durant la seconde, formé sur QGIS, j'ai cartographié les actions des associations pour les personnes âgées, identifiant les zones sous-desservies. Travaillant de manière autonome, j'ai assuré la qualité du projet en contactant les acteurs impliqués et développé des outils Excel pour optimiser le processus, démontrant ma capacité à gérer des projets de manière innovante."
	},
	{
		slug: 'ADDINFORMATIQUE',
		company: 'ADD INFORMATIQUE',
		description: "Stage de 12 semaines en tant que Développeur WEB front/back (Laravel), centré sur la refonte totale du site et la création d'un logiciel de formation aux normes qualiopi. J'ai acquis une solide expertise en développement WEB.Stage de 12 semaines en tant que Développeur WEB front/back (Laravel), centré sur la refonte totale du site et la création d'un logiciel de formation aux normes qualiopi. J'ai acquis une solide expertise en développement WEB.",
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Toulouse',
		period: { from: new Date('2023-04-01'), to: new Date('2023-06-20') },
		skills: getSkills('css', 'html', 'js', 'Laravel', 'php'),
		name: 'STAGE DEVELOPPEUR WEB FULL STACK',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: "Stage de 12 semaines en développement web front-end et back-end (utilisant Laravel). Mission principale : refonte totale du site et création d'un logiciel de formation aux normes Qualiopi. Acquisition d'une expertise solide en développement web."
	},
	{
		slug: 'bk',
		company: 'Burger King',
		description: "Pendant mon emploi étudiant chez Burger King, j'ai développé des compétences précieuses pour travailler sous pression et gérer une cuisine dynamique. En tant que membre de l'équipe, j'ai été constamment confronté à des situations exigeantes où la rapidité et la précision étaient essentielles. Cela m'a permis de perfectionner ma capacité à travailler efficacement dans des environnements à haut débit, en maintenant toujours la qualité des produits et le respect des normes de sécurité alimentaire. J'ai également appris à collaborer avec mes collègues pour assurer une coordination fluide des opérations en cuisine, ce qui a renforcé mes compétences en communication et en travail d'équipe. Mon expérience chez Burger King m'a donc non seulement permis d'acquérir des compétences pratiques en cuisine, mais aussi de développer une résistance au stress et une capacité à exceller dans des environnements de travail exigeants.",
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Labarthe-sur-Lèze',
		period: {
			from: new Date('2022-01-28'),
			to: new Date('2022-11-05')
		},
		skills: getSkills(''),
		name: 'Équipier Polyvalent',
		color: 'orange',
		links: [],
		logo: Assets.BurgerKing,
		shortDescription: "Mon emploi étudiant chez Burger King m'a appris à travailler sous pression et à gérer une cuisine dynamique. J'ai perfectionné ma capacité à maintenir la qualité des produits tout en travaillant efficacement dans des environnements à haut débit. Ma collaboration avec mes collègues a renforcé mes compétences en communication et en travail d'équipe."
	}
];

export const title = 'Expériences professionnelles';
