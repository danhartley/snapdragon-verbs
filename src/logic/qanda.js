export class QandA {
    constructor(q, a) {
        this.clean = str => {
            let cleaned = str;
                cleaned = cleaned.trim();
                cleaned = cleaned.toLowerCase();
            return cleaned;
        };
        this.q = this.clean(q);
        this.a = this.clean(a);
    };
}