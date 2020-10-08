import { Pronoun_EN, Pronoun_PT } from './enums.js';

export class Question {
    constructor(
        label = '',
        pronoun,
        value = {
            from: Pronoun_EN.I,
            to: Pronoun_PT.I
        }
    ) {     
        this.label = label;
        this.pronoun = pronoun;
        this.value = value;        
    };
}