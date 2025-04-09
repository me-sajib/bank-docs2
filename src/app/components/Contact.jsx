import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
	return (
		<div id="contact" className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-12 text-black">Contact</h2>
				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-semibold mb-4 text-black">Neem Contact Op</h3>
							<p className="text-gray-600 mb-6">
								Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op.
								We staan klaar om u te helpen.
							</p>
						</div>
						<div className="space-y-4">
							<div className="flex items-center">
								<MapPin className="h-6 w-6 text-blue-600" />
								<span className="ml-3 text-black">Hoofdstraat 123, 1234 AB Amsterdam</span>
							</div>
							<div className="flex items-center">
								<Phone className="h-6 w-6 text-blue-600" />
								<span className="ml-3 text-black">020 - 123 4567</span>
							</div>
							<div className="flex items-center">
								<Mail className="h-6 w-6 text-blue-600" />
								<span className="ml-3 text-black">info@jeugdsteun.nl</span>
							</div>
							<div className="flex items-center">
								<Clock className="h-6 w-6 text-blue-600" />
								<span className="ml-3 text-black">Maandag - Vrijdag: 9:00 - 17:00</span>
							</div>
						</div>
					</div>
					<div className="bg-white p-8 rounded-lg shadow-md">
						<form className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
								<input
									type="text"
									className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									placeholder="Uw naam"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
								<input
									type="email"
									className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									placeholder="uw.email@voorbeeld.nl"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
								<input
									type="text"
									className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									placeholder="Onderwerp van uw bericht"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
								<textarea
									rows={4}
									className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									placeholder="Schrijf uw bericht hier..."
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
							>
								Verstuur Bericht
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}