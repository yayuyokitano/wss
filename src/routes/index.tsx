import { Title } from "solid-start";
import Starter from "~/components/sections/starter";
import Top from "~/components/sections/top";

export default function Home() {
  return (
    <main>
      <Title>Web Scrobbler — Scrobble music all around the web!</Title>
      <Top />
			<Starter />
    </main>
  );
}
