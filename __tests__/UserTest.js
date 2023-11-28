import User from "../src/User.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

describe("숫자 야구 게임", () => {
	test("예외 테스트", async () => {
		// given
		const answers = ["1234"];

		mockQuestions(answers);

		// when & then
		const user = new User();

		await expect(() => user.getUserInput("number")).rejects.toThrow("[ERROR]");
	});
});
