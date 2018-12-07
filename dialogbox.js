/* global store */

import Topic from './topic.js';

export default class DialogBox {
	constructor(titleEl, topicsEl, answerEl) {
		this.elements = {
			title: titleEl,
			topics: topicsEl,
			answer: answerEl
		};

		this.init();
	}

	init() {
		store.addListener('setInterlocutor', this);
		this.elements.topics.addEventListener('click', (event) => {
			if ( event.target.classList.contains('topic') ) {
				this.clickOnTopic(event.target);
			}
		});
	}

	clickOnTopic(topicEl) {
		const pers = store.state.interlocutor;
		const topicName = topicEl.innerHTML;
		const answer = store.state.characters[pers].data.topics.filter( topic => topic.title === topicName);

		this.elements.answer.innerHTML = answer[0].text;
	}

	showTitle() { this.elements.title.style.display = 'block'; }

	hideTitle() { this.elements.title.style.display = 'none'; }

	update() {
		const chars = store.state.characters;
		const charName = store.state.interlocutor;

		this.elements.title.innerHTML = charName;

		// Load topics
		this.elements.topics.innerHTML = '';

		const topicsArray = chars[charName].data.topics;
		if (!topicsArray) throw Error(`There is no topics for character ${charName}.`);

		for (const _i in topicsArray) {
			new Topic( this.elements.topics, null, topicsArray[_i] );
			// const topicEl = this.elements.topics.appendChild( document.createElement( 'div' ) );

			// topicEl.classList.add('topic');
			// topicEl.innerHTML += topicsArray[_i].title;
		}
	}

}