const { findObjectKey } = require("../../dist/findsimilar");



test("findObjectKey", () => {
	expect(findObjectKey("foo", {})).toBe("foo");
});
