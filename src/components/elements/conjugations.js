import { ConjugationList } from './lists';
import { Tense } from '../../logic/enums.js'

export const Conjugations = ({drill}) => {
    let tenses = Object.keys({ ...Tense });
        tenses = tenses.map(t => t.replace('_', ' '));
    return (
        <>
        <div id="conjugations" class="conjugations-container">            
            <section class="flex drills">
                <h2>
                    <span><a href="#app">{drill.verb}</a><a/></span><span class="translation">{drill.translation}</span>
                </h2>
            </section>
            <section class="conjugations">
            {                
                tenses.map(tense => {
                    return <div>
                        <h5>{tense}</h5>
                        <div class="margin-left">
                            <ConjugationList items={drill.conjugations[tense]} />
                        </div>
                    </div>
                })
            }
            </section>
        </div>
        </>
    )
};