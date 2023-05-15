const { defaultCmdOptions, getCmdOptions } = require("../../dist/cmdoptions");



test("getCmdOptions with wrong arg type", () => {
	expect(getCmdOptions(null)).toStrictEqual(defaultCmdOptions);
	expect(getCmdOptions(false)).toStrictEqual(defaultCmdOptions);
	expect(getCmdOptions("")).toStrictEqual(defaultCmdOptions);
	expect(getCmdOptions(20)).toStrictEqual(defaultCmdOptions);
});

test("getCmdOptions with no flags", () => {
	expect(getCmdOptions([])).toStrictEqual(defaultCmdOptions);
	expect(getCmdOptions(["foo"])).toStrictEqual(defaultCmdOptions);
	expect(getCmdOptions(["foo", "bar"])).toStrictEqual(defaultCmdOptions);
});
