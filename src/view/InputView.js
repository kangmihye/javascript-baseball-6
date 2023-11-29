import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEW } from "../utils/Constants.js";

const InputView = {
	printGameStart() {
		Console.print(INPUT_VIEW.startGame);
	},
	async readNumber() {
		// const input = await Console.readLineAsync(INPUT_VIEW.askNumber);
		return await Console.readLineAsync(INPUT_VIEW.askNumber);
	},
	// ...
};

export default InputView;
