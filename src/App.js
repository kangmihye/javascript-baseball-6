import InputView from "./view/InputView.js";

class App {
	async play() {
		InputView.printGameStart();
		const inputNumber = await InputView.readNumber();
		console.log(inputNumber);
	}
}

export default App;
