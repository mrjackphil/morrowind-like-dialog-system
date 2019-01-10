export default class Topic {
	constructor(parent, el, data) {
		this.parent = parent;
		this.el = el;
		this.data = data;

		this.init();
	}

	init() {
		if (!this.el) this.el = this.createTopic();
		this.parent.appendChild(this.el);
		this.el.innerHTML = this.data.title;
	}

	createTopic() {
		const el = document.createElement('div');
		el.classList.add('topic');
		return el;
	}
}