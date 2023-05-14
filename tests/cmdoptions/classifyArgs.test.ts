const { classifyArgs } = require("../../dist/cmdoptions");



test("classifyArgs with bad args", () => {
	expect(classifyArgs(null)).toStrictEqual([[], []]);
	expect(classifyArgs()).toStrictEqual([[], []]);
	expect(classifyArgs(20)).toStrictEqual([[], []]);
	expect(classifyArgs(false)).toStrictEqual([[], []]);
	expect(classifyArgs("foo")).toStrictEqual([[], []]);
	expect(classifyArgs({})).toStrictEqual([[], []]);
	expect(classifyArgs([])).toStrictEqual([[], []]);
});

test("classifyArgs with single arg", () => {
	expect(classifyArgs(["foo"])).toStrictEqual([[], ["foo"]]);
	expect(classifyArgs(["-v"])).toStrictEqual([["-v"], []]);
});

test("classifyArgs with no flags", () => {
	expect(classifyArgs([])).toStrictEqual([[], []]);
	expect(classifyArgs(["foo"])).toStrictEqual([[], ["foo"]]);
	expect(classifyArgs(["foo", "bar"])).toStrictEqual([[], ["foo", "bar"]]);
});

test("classifyArgs with no non-flags", () => {
	expect(classifyArgs(["--foo"])).toStrictEqual([["--foo"], []]);
	expect(classifyArgs(["-a", "--foo"])).toStrictEqual([["-a", "--foo"], []]);
	expect(classifyArgs(["-a", "-b", "--foo"])).toStrictEqual([["-a", "-b", "--foo"], []]);
});

test("classifyArgs with multiple args", () => {
	expect(classifyArgs(["foo", "-v"])).toStrictEqual([["-v"], ["foo"]]);
	expect(classifyArgs(["--foo", "-v"])).toStrictEqual([["--foo", "-v"], []]);
	expect(classifyArgs(["bar", "--version"])).toStrictEqual([["--version"], ["bar"]]);
});
