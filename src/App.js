import ViewController from "./controller/ViewController.js";

class App {
	async play() {
		ViewController.gameStart();
		await ViewController.playGame();
	}
}

export default App;
