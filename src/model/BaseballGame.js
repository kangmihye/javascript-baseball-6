import baseballRandomNumberGenerator from "../service/baseballRandomNumberGenerator.js";

/**
 * 게임을 관리하는 클래스
 */
class BaseballGame {
	#computerNumbers;

	constructor() {
		this.#computerNumbers = baseballRandomNumberGenerator(); //[1,2,3]
	}

	compareNumbers(userNumbers, result) {
		this.#computerNumbers.forEach((num, idx) => {
			if (num === userNumbers[idx]) return (result.ball += 1);
			if (userNumbers.includes(num)) return (result.strike += 1);
		});

		return result;
	}
	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 */
	retry() {}
}

export default BaseballGame;

// console.log(new BaseballGame().compareNumbers([1, 2, 3], { strike: 0, ball: 0 }));
