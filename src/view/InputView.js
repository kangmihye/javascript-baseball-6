import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEW } from "../utils/Constants.js";

const InputView = {
	async readNumber() {
		return await Console.readLineAsync(INPUT_VIEW.askNumber);
	},
	async readReplayingGame() {
		return await Console.readLineAsync(INPUT_VIEW.askReplayingGame);
	},
	// ...
};

export default InputView;
