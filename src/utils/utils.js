import { Choice, Language, Pronoun_Display_PT, Pronoun_Display_ES } from '../logic/enums';

const shuffleArray = array => {

    if(!array || array.length === 0) return;

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return [ ...array ];
};

const getDisplayPronouns = language => {
    switch(language) {
        case Language.pt:
            return Object.keys(Pronoun_Display_PT).map(key => Pronoun_Display_PT[key]);
        case Language.es:
            return Object.keys(Pronoun_Display_ES).map(key => Pronoun_Display_ES[key]);

    }
};

const getLessonTitle = (choice, language) => {
    switch(language){
        case Language.pt:
            return choice === Choice.drills ? 'Portuguese verb drills' : 'Portuguese random verbs';
        case Language.es:
            return choice === Choice.drills ? 'Spanish verb drills' : 'Spanish random verbs';
    };
    
};

export const utils = {
    shuffleArray,
    getDisplayPronouns,
    getLessonTitle
}