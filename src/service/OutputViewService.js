const OutputViewService = {
	generateResultMessage: (result) => {
		let msg = "";
		if (result.ball) msg += "볼 ";
		if (result.strike) msg += "스트라이크";
		if (result.ball && result.strike) msg += "낫싱";

		return msg;
	},
};

export default OutputViewService;
