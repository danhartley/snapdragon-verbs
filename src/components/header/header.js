import style from './header.scss';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Choice } from '../../logic/enums.js';

const Header = ({choice, onClickChangeChoice}) => {

    return (
        <header class={style.header}>
            <div><span>Veni Vidi Verbi</span></div>		
            <nav class="flex">
                <section class={choice === Choice.drills ? 'banner-block' : 'banner-block inactive' }><button id={Choice.drills} onClick={onClickChangeChoice} class="button-link-action">Portuguese verb drills</button></section>
                <section class={choice === Choice.drills ? 'banner-block inactive' : 'banner-block' }><button id={Choice.random} onClick={onClickChangeChoice} class="button-link-action">Portuguese random verbs</button></section>
            </nav>
        </header>
    )
};

export default Header;
