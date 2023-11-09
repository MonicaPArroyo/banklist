import React from 'react';
const Layout: React.FC<{ children: any }> = ({ children }) => {
	return (
		<div className="min-h-full">
			<header className="bg-blue-900 shadow py-4">
				<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-200">
						Lista de Bancos
					</h1>
				</div>
			</header>
			<main
				style={{
					contain: 'content',
				}}
			>
				<div className="mx-auto my-4 max-w-2xl px-4 sm:px-6 lg:px-8">
					{children}
				</div>
			</main>
		</div>
	);
};

export default Layout;
