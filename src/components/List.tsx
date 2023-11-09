import { RootState } from '@/store/slices';
import { useSelector } from 'react-redux';
import React from 'react';
import ListItem from './ListItem';
const List: React.FC = () => {
	const banks = useSelector((state: RootState) => state.banks);

	return (
		<ul role="list" className="flex flex-col justify-between gap-x-4">
			{banks &&
				banks.map((bank) => <ListItem key={bank.bankName} {...bank} />)}
		</ul>
	);
};

export default List;
