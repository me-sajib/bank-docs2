import React from 'react';
import { Building2 } from 'lucide-react';

export function Navigation() {
	return (
		<nav className="bg-blue-600 text-white sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Building2 className="h-8 w-8" />
						<span className="ml-2 text-xl font-bold">JeugdSteun</span>
					</div>
					<div className="hidden md:block">
						<div className="flex items-center space-x-4">
							<a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Home</a>
							<a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Over Ons</a>
							<a href="#services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Diensten</a>
							<a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Contact</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}