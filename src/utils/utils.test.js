import { utils } from './utils';

describe.only('test for utils', () => {
    let language;
    test('getLongPronouns should return array of pronouns specific to language', () => {
        language = 'pt';
        expect(utils.getLongPronouns(language)).toStrictEqual(['eu', 'tu', 'ela, ele, você', 'nós', 'vós', 'elas, eles, vocês', 'random pronoun']);
        language = 'es';
        expect(utils.getLongPronouns(language)).toStrictEqual(['yo', 'tú', 'ella, él', 'nosotros', 'vosotros', 'ellos', 'random pronoun']);
    });
});