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

	expect(parseJsonString("{'foo': 20}")).toStrictEqual({foo: 20});
	expect(parseJsonString("[20, 10]")).toStrictEqual([20 ,10]);

	expect(parseJsonString("{'foo': 20} // foo")).toStrictEqual({foo: 20});
	expect(parseJsonString("[20, 10] // foo")).toStrictEqual([20 ,10]);

	expect(parseJsonString("{'foo': 20 // foo\n}")).toStrictEqual({foo: 20});
	expect(parseJsonString("[20, 10 // foo\n]")).toStrictEqual([20 ,10]);
});
