import JSON5 from 'json5';



export function parseJsonString (jsonText: string): any|null {
	try {
		const jsonObject = JSON.parse(jsonText);
		return jsonObject;
	} catch (e) {
		// JSON failed to parse the file
		// means the file might be JSON5
		try {
			const json5Object = JSON5.parse(jsonText);
			return json5Object;
		} catch (error) {
			// JSON and JSON5 both failed to parse the file
			return null;
		}
	}
}
