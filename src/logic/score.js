export class Score {
    constructor(question, answer, key) {        
        this.clean = str => {
            if(str === undefined ) return '';
            let cleaned = str;
                cleaned = cleaned.trim();
                cleaned = cleaned.toLowerCase();
            return cleaned;
        };
        this.question = this.clean(question.value.to);
        this.answer = this.clean(answer.value);
        this.key = key;
    }
    isCorrect = () => {
        return this.question === this.answer;
    };
};