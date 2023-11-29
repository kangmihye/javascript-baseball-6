import InputView from "../view/InputView.js";

const ViewController = {
	async gameStart() {
		InputView.printGameStart();
		const inputNumber = await InputView.readNumber();
		console.log(inputNumber);
	},
};

export default ViewController;
