const set = (key: string, value: any) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		console.log(e);
	}
};
const get = (key: string) => {
	const strData = localStorage.getItem(key);
	if (!strData) {
		return strData;
	}
	return JSON.parse(strData);
};
export default { get, set };
