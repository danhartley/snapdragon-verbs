export class Score {
    constructor(question, answer) {
        this.clean = str => {
            let cleaned = str;
                cleaned = cleaned.trim();
                cleaned = cleaned.toLowerCase();
            return cleaned;
        };
        this.question = this.clean(question.value.to);
        this.answer = this.clean(answer.value);
    };
    isCorrect = () => {
        return this.question === this.answer;
    };
};