const { classifyArgs } = require("../../dist");



test("classifyArgs with bad args", () => {
	expect(classifyArgs(null)).toStrictEqual([[], []]);
	expect(classifyArgs()).toStrictEqual([[], []]);
	expect(classifyArgs(20)).toStrictEqual([[], []]);
	expect(classifyArgs(false)).toStrictEqual([[], []]);
	expect(classifyArgs("foo")).toStrictEqual([[], []]);
	expect(classifyArgs({})).toStrictEqual([[], []]);
	expect(classifyArgs([])).toStrictEqual([[], []]);
});

test("classifyArgs", () => {
	expect(classifyArgs(["foo"])).toStrictEqual([[], ["foo"]]);
	expect(classifyArgs(["-v"])).toStrictEqual([["-v"], []]);
	expect(classifyArgs(["foo", "-v"])).toStrictEqual([["-v"], ["foo"]]);
});
