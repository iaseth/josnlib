const { parseJsonString } = require("../dist/parseJsonString");



test("parseJsonString with non-strings", () => {
	expect(parseJsonString(null)).toBe(null);
	expect(parseJsonString(true)).toBe(null);
	expect(parseJsonString(false)).toBe(null);
	expect(parseJsonString()).toBe(null);

	expect(parseJsonString([])).toBe(null);
	expect(parseJsonString({})).toBe(null);
});

test("parseJsonString with bad strings", () => {
	expect(parseJsonString("")).toBe(null);
	expect(parseJsonString("foo")).toBe(null);
	expect(parseJsonString("{foo}")).toBe(null);
});

test("parseJsonString with good strings", () => {
	expect(parseJsonString("{}")).toStrictEqual({});
	expect(parseJsonString("[]")).toStrictEqual([]);
});
