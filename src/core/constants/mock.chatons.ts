interface IChatons {
	id: string;
	name?: string;
	age: number;
	race: string;
	color: string;
	isVaccinated: boolean;
	ownerName?: string;
}

const Chatons: IChatons[] = [
	{
		id: '1a2b3c',
		name: 'Buddy',
		age: 5,
		race: 'Labrador Retriever',
		color: 'Yellow',
		isVaccinated: true,
		ownerName: 'John Doe'
	},
	{
		id: '4d5e6f',
		age: 3,
		race: 'German Shepherd',
		color: 'Black and Tan',
		isVaccinated: false
	},
	{
		id: '7g8h9i',
		name: 'Max',
		age: 2,
		race: 'Golden Retriever',
		color: 'Golden',
		isVaccinated: true,
		ownerName: 'Jane Smith'
	},
	{
		id: '0j1k2l',
		name: 'Bella',
		age: 4,
		race: 'Bulldog',
		color: 'Brindle',
		isVaccinated: true
	},
	{
		id: '3m4n5o',
		age: 1,
		race: 'Poodle',
		color: 'White',
		isVaccinated: false,
		ownerName: 'Alice Brown'
	},
	{
		id: '3m4n5o',
		age: 1,
		race: 'Alice Brown',
		color: 'White',
		isVaccinated: false,
		ownerName: 'Alice Brown'
	}
];


export default Chatons