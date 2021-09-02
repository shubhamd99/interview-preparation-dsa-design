// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true
// because there are exactly 3 question marks between 6 and 4, and 3 question marks
// between 5 and 5 at the end of the string.

// If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

function QuestionsMarks(str) { 
    let res = false;
	for(let i = 0; i < str.length; i++){
		for(let j = i + 1; j<str.length; j++){
			if (Number(str[i]) + Number(str[j])===10) {
				res = true;
				if(str.slice(i,j).split('?').length - 1 < 3){
					return false
				}
			}
		}
	}
	return res;
}

module.exports = QuestionsMarks;
     