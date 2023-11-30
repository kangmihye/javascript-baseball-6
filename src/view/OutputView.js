import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";
import OutputViewService from "../service/OutputViewService.js";

const OutputView = {
	printGameStart() {
		Console.print(OUTPUT_VIEW.startGame);
	},
	printResultMessage(result) {
		Console.print(OutputViewService.generateResultMessage(result));
	},
	printGameOver() {
		Console.print(OUTPUT_VIEW.printGameOver);
	},
	// ...
};

export default OutputView;
