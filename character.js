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
}

export class Topic {
	constructor(el, data) {
		if (!el) alert('HTMLElement is not provided for Topic Class');
		if (!data) alert('Data is not provided for Topic Class');

		this.el = el;
		this.data = data;
	}
}