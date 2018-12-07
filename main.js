import { Character } from './character.js';
import Store from './store.js';
import Loader from './loader.js';
import DialogBox from './dialogbox.js';

class Game {
	constructor(){
		this.dialogBox = new DialogBox(
			document.querySelector('#dName'),
			document.querySelector('#dTopics'),
			document.querySelector('#dAnswer')
		);

		this.loading();
	}

	loading() {
		
		const loader = new Loader();
		loader.load.characters(['Jane', 'John'])
			.then( ar => {
				return ar.map( json => {
					const char = new Character(json);
					return {[char.data.name]: char}; });
				})
			.then( ar => {
				const obj = ar.reduce((acc, cur) => {
					acc = Object.assign(acc, cur);
					return acc;
				}, {});

				store.commit('setCharacters', obj);

				if (store.state.characters.Jane) {
					// this.showCharacterDialog(store.state.elements.dialogBox, 'Jane');
					this.dialogBox.update();
					// this.dialogBox.hideTitle();
				}

			})
			.catch( er => { throw Error(er.message); } );
	}
}

window.store = new Store();
window.game = new Game();