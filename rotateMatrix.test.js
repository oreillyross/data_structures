const { rotateMatrix } = require("./rotateMatrix")

const matrix = [[1,2,3],
                [4,5,6],
		[7,8,9]
	       ]
const ninetyDegMatrix = [[7,4,1],
                         [8,5,2],
			 [9,6,3]
			]	       
describe("RotateMatrix", () => {
	it("produces a matrix turned 90degrees", () => {
		expect(rotateMatrix(matrix)).toEqual(ninetyDegMatrix)
	})
})