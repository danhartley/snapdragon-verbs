export class Score {
    constructor(lesson, question, answer) {
        this.lesson = lesson;
        this.clean = str => {
            let cleaned = str;
                cleaned = cleaned.trim();
                cleaned = cleaned.toLowerCase();
            return cleaned;
        };
        this.question = this.clean(question.value.to);
        this.answer = this.clean(answer.value);
    };    
};