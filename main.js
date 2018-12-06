import { Character } from './dialog.js';

class Game {
	constructor(){
		this.el = document.querySelector('#game');
		this.dialogBox = document.querySelector('#dialog-box')
		this.initCharacters();
	}

	initCharacters() {
		const bot = new Character();
		const pre = this.dialogBox.appendChild( document.createElement('pre') );
		const link = 

		pre.innerHTML = bot.data.name;
		bot.data.topics.forEach( topic => {
			pre.innerHTML += '\n';
			pre.innerHTML += topic.title;
		});
	}
}

const game = new Game();