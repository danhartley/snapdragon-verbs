import { h } from 'preact';
import style from './footer.scss';

const Footer = () => (
	<footer id="footer" class={style.footer}>
		<div class="flex">
            <span>Copyright © Daniel Hartley. All rights reserved.</span>
            <span><a target="_blank" href="mailto:danhartleybcn@gmail.com?subject=Verbs!">Contact</a></span>
        </div>
	</footer>
);

export default Footer;
