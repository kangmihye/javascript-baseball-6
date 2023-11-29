import baseballRandomNumberGenerator from "../service/baseballRandomNumberGenerator.js";

/**
 * 게임을 관리하는 클래스
 */
class BaseballGame {
	#computerNum;

	constructor() {
		this.#computerNum = baseballRandomNumberGenerator();
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 */
	retry() {}
}
