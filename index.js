const simpleUser = {
	name: 'John Doe',
	age: 37,
	title: 'Developer',
	skills: {
		React: 1,
		Vue: 1,
		Angular: 2,
	},
};

//Not deep copy
const simpleUserCopy1 = { ...simpleUser };
const simpleUserCopy2 = Object.assign({}, simpleUser);
const simpleUserCopy3 = Object.create(simpleUser);
simpleUserCopy3.skills.Redux = 2

console.log(simpleUser)
console.log(simpleUserCopy2)

