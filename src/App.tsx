"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1); // safer update
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure Leidi?",
      "Are you really really sure?",
      "Think again Leidi 😌",
      "What if I asked really nicely?",
      "please Leidi",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "Leidi don’t do me like this 💔",
      "I already told my mom about you",
      "You meant YES, try again",
      "That button looks confused",
      "My heart just lagged",
      "PRETTY PLEASE",
      "You’re breaking fictional hearts right now",
      "Even my WiFi connection is stronger than that NO",
      "You just unlocked extra effort mode",
      "I was about to offer forehead kisses",
      "Are you sure you want to lose VIP access?",
      "You just made me 12% more romantic",
      "NASA detected a heartbreak near Leidi",
      "Fine… but I’m still your Valentine in my head",
      "That NO sounds like a ‘convince me’",
      "I’ll ask again with better flirting",
      "Last chance before I start sending poetry",

      // Spicy 🌶️
      "Rejecting me? Brave choice 😏",
      "You say no but your eyes say yes",
      "I like a challenge Leidi",
      "Careful… I’m very good at stealing hearts",
      "That NO just made this more interesting",
      "You just activated chase mode",
      "I’m about to raise my flirting level",
      "You don’t want me to spoil you? Sure?",
      "I would’ve treated you like a queen",
      "You’re one click away from butterflies",
      "Don’t worry, I’ll win you over slowly",
      "You can’t press NO forever 😉",

      // Spanish 🇪🇸
      "¿Segura Leidi?",
      "Inténtalo otra vez hermosa",
      "Mi corazón no acepta ese no 💔",
      "Presiona sí, no seas tímida",
      "Sabes que quieres decir que sí",
      "Te haces la difícil eh 😏",
      "No juegues con mis sentimientos princesa",
      "Yo iba a tratarte como reina",
      "Este no solo me da más ganas de conquistarte",
      "Te voy a enamorar poco a poco",
      "¿Un no? Eso suena a nervios",
      "Di que sí… sabes que quieres",
      "Yes",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! I love you pookie!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Leidi, will you be my valentine?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
