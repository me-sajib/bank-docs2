import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function page() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<div className="max-w-4xl mx-auto px-4 py-16 text-black">
				<h1 className="text-3xl font-bold mb-8">Algemene Voorwaarden</h1>

				<div className="prose prose-lg">
					<h2 className="text-2xl font-semibold mb-4">Inleiding</h2>
					<p className="mb-6">
						Welkom bij Hart En Ziel Coaching. Door gebruik te maken van onze coachingdiensten, gaat u akkoord met de onderstaande algemene voorwaarden. Deze voorwaarden zijn van toepassing op alle coachingservices die worden aangeboden door Hart En Ziel Coaching, gevestigd in Nederland.
					</p>

					<h3 className="text-xl font-semibold mb-3">1. Identiteit van de Dienstverlener</h3>
					<p className="mb-6">
						Hart En Ziel Coaching is een coachingpraktijk die zich richt op het begeleiden van mensen naar een gezondere en positievere levensstijl. Wij bieden persoonlijke coaching aan via telefonische sessies. De coaching wordt geleverd door Sinem Betul Emral, oprichter en eigenaar van Hart En Ziel Coaching.
					</p>

					<h3 className="text-xl font-semibold mb-3">2. Diensten</h3>
					<p className="mb-6">
						Hart En Ziel Coaching biedt telefonische coaching op het gebied van gezondheid, mindset, en persoonlijke ontwikkeling. Wij bieden geen fysieke behandelingen of therapieën aan. De coaching wordt telefonisch gegeven en richt zich op het verbeteren van de mentale en fysieke welzijn van de klant.
					</p>

					<h3 className="text-xl font-semibold mb-3">3. Coaching Sessie</h3>
					<p className="mb-6">
						Elke coaching sessie wordt telefonisch gehouden. De duur van een coaching sessie is variabel, maar meestal tussen de 30 en 60 minuten. De kosten worden per minuut berekend, en de prijs wordt vooraf afgesproken. Na afloop van de sessie ontvangt de klant een factuur en een betaalverzoek via het bank systeem, en dient de klant binnen de aangegeven termijn te betalen.
					</p>

					<h3 className="text-xl font-semibold mb-3">4. Betaling</h3>
					<p className="mb-6">
						De coaching wordt gefactureerd per minuut. De klant ontvangt na elke sessie een factuur, die een betaalverzoek bevat. Betalingen kunnen worden gedaan via de beschikbare betaalmethoden, zoals iDeal, creditcard of andere beschikbare opties. Betaling dient te worden voldaan na ontvangst van de factuur en het betaalverzoek.
					</p>

					<h3 className="text-xl font-semibold mb-3">5. Annulering en Verzetting</h3>
					<p className="mb-6">
						Indien een klant een geplande sessie niet kan bijwonen, dient de klant minimaal 24 uur van tevoren contact op te nemen om een andere afspraak in te plannen. Indien een sessie binnen 24 uur wordt geannuleerd, behouden wij ons het recht voor om het volledige bedrag voor de geplande sessie in rekening te brengen. In geval van no-show, wordt de sessie volledig gefactureerd.
					</p>

					<h3 className="text-xl font-semibold mb-3">6. Vertrouwelijkheid</h3>
					<p className="mb-6">
						Hart En Ziel Coaching behandelt alle klantinformatie vertrouwelijk. Tijdens de coaching sessies kunnen persoonlijke gegevens en vertrouwelijke informatie gedeeld worden. Deze informatie zal niet zonder toestemming van de klant worden gedeeld met derden, tenzij wettelijk verplicht.
					</p>

					<h3 className="text-xl font-semibold mb-3">7. Aansprakelijkheid</h3>
					<p className="mb-6">
						Hart En Ziel Coaching is niet aansprakelijk voor schade, verlies of letsel die voortkomt uit de coaching sessies, tenzij sprake is van opzet of grove nalatigheid. De klant is zelf verantwoordelijk voor het implementeren van de geboden adviezen en voor het nemen van beslissingen op basis van de coaching.
					</p>

					<h3 className="text-xl font-semibold mb-3">8. Intellectuele Eigendom</h3>
					<p className="mb-6">
						Alle materialen, documenten, en inhoud verstrekt door Hart En Ziel Coaching zijn beschermd door auteursrechten en mogen niet zonder schriftelijke toestemming worden gedeeld, verspreid of gekopieerd.
					</p>

					<h3 className="text-xl font-semibold mb-3">9. Wijzigingen in de Algemene Voorwaarden</h3>
					<p className="mb-6">
						Hart En Ziel Coaching behoudt zich het recht voor om deze algemene voorwaarden op elk moment te wijzigen. Wijzigingen worden tijdig via de website van Hart En Ziel Coaching en per e-mail aan klanten bekendgemaakt.
					</p>

					<h3 className="text-xl font-semibold mb-3">10. Toepasselijk Recht</h3>
					<p className="mb-6">
						Op deze algemene voorwaarden is Nederlands recht van toepassing. Eventuele geschillen die voortvloeien uit of verband houden met deze voorwaarden zullen exclusief worden voorgelegd aan de bevoegde rechter in Nederland.
					</p>

					<h3 className="text-xl font-semibold mb-3">11. Klachten en Geschillen</h3>
					<p className="mb-6">
						Indien u ontevreden bent over de geleverde coaching of een andere dienst, kunt u een klacht indienen via het contactformulier op onze website of per e-mail naar info@hartenzielcoaching.com. Wij zullen elke klacht zorgvuldig onderzoeken en proberen tot een oplossing te komen.
					</p>

					<h3 className="text-xl font-semibold mb-3">12. Contactinformatie</h3>
					<div className="mb-6">
						<ul className="space-y-2 text-black">
							<li>Ernst Casimirlann 132</li>
							<li>6824SE Arnhem</li>
							<li>Nederland</li>
							<li>info@bmhzorg.nl</li>
							<li>KVK: 83796304</li>
							<li>Vestigingsnummer: 000049946854</li>
						</ul>
					</div>

					<p className="mt-8">
						Door gebruik te maken van onze diensten gaat u akkoord met de bovenstaande algemene voorwaarden.
						Wij danken u voor uw vertrouwen in Hart En Ziel Coaching en kijken ernaar uit om samen met u aan uw persoonlijke groei te werken!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}
