import { h } from 'preact';
import style from './header.scss';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Choice } from '../../logic/enums.js';

const Header = ({choice, onClickChangeChoice}) => {

    return (
        <header class={style.header}>
            <div><span>Veni Vidi Verbi</span></div>		
            <nav class="flex">
                <section class={choice === Choice.drills ? 'nav-block' : 'nav-block inactive' }><button id={Choice.drills} onClick={onClickChangeChoice} class="button-link-action">Verb drills</button></section>
                <section class={choice === Choice.drills ? 'nav-block inactive' : 'nav-block' }><button id={Choice.random} onClick={onClickChangeChoice} class="button-link-action">Random verbs</button></section>
            </nav>
        </header>
    )
};

export default Header;
