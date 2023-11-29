import { ERROR } from "../utils/Constants.js";
import { isInvalidNumber } from "../utils/conditions.js";

export const validateNumbers = (input) => {
	if (isInvalidNumber(input)) throw new Error(ERROR.isInvalidNum);
};
