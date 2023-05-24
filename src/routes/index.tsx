import { createResource } from "solid-js";
import { Title } from "solid-start";
import Features from "~/components/sections/features";
import Starter from "~/components/sections/starter";
import Top from "~/components/sections/top";

export default function Home() {
	const [connectors] = createResource(getConnectors);
  return (
    <main>
      <Title>Web Scrobbler — Scrobble music all around the web!</Title>
      <Top />
			<Starter />
			<Features connectors={connectors} />
    </main>
  );
}

async function getConnectors() {
	const res = await fetch("https://raw.githubusercontent.com/web-scrobbler/website-resources/master/resources/connectors.json");
	const connectors = await res.json() as string[];
	return connectors.sort(compareIgnoreCase);
}

function compareIgnoreCase(a: string, b: string) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
}
