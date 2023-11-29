import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";
import OutputViewService from "../service/OutputViewService.js";

const OutputView = {
	printResultMessage(result) {
		Console.print(OutputViewService.generateResultMessage(result));
	},
	// ...
};

export default OutputView;
