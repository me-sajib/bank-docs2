import React from 'react';

export function About() {
	return (
		<div id="about" className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:flex lg:items-center lg:gap-12">
					<div className="lg:w-1/2">
						<img
							src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
							alt="Team meeting"
							className="rounded-lg shadow-lg"
						/>
					</div>
					<div className="lg:w-1/2 mt-8 lg:mt-0">
						<h2 className="text-3xl font-bold mb-6 text-black">Over Ons</h2>
						<div className="space-y-4 text-lg text-gray-600">
							<p>
								Bij JeugdSteun zetten we ons in voor jongeren die extra ondersteuning nodig hebben.
								Wij begrijpen dat de weg naar volwassenheid soms uitdagend kan zijn, vooral als het
								gaat om praktische zaken zoals administratie, werk zoeken of het kiezen van een opleiding.
							</p>
							<p>
								Ons team van ervaren professionals staat klaar om je te helpen met persoonlijke
								begeleiding, praktische ondersteuning en advies op maat. We geloven in de potentie
								van elke jongere en werken samen aan een positieve toekomst.
							</p>
							<p>
								Met jarenlange ervaring in jongerenbegeleiding weten we precies welke uitdagingen
								jongeren tegenkomen en hoe we hen het beste kunnen ondersteunen bij het bereiken
								van hun doelen.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}