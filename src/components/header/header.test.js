import { h } from 'preact';
import Header from './header';
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shallow(<Header />);
		expect(context.find('span').text()).toBe('Veni Vidi Verbi');
		// expect(context.find('Link').length).toBe(3);
	});
});
