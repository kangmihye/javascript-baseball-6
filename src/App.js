import ViewController from "./controller/ViewController.js";

class App {
	async play() {
		await ViewController.gameStart();
	}
}

export default App;
