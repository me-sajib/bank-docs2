import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import Link from 'next/link';

const blogPosts = [
	{
		id: 1,
		title: 'Hoe vind je de juiste baan als jongere?',
		slug: 'juiste-baan-vinden',
		excerpt: 'Tips en tricks voor het vinden van je eerste echte baan, van CV schrijven tot sollicitatiegesprekken.',
		image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80',
		date: '15 maart 2025',
		category: 'Werk'
	},
	{
		id: 2,
		title: 'Omgaan met stress tijdens je studie',
		slug: 'omgaan-met-stress',
		excerpt: 'Praktische tips voor het managen van stress tijdens je studie en het vinden van een goede balans.',
		image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
		date: '10 maart 2025',
		category: 'Mentale Gezondheid'
	},
	{
		id: 3,
		title: 'Financiële zelfredzaamheid voor jongeren',
		slug: 'financiele-zelfredzaamheid',
		excerpt: 'Leer hoe je je financiën op orde krijgt en houdt met deze praktische tips voor budgetteren.',
		image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80',
		date: '5 maart 2025',
		category: 'Financiën'
	},
	{
		id: 4,
		title: 'De waarde van sociale vaardigheden',
		slug: 'sociale-vaardigheden',
		excerpt: 'Waarom sociale vaardigheden belangrijk zijn en hoe je ze kunt ontwikkelen.',
		image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
		date: '1 maart 2025',
		category: 'Persoonlijke Ontwikkeling'
	}
];

export default function Blog() {
	return (
		<>
			<Navigation />
			<div className="bg-gray-50 min-h-screen py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Ontdek waardevolle inzichten, tips en verhalen over persoonlijke ontwikkeling, werk,
							studie en meer.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map(post => (
							<Link
								key={post.id}
								href={`/blog/${post.slug}`}
								className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="relative h-48">
									<img
										src={post.image}
										alt={post.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
										{post.category}
									</div>
								</div>
								<div className="p-6">
									<div className="text-sm text-gray-500 mb-2">{post.date}</div>
									<h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
									<p className="text-gray-600">{post.excerpt}</p>
									<div className="mt-4 text-blue-600 font-medium">Lees meer →</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
