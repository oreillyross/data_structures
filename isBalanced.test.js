const { isBalanced } = require('./isBalanced')

describe('isBalanced', () => {
	it('returns true for a balanced string', () => {
		expect(isBalanced('{as()[]}')).toBeTruthy()
	})
})