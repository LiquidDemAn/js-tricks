class Developer {
	constructor(name, birthDate, title, skills = []) {
		(this.name = name),
			(this.birthDate = birthDate),
			(this.title = title),
			(this.skills = skills);
	}

	addSkill(skill) {
		this.skills.push(skill);
	}

	get firstName() {
		return this.name.split(' ')[0];
	}
}

const john = new Developer('John Doe', '1985-04-08', 'Frontend Engineer', [
	'JS',
	'HTML',
]);

john.addSkill('CSS');

// JSON can't save function
const johnCopy = JSON.parse(JSON.stringify(john));
console.log(johnCopy.addSkill); // undefined
console.log(johnCopy.firstName); // undefined

// spread can't save function
const johnCopy2 = { ...john };
console.log(johnCopy2.addSkill); // undefined
console.log(johnCopy2.firstName); // undefined

// structuredClone can't save function
const johnCopy3 = structuredClone(john);
console.log(johnCopy3.addSkill); // undefined
console.log(johnCopy3.firstName); // undefined
