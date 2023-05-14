const { defaultCmdOptions, getCmdOptions } = require("../../dist/cmdoptions");



test("getCmdOptions", () => {
	expect(getCmdOptions(null)).toStrictEqual(defaultCmdOptions);
});
