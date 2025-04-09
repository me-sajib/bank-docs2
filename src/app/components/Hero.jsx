import React from 'react';

export function Hero() {
	return (
		<div id="home" className="relative">
			<img
				src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80"
				alt="Young people collaborating"
				className="w-full h-[600px] object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">Ondersteuning voor Jongeren</h1>
					<p className="text-xl md:text-2xl mb-8 max-w-2xl">
						Wij bieden professionele begeleiding en ondersteuning voor jongeren die hulp nodig hebben
						bij het vinden van hun weg in de maatschappij.
					</p>
					<a
						href="#contact"
						className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
					>
						Neem Contact Op
					</a>
				</div>
			</div>
		</div>
	);
}