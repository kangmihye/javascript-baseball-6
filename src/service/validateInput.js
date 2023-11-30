import { ERROR } from "../utils/Constants.js";
import { isInvalidNumber, isDuplicated, isInvalidSelection } from "../utils/conditions.js";

export const validateNumbers = (input) => {
	if (isInvalidNumber(input)) throw new Error(ERROR.isInvalidNum);
	if (isDuplicated(input)) throw new Error(ERROR.isDuplicated);
};

export const validateReplayingNumber = (input) => {
	if (isInvalidSelection(input)) throw new Error(ERROR.isInvalidNum);
};
