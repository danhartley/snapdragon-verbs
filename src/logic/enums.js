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
    static EN = 'EN';
    static PT = 'PT';
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
    static 2 = 'ele, ela, você';
    static 3 = 'nós';
    static 4 = 'vós';
    static 5 = 'eles, elas, vocês';
}