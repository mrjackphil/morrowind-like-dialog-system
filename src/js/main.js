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
			.then( ar => Character.arrayToStoreObject(ar) )
			.then( obj => {
				store.commit('setCharacters', obj);

				if (store.state.characters.Jane) {
					this.dialogBox.update();
				}

			})
			.catch( er => { throw Error(er.message); } );
	}

}

window.store = new Store();
window.game = new Game();