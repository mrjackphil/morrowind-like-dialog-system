export default class Store {
	constructor(){
		this.mutations = {
			setCharacters(state, data) {
				state.characters = data;
			},
			addTopic(state, element) {
				state.elements.topics.push(element);
			},
			setInterlocutor(state, string) {
				state.interlocutor = string;
			}
		};

		this.actions = {

		};

		this.state = {
			interlocutor: 'Jane',
			player: {
				topics: ['greetings', 'news']
			},
			elements: {
				game: document.querySelector('#game'),
				dialogBox: document.querySelector('#dialog-box'),
				topics: []
			},
			characters: {},
		};

		this.observers = {
			'functionName': ['element.update()']
		};
	}

	addListener(funcStrAndAr, component) {
		const add = (funcString) => {
			if ( !this.observers[funcString] ) this.observers[funcString] = [];

			this.observers[funcString].push(component);
		};

		if (typeof funcStrAndAr === 'string') {
			add(funcStrAndAr);
		} else if (Array.isArray(funcStrAndAr)) {
			funcStrAndAr.forEach( string => {
				if ( typeof string !== 'string' ) { 
					alert(`not corrent function name (${string}) in addListener function`); 
					return;
				} else {
					add(string);
				}
			});
		}

	}

	commit(mutation, options) {
		this.mutations[mutation](this.state, options);
		if (this.observers[mutation]) {
			this.observers[mutation].forEach( component => component.update() );
		}
	}
}