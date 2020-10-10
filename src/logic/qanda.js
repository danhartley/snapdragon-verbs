export class QandA {
    constructor(q, a) {
        this.clean = str => {
            let cleaned = str;
                cleaned = cleaned.trim();
                cleaned = cleaned.toLowerCase();
            return cleaned;
        };
        this.question = this.clean(q);
        this.answer = this.clean(a);
    };
}