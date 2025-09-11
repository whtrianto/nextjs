"use client";
import { useEffect, useMemo, useState } from "react";

type Card = {
  id: number;
  symbol: string;
  matched: boolean;
};

type FlippedState = {
  firstIndex: number | null;
  secondIndex: number | null;
  isChecking: boolean;
};

const EMOJIS = [
  "🍎","🍊","🍋","🍉","🍇","🍓","🍒","🍍",
];

function generateShuffledDeck(): Card[] {
  const base: Card[] = EMOJIS.flatMap((symbol, i) => [
    { id: i * 2, symbol, matched: false },
    { id: i * 2 + 1, symbol, matched: false },
  ]);
  for (let i = base.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [base[i], base[j]] = [base[j], base[i]];
  }
  return base;
}

export default function MemoryGame() {
  const [deck, setDeck] = useState<Card[]>(() => generateShuffledDeck());
  const [flipped, setFlipped] = useState<FlippedState>({ firstIndex: null, secondIndex: null, isChecking: false });
  const [moves, setMoves] = useState<number>(0);
  const [won, setWon] = useState<boolean>(false);

  const allMatched = useMemo(() => deck.every((c) => c.matched), [deck]);

  useEffect(() => {
    if (allMatched) setWon(true);
  }, [allMatched]);

  function resetGame() {
    setDeck(generateShuffledDeck());
    setFlipped({ firstIndex: null, secondIndex: null, isChecking: false });
    setMoves(0);
    setWon(false);
  }

  function handleFlip(index: number) {
    if (won) return;
    if (flipped.isChecking) return;

    const card = deck[index];
    if (card.matched) return;

    // Prevent clicking the same card as first selection
    if (flipped.firstIndex === index) return;

    if (flipped.firstIndex === null) {
      setFlipped({ firstIndex: index, secondIndex: null, isChecking: false });
      return;
    }

    // Second flip
    setFlipped({ firstIndex: flipped.firstIndex, secondIndex: index, isChecking: true });
    setMoves((m) => m + 1);

    const firstCard = deck[flipped.firstIndex];
    const secondCard = deck[index];

    if (firstCard.symbol === secondCard.symbol) {
      // Mark matched
      setTimeout(() => {
        setDeck((prev) => {
          const next = [...prev];
          next[flipped.firstIndex as number] = { ...firstCard, matched: true };
          next[index] = { ...secondCard, matched: true };
          return next;
        });
        setFlipped({ firstIndex: null, secondIndex: null, isChecking: false });
      }, 300);
    } else {
      // Flip back
      setTimeout(() => {
        setFlipped({ firstIndex: null, secondIndex: null, isChecking: false });
      }, 700);
    }
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="badge bg-secondary">Pairs: {EMOJIS.length}</div>
        <div className="badge bg-info text-dark">Moves: {moves}</div>
        <button className="btn btn-sm btn-outline-light border" onClick={resetGame}>Restart</button>
      </div>

      <div className="grid gap-3 sm:grid-cols-4 grid-cols-3">
        {deck.map((card, index) => {
          const isFlipped =
            card.matched || index === flipped.firstIndex || index === flipped.secondIndex;
          return (
            <button
              key={card.id}
              className="position-relative rounded shadow-sm border-0 p-0 bg-transparent"
              style={{ aspectRatio: "1 / 1" }}
              onClick={() => handleFlip(index)}
              aria-label={isFlipped ? card.symbol : "Hidden card"}
            >
              <div className="w-100 h-100 d-flex align-items-center justify-content-center rounded"
                   style={{
                     background: card.matched ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.85)",
                     transformStyle: "preserve-3d",
                     transition: "transform 0.3s ease",
                     transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                     backdropFilter: "saturate(140%) blur(4px)",
                   }}>
                <span
                  className="display-6"
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {isFlipped ? card.symbol : "❓"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {won && (
        <div className="alert alert-success mt-4" role="alert">
          Congrats! You found all pairs in {moves} moves.
        </div>
      )}
    </div>
  );
}
