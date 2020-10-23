import { SimpleList } from './lists';

export const Conjugations = ({verb,conjugations}) => {
    return (
        <>
        <div id="conjugations" class="conjugations">            
            <div class="columns">
                <h2>{verb}</h2>
            </div>
        </div>
        </>
    )
};