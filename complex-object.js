const complexObject = {
	set: new Set([1, 2, 3]),
	map: new Map([[1, 2]]),
	regex: /foo/,
	error: new Error('Error!'),
};

//{ set: {}, map: {}, regex: {}, error: {} }
console.log(JSON.parse(JSON.stringify(complexObject)));

// Works only for Node 17+
const copy = structuredClone(complexObject);

// {set: Set(3), map: Map(1), regex: /foo/, error: Error: Error!}
console.log(copy);
