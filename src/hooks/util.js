//  传入一个object和一个关键字，可以获取该对象下所有与之匹配的key，并以【{}】的形式返回
function searchkey(obj, str) {
	console.log(obj);
	let result = [];
	for (const key in obj) {
		console.log(key);
		const element = obj[key];
		if (key.includes(str)) result.push({ key: element });
		if (typeof element === "object") searchkey(element, str);
	}

	console.log(result);
	// if (!result.length || !str || typeof obj !== "object") return "无匹配属性";
	// if (result.length === 1) return result[0];
	return result;
}
