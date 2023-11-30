import ViewController from "./controller/ViewController.js";

class App {
	async play() {
		ViewController.gameStart();
		await ViewController.playGame();
		await ViewController.replayGame();
	}
}

export default App;
