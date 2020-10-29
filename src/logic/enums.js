import { Enumify } from 'enumify';

export class Option extends Enumify {
    static drill = 'DRILL';
    static translation = 'TRANSLATION';
}

export class Mode extends Enumify {
    static textEntry = 'TEXT_ENTRY';
    static multipleChoice = 'MULTIPLE_CHOICE';
}

export class Language extends Enumify {
    static EN = 'en';
    static PT = 'pt';
}

export class Pronoun_EN extends Enumify {
    static 0 = 'I';
    static 1 = 'you';
    static 2 = 'she, he, it';
    static 3 = 'we';
    static 4 = 'you';
    static 5 = 'they';
}

export class Pronoun_PT extends Enumify {
    static 0 = 'eu';
    static 1 = 'tu';
    static 2 = 'ela';
    static 3 = 'nós';
    static 4 = 'vós';
    static 5 = 'elas';
}

export class DrillState extends Enumify {
    static intermediate = 'intermediate';
    static hideDrills = 'hide drills';
    static checkAnswers = 'Check answers';
    static nextDrill = 'Next drill';
    static drillsComplete = 'All done!';
}

export class Tense extends Enumify {
    static present = 'present';
    static imperfect = 'imperfect';
    static preterite = 'preterite';
    static pluperfect = 'pluperfect';
    static future = 'future';
    static conditional = 'conditional';
    static present_subjunctive = 'present subjunctive';
    static imperfect_subjunctive = 'imperfect subjunctive';
    static future_subjunctive = 'future subjunctive';
}

export class Choice extends Enumify {
    static drills = 'drills';
    static random = 'random';
}

export class VerbGroup extends Enumify {
    static all_verbs = '100 random verbs';
    static irregular_verbs = 'irregular verbs';
    static common_regular_verbs = 'common regular verbs';
}