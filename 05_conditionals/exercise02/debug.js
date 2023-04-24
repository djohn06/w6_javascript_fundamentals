const isValidLength = (phoneNumber) => {
	const validLength = 11;
	if (phoneNumber.length === validLength) {
			return true;
	} else {
			return false;
	}
}

module.exports = isValidLength;

// Correction made:
// 1) Included a 'return' within the 'if' conditionals.
// 2) Also added === instead of == since triple equal is supposedly
// 		more accurate and better practice.