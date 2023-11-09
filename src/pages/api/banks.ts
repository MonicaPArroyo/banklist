// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<BanksState | { error: string }>
) {
	try {
		const response = await fetch(
			'https://dev.obtenmas.com/catom/api/challenge/banks'
		);
		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Error al obtener los datos del servidor de origen',
		});
	}
}
