import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import { languages } from 'prismjs';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Langage de programmation', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Bibliothèque', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Base de données', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Outils de développement', slug: 'devtools' }),
	defineSkillCategory({ name: 'Balisage et style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: "<b>JavaScript</b> est un langage de programmation de scripts principalement employé dans les pages WEB interactives mais aussi pour les serveurs avec l'utilisation (par exemple) de Node.js. C'est un langage orienté objet à prototype, c'est-à-dire que les bases du langage et ses principales interfaces sont fournies par des objets qui ne sont pas des instances de classes, mais qui sont chacun équipés de constructeurs permettant de créer leurs propriétés, et également de méthodes d'instance. J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R5.C.04 - Programmation au format WEB des informations décisionnelles.</b>",
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: "TypeScript est un langage de programmation libre et open-source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. C'est un sur-ensemble de JavaScript (c'est-à-dire que tout code JavaScript valide est aussi du code TypeScript). J'ai pu obtenir cette compétence en autodiacte en suivant des tutoriels sur internet et en pratiquant sur des projets personnels.",
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: "CSS est un langage informatique utilisé pour mettre en forme le style des documents WEB. C'est un acronyme pour Cascading Style Sheets. Il s'agit d'un langage utilisé pour décrire la présentation des documents HTML et XML (c'est-à-dire les éléments et leur mise en forme). J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la Ressource <b>R1.02 : Développement d’interfaces WEB</b>.",
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML est un langage de balisage utilisé pour créer la structure d\'une page WEB. Il est utilisé conjointement avec le langage de présentation CSS et le langage de programmation JavaScript. J\'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l\'IUT de Rangueil lors de la Ressource <b>R1.02 : Développement d’interfaces WEB</b>.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: "ReactJS est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application WEB monopage, via la création de composants dépendant d'un état et générant une page (ou portion) de l'interface graphique à chaque changement d'état. J'ai pu obtenir cette compétence en autodiacte en suivant des tutoriels sur internet et en pratiquant sur des projets personnels.",
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: "python est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. j'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R3.08 : Probabilité</b>.",
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'NodeJs',
		color: 'green',
		description: 'Node.js est une plateforme logicielle libre et événementielle en JavaScript orientée vers les applications réseau qui doivent pouvoir monter en charge. J\'ai pu obtenir cette compétence en autodiacte en suivant des tutoriels sur internet et en pratiquant sur des projets personnels.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ViteJs',
		color: 'blue',
		description: "ViteJs est un outil de développement WEB qui vise à fournir une expérience de développement rapide pour les développeurs. Il se concentre sur la rapidité de construction et de rechargement, et sur la prise en charge native des modules ES6. J'ai pu obtenir cette compétence en autodiacte en suivant des tutoriels sur internet et en pratiquant sur des projets personnels.",
		logo: Assets.Vite,
		name: 'ViteJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Laravel',
		color: 'red',
		description: "Laravel est un framework WEB open-source écrit en PHP respectant le principe modèle-vue-contrôleur et entièrement développé en programmation orientée objet. J'ai pu obtenir cette compétence lors de mon stage de 12 semaines en tant que Développeur WEB front/back (Laravel) chez <b>ADD INFORMATIQUE</b>.",
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description: "PHP est un langage de programmation libre, principalement utilisé pour produire des pages WEB dynamiques via un serveur HTTP. J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R3.01 : Développement WEB</b>.",
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'QGIS',
		color: 'green',
		description: "QGIS est un logiciel SIG (Système d’Information Géographique) libre multiplate-forme publié sous la licence GPL. Il permet de visualiser, gérer, éditer, analyser des données géographiques et de composer des cartes. J'ai pu obtenir cette compétence lors de mon alternance au <b>département du Tarn</b> ou j'ai pu être formé par l'association <b>TIGEO</b>.",
		logo: Assets.QGIS,
		name: 'QGIS',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'blue',
		description: 'PostgreSQL est un système de gestion de base de données relationnelle et objet.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'BO',
		color: 'blue',
		description: "BuissnessObjects est un logiciel de Business Intelligence (BI) qui fournit des outils pour la génération de rapports, l’analyse et la visualisation des données. J'ai pu obtenir cette compétence lors de mon alternance au <b>département du Tarn</b>.",
		logo: Assets.BO,
		name: 'BuissnessObjects',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: "Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld. J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R3.02 : Développement efficace</b> et <b>R3.04 : Qualité de développement</b>.",
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'PowerBI',
		color: 'blue',
		description: "Power BI est un service d'analyse commerciale de Microsoft qui fournit des informations en libre-service aux utilisateurs finaux. J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R4.Admin.10 : Analyse et visualisation avancée des données</b>.",
		logo: Assets.PowerBI,
		name: 'Power BI',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description: "SQL (Structured Query Language) est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet d'interroger, de modifier ou de supprimer des données dans une base de données. J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R3.07 : Bases de données</b>.",
		logo: Assets.SQL,
		name: 'SQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'Trello',
		color: 'blue',
		description: "Trello est un outil de gestion de projet en ligne, lancé en septembre 2011, et inspiré par la méthode Kanban. J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R3.06 : Gestion de projet</b>.",
		logo: Assets.Trello,
		name: 'Trello',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'git',
		color: 'red',
		description: "Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux. J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R3.06 : Gestion de projet</b>.",
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'MongoDB',
		color: 'green',
		description: "MongoDB est un système de gestion de base de données orientée documents, répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant pas de schéma prédéfini des données. J'ai pu obtenir cette compétence lors de ma formation en BUT informatique à l'IUT de Rangueil lors de la ressource <b>R5.05 : Nouvelles Bases de données</b>.",
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	})
	
] as const;

export const title = 'Compétences';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
