import baseballRandomNumberGenerator from "../service/baseballRandomNumberGenerator.js";

class BaseballGame {
	#computerNumbers;

	constructor() {
		this.#computerNumbers = baseballRandomNumberGenerator(); //[1,2,3]
	}

	compareNumbers(userNumbers, result) {
		this.#computerNumbers.forEach((num, idx) => {
			if (num === userNumbers[idx]) return (result.strike += 1);
			if (userNumbers.includes(num)) return (result.ball += 1);
		});

		console.log("컴", this.#computerNumbers);
		return result;
	}
}

export default BaseballGame;
