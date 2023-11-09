import List from '@/components/List';
import { RootState, setBanks } from '@/store/slices';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const dispatch = useDispatch();
	const banks = useSelector((state: RootState) => state.banks);

	useEffect(() => {
		if (!banks) {
			fetch('/api/banks')
				.then((res) => res.json())
				.then((data) => {
					dispatch(setBanks(data));
				})
				.catch((error) => {
					console.error(
						'Error al obtener datos del servidor proxy',
						error
					);
				});
		}
	}, [banks, dispatch]);

	return (
		<div>
			<List />
		</div>
	);
}
