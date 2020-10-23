import { ConjugationList } from './lists';

export const Conjugations = ({drill}) => {
    const keys = Object.keys(drill.conjugations).filter(key => key !== 'i');
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
                
                keys.map(key => {                        
                    return <div>
                        <h5>{key}</h5>
                        <div class="margin-left">
                            <ConjugationList items={drill.conjugations[key]} />
                        </div>
                    </div>
                })                    
            }
            </section>
        </div>
        </>
    )
};