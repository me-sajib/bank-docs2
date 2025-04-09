import React from 'react';
import { FileText, Briefcase, GraduationCap, MessageCircle, Home, Ban as Bank, Heart, Users } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
	const services = [
		{
			icon: <FileText className="h-8 w-8" />,
			title: "Documentatie Hulp",
			description: "Ondersteuning bij het verzamelen en invullen van belangrijke documenten"
		},
		{
			icon: <Briefcase className="h-8 w-8" />,
			title: "Werk Zoeken",
			description: "Begeleiding bij het vinden van passend werk en solliciteren"
		},
		{
			icon: <GraduationCap className="h-8 w-8" />,
			title: "Onderwijs Advies",
			description: "Hulp bij het kiezen van de juiste opleiding en studiebegeleiding"
		},
		{
			icon: <MessageCircle className="h-8 w-8" />,
			title: "Persoonlijke Begeleiding",
			description: "Een luisterend oor en professioneel advies op maat"
		},
		{
			icon: <Home className="h-8 w-8" />,
			title: "Huisvesting",
			description: "Ondersteuning bij het vinden van geschikte woonruimte"
		},
		{
			icon: <Bank className="h-8 w-8" />,
			title: "Financieel Advies",
			description: "Hulp bij geldzaken en budgettering"
		},
		{
			icon: <Heart className="h-8 w-8" />,
			title: "Mentale Gezondheid",
			description: "Begeleiding voor mentaal welzijn en persoonlijke groei"
		},
		{
			icon: <Users className="h-8 w-8" />,
			title: "Sociale Vaardigheden",
			description: "Training in communicatie en sociale interactie"
		}
	];

	return (
		<div id="services" className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-4 text-black">Onze Diensten</h2>
				<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
					Wij bieden een breed scala aan diensten om jongeren te ondersteunen bij hun persoonlijke ontwikkeling
					en maatschappelijke participatie.
				</p>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<ServiceCard key={index} {...service} />
					))}
				</div>
			</div>
		</div>
	);
}