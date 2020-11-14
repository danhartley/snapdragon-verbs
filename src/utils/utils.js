import { Choice, Language, Pronoun_PT, Pronoun_ES, Tense, VerbGroup, Pronoun_Long_PT, Pronoun_Long_ES } from '../logic/enums';

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
    let pronouns;
    switch(language) {
        case Language.pt:
            pronouns = Object.keys(Pronoun_PT).map(key => Pronoun_PT[key]);
            break;
        case Language.es:
            pronouns = Object.keys(Pronoun_ES).map(key => Pronoun_ES[key]);
            break;    
    }
    return pronouns;
};

const getLongPronouns = language => {
    switch(language) {
        case Language.pt:
            return Object.keys(Pronoun_Long_PT).map(key => Pronoun_Long_PT[key]);
        case Language.es:
            return Object.keys(Pronoun_Long_ES).map(key => Pronoun_Long_ES[key]);

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

const getLesson = (lesson, language) => {
    lesson.updateProps({language: { from: Language.en, to: language }, tenses: [Tense.present] });
    return lesson;
};

const getSelectedPronoun = language => {
    switch(language){
        case Language.pt:
        return Pronoun_Long_PT[0];
        case Language.es:
        return Pronoun_Long_ES[0];
    }
};

const getVerbGroups = language => {
    switch(language) {
        case Language.pt:
            return Object.keys(VerbGroup).map(key => VerbGroup[key]);
        case Language.es:
            let groups = Object.keys(VerbGroup).map(key => VerbGroup[key]);
                groups = groups.filter(group => {
                    return group === VerbGroup.irregular_verbs 
                        || group === VerbGroup.all_verbs
                        || group === VerbGroup.preterite_irregular_verbs
                        || group === VerbGroup.future_irregular_verbs
                        || group === VerbGroup.imperfect_irregular_verbs
                });
            return groups;
    }
};

const getLessonDefaults = ({ lesson, choice, language, }) => {
    return { 
        lesson: getLesson(lesson, language), 
        title: getLessonTitle(choice, language),
        selectedPronoun: getSelectedPronoun(language),
        verbGroups: getVerbGroups(language)
     };
};

const getTensesByLanguage = language => {
    let tenses = Object.keys(Tense).map(key => Tense[key]);
    switch(language) {
        case Language.pt:
            tenses = tenses.filter(tense => tense !== Tense.past_perfect);
            tenses = tenses.filter(tense => tense !== Tense.past_anterior);
            tenses = tenses.filter(tense => tense !== Tense.future_perfect);
            tenses = tenses.filter(tense => tense !== Tense.perfect_subjunctive);
            tenses = tenses.filter(tense => tense !== Tense.pluperfect_subjunctive);
            tenses = tenses.filter(tense => tense !== Tense.future_perfect_subjunctive);
            break;
        case Language.es:
            // tenses = tenses.filter(tense => tense !== Tense.future_perfect_subjunctive);
            tenses = tenses.filter(tense => tense !== Tense.future_subjunctive);
            break;
        default:
            break;
    }
    return  tenses;
};

export const utils = {
    shuffleArray,
    getTensesByLanguage,
    getDisplayPronouns,
    getLongPronouns,
    getLessonTitle,
    getLessonDefaults
}