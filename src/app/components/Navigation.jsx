"use client"
import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-white shadow-lg sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex items-center">
						<Heart className="h-8 w-8 text-blue-600" />
						<span className="ml-2 text-2xl font-bold text-gray-900">JeugdSteun</span>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:block">
						<div className="flex items-center space-x-8">
							<Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</Link>
							<a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Over Ons</a>
							<a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Diensten</a>
							<Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blog</Link>
							<a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">Contact</a>
						</div>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-600 hover:text-blue-600 transition-colors"
						>
							{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden py-4">
						<div className="flex flex-col space-y-4">
							<Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</Link>
							<a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Over Ons</a>
							<a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Diensten</a>
							<Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blog</Link>
							<a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:text-blue-700 transition-colors font-medium text-center">Contact</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}