// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [hide_First, first] = data.lists[0];
const [hide_Second, second] = data.lists[1];
const [hide_Third, third] = data.lists[2];

// create new var for new array with previous array data
// const result = [10, 12, 14, 5, 7 , 13, 11, 15, 4, 8, 6, 2, 1, 3, 9]

const result = []

const extractBiggest = () => {
	let first_Value = first[first.length -1]
	let second_Value = second[second.length -1]
	let third_Value = third[third.length -1]

	const highest = Math.max(first_Value || 0,second_Value || 0,third_Value || 0)
	if (first_Value == highest) {
		return first.pop()
	} else if (second_Value == highest) {
		return second.pop()
	} else {
		return third.pop()
	}

}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)