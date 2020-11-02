import { h } from 'preact';
import Header from './header';
import { NavGroup } from '../../components/elements/lists';
import { shallow, mount } from 'enzyme';

describe('initial test of the header', () => {
	test('Header renders app name', () => {
        const header = mount(<Header />);
        expect(header.find('span').text()).toBe('The Verb');
        expect(header.find('div').get(0).props.className).toBe('title');
    });
    test('Header should hide title on a narrow device', () => {
        global.innerWidth = 300;
        global.dispatchEvent(new Event('resize'));
        const header = mount(<Header />);
        expect(header.find('div').get(0).props.className).toBe('hide');
    });
    test('Header should display nav on one line', () => {
        global.innerWidth = 601;
        global.dispatchEvent(new Event('resize'));
        const header = mount(<Header />);
        expect(header.find('nav').get(0).props.className).toBe('singleLineNav');
    });
    test('Header should display nav on two lines on a narrow device', () => {
        global.innerWidth = 300;
        global.dispatchEvent(new Event('resize'));
        const header = mount(<Header />);
        expect(header.find('nav').get(0).props.className).toBe('doubleLineNav');
    });
    test('NavGroup renders language options', () => {
        const languageNav = shallow(<NavGroup item={'pt'} items={['pt', 'es']} />);
        expect(languageNav.find('button').first().text()).toBe('pt');
    });
});
