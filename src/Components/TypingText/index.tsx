import React from "react";

interface TypingTextProps {
  textList: string[];
  textClass?: string;
  lineClass?: string;
}

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL = 150;
const PAUSE_MS = 1000;
const DELETING_MS = 50;

const TypingText: React.FC<TypingTextProps> = (props) => {
  const { textList, textClass, lineClass } = props;

  const [typingText, setTypingText] = React.useState<string>("");
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [phase, setPhase] = React.useState<any>(Phase.Typing)

  React.useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypingText = textList[selectedIndex]?.slice(
          0,
          typingText?.length + 1
        );

        if (nextTypingText === typingText) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeOut = setTimeout(() => {
          setTypingText(nextTypingText);
        }, TYPING_INTERVAL);
        return () => {
          clearTimeout(timeOut);
        };
      }

      case Phase.Deleting: {
        if (!typingText) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(textList[selectedIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }

        const nextRemaining = textList[selectedIndex]?.slice(
          0,
          typingText?.length - 1
        );

        const timeOut = setTimeout(() => {
          setTypingText(nextRemaining);
        }, DELETING_MS);
        return () => {
          clearTimeout(timeOut);
        };
      }
      
      case Phase.Pausing:

      default:
        const timeOut = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);
        return () => {
          clearTimeout(timeOut);
        };
    }
  }, [textList, typingText, selectedIndex, phase]);

  return (
    <div className="typing-text">
      <p className={`typing-text__dynamic ${textClass ? textClass : ""}`}>
        {typingText}
        <span className={`dynamic__line ${lineClass ? lineClass : ""}`}></span>
      </p>
    </div>
  );
};

export default TypingText;
