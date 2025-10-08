import { useState, useEffect } from "react";

export default function TypewriterEffect({
  messages,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;
    
    if (isPaused) {
      timer = window.setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }
    
    const currentMessage = messages[messageIndex];
    
    if (isTyping) {
      if (displayedText.length < currentMessage.length) {
        timer = window.setTimeout(() => {
          setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayedText.length > 0) {
        timer = window.setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setMessageIndex((messageIndex + 1) % messages.length);
        setIsTyping(true);
      }
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [displayedText, isTyping, isPaused, messageIndex, messages, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block min-w-[200px] h-9 text-left whitespace-nowrap overflow-hidden">
      {displayedText}
      <span className="inline-block w-1 h-5 bg-blue-500 ml-1 animate-pulse"></span>
    </span>
  );
}
