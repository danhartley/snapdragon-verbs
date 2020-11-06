import { Language } from '../../logic/enums';
import { compareActualConjugationWithRegularInfConjugation } from './conjugations';

describe.only('find deviation from regular conjugation', () => {
    let actual, inf, language, received, expected;
    test('es expect no deviation for regular present tense', async () => {
        actual = {
            "i": "hablar",
            "present": [
              "hablo",
              "hablas",
              "habla",
              "hablamos",
              "habláis",
              "hablan"
            ]};
        inf = 'hablar';
        expected = { present: [
            {
                form: "hablo",
                isIrregular: false
            },
            {
                form: "hablas",
                isIrregular: false
            },
            {
                form: "habla",
                isIrregular: false
            },
            {
                form: "hablamos",
                isIrregular: false
            },
            {
                form: "habláis",
                isIrregular: false
            },
            {
                form: "hablan",
                isIrregular: false
            }
        ]};
        language = Language.es;
        received = await compareActualConjugationWithRegularInfConjugation({actual,inf,language});
        expect(received).toStrictEqual(expected);
    });
    test.only('es expect deviation for regular past anterior tense', async () => {
        actual = {
            "i": "hablar",
            participle: "hablado",
            "past anterior": [
              "hube hablado",
              "hubiste hablado",
              "hubo hablado",
              "hubimos hablado",
              "hubisteis hablado",
              "hubieron hablado"
            ]};
        inf = 'hablar';
        expected = {
            "past anterior": [
              {
                  form: "hube hablado",
                  isIrregular: false
              },
              {
                  form: "hubiste hablado",
                  isIrregular: false
              },
              {
                  form: "hubo hablado",
                  isIrregular: false
              },
              {
                  form: "hubimos hablado",
                  isIrregular: false
              },
              {
                  form: "hubisteis hablado",
                  isIrregular: false
              },
              {
                  form: "hubieron hablado",
                  isIrregular: false
              }
            ]};
        language = Language.es;
        received = await compareActualConjugationWithRegularInfConjugation({actual,inf,language});
        expect(received).toStrictEqual(expected);
    });
});