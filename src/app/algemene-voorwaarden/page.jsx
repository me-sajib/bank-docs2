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
						Welkom bij Jeugdsteun. Door gebruik te maken van onze coachingdiensten, gaat u akkoord met de onderstaande algemene voorwaarden. Deze voorwaarden zijn van toepassing op alle coachingservices die worden aangeboden door Jeugdsteun, gevestigd in Nederland.
					</p>

					<h3 className="text-xl font-semibold mb-3">1.  Identiteit van de Dienstverlener</h3>
					<p className="mb-6">
						Jeugdsteun is een praktijk die zich richt op het begeleiden van mensen naar een gezondere, positievere en doelgerichte levensstijl. Wij bieden persoonlijke ondersteuning via telefonische sessies, videogesprekken en 1 op 1 ontmoetingen.
					</p>

					<h3 className="text-xl font-semibold mb-3">2. Diensten</h3>
					<p className="mb-6">
						Jeugdsteun biedt ondersteuning op het gebied van gezondheid, mindset, persoonlijke ontwikkeling én loopbaanbegeleiding. Wij helpen bij het opstellen van documenten zoals cv’s en sollicitatiebrieven, en bieden begeleiding bij het vinden van werk. De sessies worden gehouden via telefoon, videocall of persoonlijke 1-op-1 afspraken.
					</p>

					<h3 className="text-xl font-semibold mb-3">3. Sessie-informatie					</h3>
					<p className="mb-6">
						Elke sessie wordt gehouden via telefoon, videogesprek of in een persoonlijke 1-op-1 setting. De duur van een sessie is variabel, maar meestal tussen de 30 en 60 minuten. De kosten worden per minuut of per sessie berekend, afhankelijk van het afgesproken tarief. Na afloop ontvangt de klant een factuur en betaalverzoek, welke binnen de gestelde termijn moet worden voldaan.
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
						Jeugdsteun behandelt alle klantinformatie vertrouwelijk. Tijdens de coaching sessies kunnen persoonlijke gegevens en vertrouwelijke informatie gedeeld worden. Deze informatie zal niet zonder toestemming van de klant worden gedeeld met derden, tenzij wettelijk verplicht.
					</p>

					<h3 className="text-xl font-semibold mb-3">7. Aansprakelijkheid</h3>
					<p className="mb-6">
						Jeugdsteun is niet aansprakelijk voor schade, verlies of letsel die voortkomt uit de coaching sessies, tenzij sprake is van opzet of grove nalatigheid. De klant is zelf verantwoordelijk voor het implementeren van de geboden adviezen en voor het nemen van beslissingen op basis van de coaching.
					</p>

					<h3 className="text-xl font-semibold mb-3">8. Intellectuele Eigendom</h3>
					<p className="mb-6">
						Alle materialen, documenten, en inhoud verstrekt door Jeugdsteun zijn beschermd door auteursrechten en mogen niet zonder schriftelijke toestemming worden gedeeld, verspreid of gekopieerd.
					</p>

					<h3 className="text-xl font-semibold mb-3">9. Wijzigingen in de Algemene Voorwaarden</h3>
					<p className="mb-6">
						Jeugdsteun behoudt zich het recht voor om deze algemene voorwaarden op elk moment te wijzigen. Wijzigingen worden tijdig via de website van Jeugdsteun en per e-mail aan klanten bekendgemaakt.
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
							<li>Ernst Casimirlaan 132</li>
							<li>6824SE Arnhem</li>
							<li>Nederland</li>
							<li>info@bmhzorg.nl</li>
							<li>KVK: 83796304</li>
							<li>Vestigingsnummer: 000049946854</li>
						</ul>
					</div>

					<p className="mt-8">
						Door gebruik te maken van onze diensten gaat u akkoord met de bovenstaande algemene voorwaarden.
						Wij danken u voor uw vertrouwen in Jeugdsteun en kijken ernaar uit om samen met u aan uw persoonlijke groei te werken!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}
