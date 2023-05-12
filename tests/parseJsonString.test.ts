const { parseJsonString } = require("../dist/parseJsonString");



test("parseJsonString", () => {
	expect(parseJsonString(null)).toBe(null);
	expect(parseJsonString("foo")).toBe(null);
	expect(parseJsonString("")).toBe(null);
	expect(parseJsonString([])).toBe(null);
});
