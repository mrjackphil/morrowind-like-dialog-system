export class Character {
	constructor(data) {
		this.data = {
			"name": "Example bot",
			"topics": [
				{
					"id": "greetings",
					"title": "Test greetings!",
					"text": "Hi. I'm example hello bot!"
				},
				{
					"id": "news",
					"title": "Test new news?",
					"text": "News bot accomplished"
				}
			]
		};

		if (data) { this.data = data; }
	}

	static arrayToStoreObject(ar) {
		return ar.map( json => {
			const char = new Character(json);
			return {[char.data.name]: char}; 
		})
		.reduce((acc, cur) => {
			acc = Object.assign(acc, cur);
			return acc;
		}, {});


	}
}