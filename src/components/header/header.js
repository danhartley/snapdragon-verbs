import { h } from 'preact';
import style from './header.scss';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Choice, Language_NAV } from '../../logic/enums.js';
import { NavGroup } from '../elements/lists';

const Header = ({choice, onClickChangeChoice, language, onClickChangeLanguage, onReload}) => {

    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        setIsWideScreen(window.innerWidth >= 601);
    }, []);

    return (
        <header class={isWideScreen ? style.header : style.headerTall}>
            <div class={isWideScreen ? style.title : style.hide}><span>The Verb</span></div>		
            <nav class={isWideScreen ? style.singleLineNav : style.doubleLineNav}>
                <NavGroup items={Object.keys(Choice).map(key => Choice[key])} item={choice} navItemClickHandler={onClickChangeChoice}></NavGroup>
                <NavGroup items={Object.keys(Language_NAV).map(key => Language_NAV[key])} item={language} navItemClickHandler={onClickChangeLanguage} minWidth={'4rem'} isWideScreen={isWideScreen} onReload={onReload}></NavGroup> 
            </nav>
        </header>
    )
};

export default Header;
