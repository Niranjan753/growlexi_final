import React from 'react';
import Image from 'next/image';

const Clients: React.FC = () => {
	return (
		<div className="bg-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
					Our Clients
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="col-span-1 flex justify-center items-center">
						<Image
							src="/client_!.webp"
							alt="Client 1 Logo"
							width={200}
							height={100}
							objectFit="contain"
						/>
					</div>
					<div className="col-span-1 flex justify-center items-center">
						<Image
							src="/client_2.webp"
							alt="Client 2 Logo"
							width={200}
							height={100}
							objectFit="contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
