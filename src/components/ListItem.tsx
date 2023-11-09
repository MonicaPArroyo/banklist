import Image from 'next/image';
import React from 'react';
const ListItem: React.FC<Bank> = ({ bankName, description, age, url }) => {
	return (
		<li className="bg-blue-200 shadow-lg overflow-hidden  m-2 rounded-3xl">
			<div className="grid grid-cols-[auto_minmax(0,100px)] gap-x-4 m-4 items-center">
				<div>
					<h3 className="text-lg leading-6 font-medium text-blue-900">
						{bankName}
					</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-900">
						{description}
					</p>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						{age}
					</p>
				</div>
				<div className="w-px-100 h-px-100">
					<Image
						src={url}
						alt={`Logo de ${bankName}`}
						width={100}
						height={100}
						className="overflow-hidden rounded-2xl object-cover object-center min-h-auto min-w-full "
					/>
				</div>
			</div>
		</li>
	);
};

export default ListItem;
