const {Queue} = require('./structures/Queue')


describe("Queue implementation", () => {
	it("queue 2 elements then dequeue 2 elements", () => {
		const queue = new Queue()
		expect(queue.size()).toEqual(0)
		queue.enqueue(1)
		queue.enqueue(2)
		expect(queue.size()).toEqual(2)
		queue.dequeue()
		queue.dequeue()
	})
})