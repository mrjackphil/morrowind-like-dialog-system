export default class Loader {
	constructor() {
		this.load = {
			"characters": this.loadCharacters
		};
	}

	loadCharacters(name) {

		if (typeof name === 'object' && name.length) {

			const charPromise = (string) => {
				return fetch(`assets/characters/${string}.json`)
					.then(r => r.json())
					.catch(err => {
						alert(`There is some problem with downloading "${string}.json"`);
						throw Error(err.message);
					});
			};

			let ar = [];
			for (const string in name) {
				ar.push(charPromise(name[string]));
			}

			return Promise.all(ar);
		}
	}

}