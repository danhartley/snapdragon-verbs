import { Enumify } from 'enumify';

export class Option extends Enumify {
    static drill = 'DRILL';
    static random = 'RANDOM';
}

export class Mode extends Enumify {
    static textEntry = 'TEXT_ENTRY';
    static multipleChoice = 'MULTIPLE_CHOICE';
}

export class Language extends Enumify {
    static en = 'en';
    static pt = 'pt';
    static es = 'es';
}

export class Language_NAV extends Enumify {
    static pt = 'pt';
    static es = 'es';
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
export class Pronoun_Long_PT extends Enumify {
    static 0 = 'eu';
    static 1 = 'tu';
    static 2 = 'ela, ele, você';
    static 3 = 'nós';
    static 4 = 'vós';
    static 5 = 'elas, eles, vocês';
    static 6 = 'random pronoun';
}

export class Pronoun_ES extends Enumify {
    static 0 = 'yo';
    static 1 = 'tú';
    static 2 = 'ella';
    static 3 = 'nosotros';
    static 4 = 'vosotros';
    static 5 = 'ellos';
}

export class Pronoun_Long_ES extends Enumify {
    static 0 = 'yo';
    static 1 = 'tú';
    static 2 = 'ella, él';
    static 3 = 'nosotros';
    static 4 = 'vosotros';
    static 5 = 'ellos';
    static 6 = 'random pronoun';
}

export class DrillState extends Enumify {
    static intermediate = 'intermediate';
    static hideDrills = 'hide drills';
    static checkAnswers = 'Check answers';
    static nextDrill = 'Next drill';
    static drillsComplete = 'Try again?';
}

export class Tense extends Enumify {
    static present = 'present';
    static imperfect = 'imperfect';
    static preterite = 'preterite';
    static pluperfect = 'pluperfect';
    static future = 'future';
    static conditional = 'conditional';
    static past_perfect = 'past perfect';
    static past_anterior = 'past anterior';
    static future_perfect = 'future perfect';    
    
    static present_subjunctive = 'present subjunctive';
    static imperfect_subjunctive = 'imperfect subjunctive';
    static future_subjunctive = 'future subjunctive';
    
    static perfect_subjunctive = 'perfect subjunctive';
    static pluperfect_subjunctive = 'pluperfect subjunctive';
    // static future_perfect_subjunctive = 'future perfect subjunctive';
}

export class Choice extends Enumify {
    static drills = 'Verb drills';
    static random = 'Random verbs';
}

export class VerbGroup extends Enumify {
    static all_verbs = '100 random verbs';
    static irregular_verbs = 'irregular verbs';
    static common_regular_verbs = 'common regular verbs';
    static imperfect_irregular_verbs = 'imperfect irregular verbs';
    static preterite_irregular_verbs = 'preterite irregular verbs';
    static future_irregular_verbs = 'future irregular verbs';
    static conditional_irregular_verbs = 'conditional irregular verbs';
    static subjunctive_irregular_verbs = 'subjunctive irregular verbs';
}