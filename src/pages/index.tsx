import List from '@/components/List';
import { RootState, setBanks } from '@/store/slices';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const dispatch = useDispatch();
	const banks = useSelector((state: RootState) => state.banks);

	useEffect(() => {
		// Verificar si ya tienes los bancos en el estado antes de hacer la solicitud
		if (!banks) {
			fetch('https://dev.obtenmas.com/catom/api/challenge/banks')
				.then((res) => res.json())
				.then((data) => {
					// Luego, utiliza el despachador para almacenar los datos en el estado
					dispatch(setBanks(data));
				});
		}
	}, [banks, dispatch]);

	return (
		<div>
			<List />
		</div>
	);
}
