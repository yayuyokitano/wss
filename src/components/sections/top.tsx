import styles from "./styles.module.scss";
import { WSIcon, ChromeIcon, FirefoxIcon, SafariIcon, EdgeIcon } from "../../assets/icons";
import { A } from "solid-start";

export default function Top() {
	return (
		<header class={styles.header}>
			<WSIcon class={styles.topIcon} />
			<h1 class={styles.shadowText}>Web Scrobbler</h1>
			<h2 class={styles.smallShadowText}>Scrobble music all around the web!</h2>
			<p class={styles.headerText}>Web Scrobbler helps music listeners to scrobble their online playback history.</p>
			<div class={styles.browserIcons}>
				<div class={styles.iconGroup}>
					<A href="https://chrome.google.com/webstore/detail/lastfm-scrobbler/hhinaapppaileiechjoiifaancjggfjm" title="Download on Chrome Web Store" target="_blank" rel="noopener noreferrer">
						<ChromeIcon class={styles.browserIcon} />
					</A>
					<A href="https://addons.mozilla.org/en-US/firefox/addon/web-scrobbler/" title="Download on Add-ons for Firefox" target="_blank" rel="noopener noreferrer">
						<FirefoxIcon class={styles.browserIcon} />
					</A>
				</div>
				<div class={styles.iconGroup}>
					<A href="https://youtu.be/dQw4w9WgXcQ" title="Download on the App Store" target="_blank" rel="noopener noreferrer">
						<SafariIcon class={styles.browserIcon} />
					</A>
					<A href="https://microsoftedge.microsoft.com/addons/detail/web-scrobbler/obiekdelmkmlgnhddmmnpnfhngejbnnc" title="Download on Microsoft Edge Addons" target="_blank" rel="noopener noreferrer">
						<EdgeIcon class={styles.browserIcon} />
					</A>
				</div>
			</div>
		</header>
	)
}