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
	}

	loadFromJSON(json) {

	}
}