import { createMemo, createSignal, onMount } from "solid-js";
import styles from "./styles.module.scss";

export default function Starter() {

	const [isVisible, setVisible] = createSignal(false);
	const [ref, setRef] = createSignal<HTMLDivElement>();
	onMount(() => {
		const setScroll = () => {
			const rect = ref()?.getBoundingClientRect();
			console.log(rect);
			if (!rect) return;
			setVisible(rect.top < window.innerHeight - 350);
		}
		document.addEventListener("scroll", setScroll);
		return () => document.removeEventListener("scroll", setScroll);
	})

	return (
		<section class={styles.starter} ref={setRef}>
			<p class={styles.intro}>Web Scrobbler is a browser extension created for people who listen to music online through their browser, and would like to keep an updated playback history using scrobbling services, such as Last.fm, Libre.fm and ListenBrainz.</p>
			<h2>Want to get started?</h2>
			<ol class={isVisible() ? styles.active : ""}>
				<li>
					<h3>Install the extension</h3>
					<p>Download and install the extension for your browser. You can use the download buttons 
						<a href="#header">above</a>
					.</p>
				</li>
				<li>
					<h3>Sign in to your accounts</h3>
					<p>Open the extension options, and go to the "Accounts" section, then sign in to a scrobbling service you want to use.</p>
				</li>
				<li>
					<h3>Start listening to music!</h3>
					<p>Just open any of websites supported (e.g. 
						<a href="https://open.spotify.com/" target="_blank" rel="noopener noreferer">Spotify</a>
					) and start listening to music.</p>
				</li>
			</ol>
		</section>
	)
}