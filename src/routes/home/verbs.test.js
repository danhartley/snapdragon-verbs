import { h } from 'preact';
import { Verbs } from './verbs';
import { Drill } from '../../components/elements/drill';
import { shallow, mount } from 'enzyme';
import { Language, Choice } from '../../logic/enums';

describe.only('state of verbs on changing language or test type', () => {
    test('place holder', () => {
        expect(true).toBe(true);
    });
    let language, drill, choice, verbs;
    test('initial state', () => {
        language = Language.es;
        drill = { verb: 'ir'};
        drill = null;
        choice = Choice.random;
        let verbs = ['ir'];
        expect(true).toBe(true)
        const verbsComponent = mount(<Verbs language={language} drill={drill} choice={choice} verbs={verbs} />);
        expect(verbsComponent.props().choice).toBe(choice);
        expect(verbsComponent.props().language).toBe(language);
        expect(verbsComponent.contains(<Drill />)).toBe(false);
    });
});