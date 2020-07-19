import add from './index';

describe('add', () => {
	it('combines two numbers', () => {
		const result = add(1, 2);
		expect(result).toBe(3);
	});
});
