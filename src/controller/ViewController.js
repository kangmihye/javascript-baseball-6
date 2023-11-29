import InputView from "../view/InputView.js";
import inputErrorHandler from "./inputErrorHandler.js";
import { validateNumbers } from "./validateInput.js";

const ViewController = {
	async gameStart() {
		InputView.printGameStart();
	},

	async playGame() {
		const inputNumber = await inputErrorHandler(InputView.readNumber, validateNumbers);
		console.log(inputNumber);
	},
};

export default ViewController;
