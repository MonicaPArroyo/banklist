type Bank = {
	bankName: string;
	description: string;
	age: number;
	url: string;
};
type BanksState = {
	banks: Bank[] | null;
};
