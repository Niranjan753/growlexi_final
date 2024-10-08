import React from 'react';
import Image from 'next/image';

const Clients: React.FC = () => {
	return (
		<div className="bg-gradient-to-b from-black via-gray-900 to-black py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] text-transparent bg-clip-text">
					Our Clients
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center">
					{['client1.png', 'client2.png', 'client3.png'].map((client, index) => (
						<div key={index} className="flex justify-center items-center">
							<div className="bg-gradient-to-br from-gray-100 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300">
								<Image
									src={`/${client}`}
									alt={`Client ${index + 1} Logo`}
									width={200}
									height={100}
									objectFit="contain"
									className="transition-all duration-300"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Clients;
