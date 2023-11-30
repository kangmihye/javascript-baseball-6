import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import inputErrorHandler from "../service/inputErrorHandler.js";
import { validateNumbers, validateReplayingNumber } from "../service/validateInput.js";
import InputViewService from "../service/InputViewService.js";
import BaseballGame from "../model/BaseballGame.js";

const ViewController = {
	gameStart() {
		OutputView.printGameStart();
	},

	async getUserNumber() {
		const inputNumber = await inputErrorHandler(InputView.readNumber, validateNumbers);
		const parsedNumber = InputViewService.parseInput(inputNumber);
		console.log("유저", parsedNumber);
		return parsedNumber;
	},

	async playGame() {
		const baseballGame = new BaseballGame();
		let result = { strike: 0, ball: 0 };

		while (1) {
			result = { strike: 0, ball: 0 };
			const userNum = await ViewController.getUserNumber();
			result = baseballGame.compareNumbers(userNum, result);
			OutputView.printResultMessage(result);

			if (result.strike === 3) break;
		}
		OutputView.printGameOver();

		await ViewController.replayGame();
	},

	async replayGame() {
		const inputNumber = await inputErrorHandler(InputView.readReplayingGame, validateReplayingNumber);
		if (inputNumber === "1") ViewController.playGame();
	},
};

export default ViewController;
