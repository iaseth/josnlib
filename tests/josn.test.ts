const { josn } = require("../dist");



test("demoTest", () => {
	expect(josn(null)).toBe(null);
	expect(josn(null, [])).toBe(null);
	expect(josn(null, ["foo"])).toBe(null);
	expect(josn(400, ["foo"])).toBe(400);
});
