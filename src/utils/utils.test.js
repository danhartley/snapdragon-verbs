import { utils } from './utils';

describe('test for utils', () => {
    let language;
    test('getLongPronouns should return array of pronouns specific to language', () => {
        language = 'pt';
        expect(utils.getLongPronouns(language)).toStrictEqual([ 'random pronoun', 'eu', 'tu', 'ela, ele, você', 'nós', 'vós', 'elas, eles, vocês']);
        language = 'es';
        expect(utils.getLongPronouns(language)).toStrictEqual(['random pronoun', 'yo', 'tú', 'ella, él', 'nosotros', 'vosotros', 'ellos']);
    });
});