import { Language } from '../logic/enums';
import { utils } from './utils';

describe('test for utils', () => {
    let language;
    test('getLongPronouns should return array of pronouns specific to language', () => {
        language = 'pt';
        expect(utils.getLongPronouns(language)).toStrictEqual([ 'all pronouns', 'eu', 'tu', 'ela, ele, você', 'nós', 'vós', 'elas, eles, vocês']);
        language = 'es';
        expect(utils.getLongPronouns(language)).toStrictEqual(['all pronouns', 'yo', 'tú', 'ella, él', 'nosotros', 'vosotros', 'ellos']);
    });
    test('getDisplayPronouns should return array of pronouns specific to language', () => {
        language = 'es';
        expect(utils.getDisplayPronouns(language)).toStrictEqual(['yo', 'tú', 'ella', 'nosotros', 'vosotros', 'ellos']);
    });
});