"use client"
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/app/components/Footer';
import { Navigation } from '@/app/components/Navigation';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';

const blogPosts = {
	'juiste-baan-vinden': {
		title: 'Hoe vind je de juiste baan als jongere?',
		date: '15 maart 2025',
		category: 'Werk',
		image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80',
		content: `
		<h2>De zoektocht naar je eerste baan</h2>
		<p>Het vinden van je eerste echte baan kan een uitdagende ervaring zijn. Veel jongeren worstelen met vragen als: "Waar begin ik?" en "Hoe maak ik een goede indruk?" In dit artikel delen we praktische tips die je kunnen helpen bij je zoektocht.</p>
  
		<h3>1. Ken jezelf</h3>
		<p>Begin met het in kaart brengen van je sterke punten, interesses en vaardigheden. Wat vind je leuk om te doen? Waar ben je goed in? Dit helpt je bij het zoeken naar passende vacatures.</p>
  
		<h3>2. Maak een sterk CV</h3>
		<p>Je CV is vaak je eerste introductie bij een potentiële werkgever. Zorg dat deze er professioneel uitziet en relevante informatie bevat over je opleiding, eventuele stages en bijbanen.</p>
  
		<h3>3. Netwerken</h3>
		<p>Veel banen worden gevonden via netwerken. Praat met familie, vrienden en docenten over je zoektocht. Zij kunnen waardevolle contacten hebben of tips geven.</p>
  
		<h3>4. Voorbereiding sollicitatiegesprek</h3>
		<p>Een goede voorbereiding is het halve werk. Research het bedrijf, oefen veelvoorkomende vragen en zorg dat je er verzorgd uitziet.</p>
  
		<h2>Conclusie</h2>
		<p>Het vinden van je eerste baan kost tijd en energie, maar met de juiste aanpak vergroot je je kansen aanzienlijk. Blijf positief en zie elk gesprek als een leermoment.</p>
	  `
	},
	'omgaan-met-stress': {
		title: 'Omgaan met stress tijdens je studie',
		date: '10 maart 2025',
		category: 'Mentale Gezondheid',
		image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
		content: `
		<h2>Stress herkennen en aanpakken</h2>
		<p>Stress tijdens je studie is normaal, maar te veel stress kan je prestaties en welzijn negatief beïnvloeden. Leer de signalen herkennen en effectief omgaan met studiestress.</p>
  
		<h3>1. Timemanagement</h3>
		<p>Een goede planning is essentieel. Verdeel grote taken in kleinere, behapbare stukken en plan voldoende pauzes in.</p>
  
		<h3>2. Gezonde leefstijl</h3>
		<p>Voldoende slaap, gezonde voeding en regelmatige beweging helpen je beter om te gaan met stress.</p>
  
		<h3>3. Vraag hulp</h3>
		<p>Schaam je niet om hulp te vragen aan docenten, medestudenten of een studieadviseur als je het moeilijk hebt.</p>
  
		<h2>Conclusie</h2>
		<p>Met de juiste aanpak en ondersteuning kun je stress beheersbaar houden en succesvol studeren.</p>
	  `
	},
	'financiele-zelfredzaamheid': {
		title: 'Financiële zelfredzaamheid voor jongeren',
		date: '5 maart 2025',
		category: 'Financiën',
		image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80',
		content: `
		<h2>Grip op je financiën</h2>
		<p>Als jongere is het belangrijk om vroeg te beginnen met het ontwikkelen van gezonde financiële gewoontes. In dit artikel bespreken we de basis van financiële zelfredzaamheid.</p>
  
		<h3>1. Budgetteren</h3>
		<p>Leer je inkomsten en uitgaven in kaart te brengen. Maak onderscheid tussen vaste lasten en variabele uitgaven. Gebruik een app of spreadsheet om je uitgaven bij te houden.</p>
  
		<h3>2. Sparen</h3>
		<p>Begin met een spaarplan, hoe klein ook. Probeer elke maand een vast bedrag opzij te zetten voor onverwachte uitgaven of toekomstige doelen.</p>
  
		<h3>3. Schulden voorkomen</h3>
		<p>Wees voorzichtig met leningen en creditcards. Koop alleen wat je kunt betalen en vermijd impulsaankopen.</p>
  
		<h3>4. Financiële planning</h3>
		<p>Denk na over je financiële toekomst. Stel korte- en langetermijndoelen op en maak een plan om deze te bereiken.</p>
  
		<h2>Tips voor dagelijks geldbeheer</h2>
		<p>- Houd je administratie bij<br>
		   - Vergelijk prijzen voor grote aankopen<br>
		   - Zoek uit waar je recht op hebt qua toeslagen<br>
		   - Bouw een financiële buffer op</p>
  
		<h2>Conclusie</h2>
		<p>Financiële zelfredzaamheid is een belangrijke vaardigheid die je je hele leven nodig hebt. Begin klein en bouw het geleidelijk op.</p>
	  `
	},
	'sociale-vaardigheden': {
		title: 'De waarde van sociale vaardigheden',
		date: '1 maart 2025',
		category: 'Persoonlijke Ontwikkeling',
		image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
		content: `
		<h2>Het belang van sociale vaardigheden</h2>
		<p>Goede sociale vaardigheden zijn essentieel voor zowel je persoonlijke als professionele leven. Ze helpen je bij het opbouwen van relaties, het vinden van werk en het bereiken van je doelen.</p>
  
		<h3>1. Effectieve communicatie</h3>
		<p>Leer jezelf duidelijk uit te drukken en actief te luisteren naar anderen. Goede communicatie voorkomt misverstanden en versterkt relaties.</p>
  
		<h3>2. Empathie ontwikkelen</h3>
		<p>Het vermogen om je in te leven in anderen is een belangrijke sociale vaardigheid. Het helpt je om betere relaties op te bouwen en conflicten te voorkomen.</p>
  
		<h3>3. Samenwerken</h3>
		<p>In bijna elke situatie moet je kunnen samenwerken met anderen. Leer compromissen te sluiten en constructief bij te dragen aan groepsdoelen.</p>
  
		<h3>4. Grenzen stellen</h3>
		<p>Het is belangrijk om je eigen grenzen te kennen en deze respectvol aan anderen duidelijk te maken. Dit zorgt voor gezonde relaties.</p>
  
		<h2>Praktische oefeningen</h2>
		<p>- Oefen met small talk<br>
		   - Neem deel aan groepsactiviteiten<br>
		   - Vraag feedback aan anderen<br>
		   - Observeer succesvolle communicators</p>
  
		<h2>Conclusie</h2>
		<p>Sociale vaardigheden zijn niet aangeboren maar kunnen worden ontwikkeld. Met oefening en geduld kun je je sociale competenties verbeteren.</p>
	  `
	}
};

export default function BlogPage() {
	const { id } = useParams();
	console.log(blogPosts[id]);
	const post = id ? blogPosts[id] : null;

	if (!post) {
		return (
			<>
				<Navigation />
				<div className="min-h-screen bg-gray-50 py-12">
					<div className="max-w-3xl mx-auto px-4">
						<h1 className="text-2xl font-bold text-gray-900">Artikel niet gevonden</h1>
						<Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
							Terug naar blog overzicht
						</Link>
					</div>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navigation />
			<article className="min-h-screen bg-gray-50 py-12">
				<div className="max-w-3xl mx-auto px-4">
					<Link
						href="/blog"
						className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Terug naar blog overzicht
					</Link>

					<div className="bg-white rounded-xl overflow-hidden shadow-lg">
						<img
							src={post.image}
							alt={post.title}
							className="w-full h-64 object-cover"
						/>
						<div className="p-8">
							<div className="flex items-center justify-between mb-4">
								<span className="text-sm text-gray-500">{post.date}</span>
								<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
									{post.category}
								</span>
							</div>
							<h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
							<div
								className="prose prose-lg max-w-none text-black"
								dangerouslySetInnerHTML={{ __html: post.content }}
							/>
						</div>
					</div>
				</div>
			</article>
			<Footer />
		</>
	);
}
