import Section from "../components/Section";
import MemoryGame from "../components/MemoryGame";

export const metadata = {
  title: "Memory Game | Portfolio",
};

export default function MemoryPage() {
  return (
    <Section id="memory" title="Memory Game">
      <MemoryGame />
    </Section>
  );
}
