import { HiArrowLongRight } from "react-icons/hi2";
import { useRef } from "react";
import { PiSpeakerHighBold } from "react-icons/pi";

type PropsLesson = {
  word1: string;
  word2: string;
  word3: string;
  word4: string;
  word5: string;
  word1Ar: string;
  word2Ar: string;
  word3Ar: string;
  word4Ar: string;
  word5Ar: string;
  sentence1: string;
  sentence2: string;
  sentence3: string;
  sentence4: string;
  sentence5: string;
  sentence1Ar: string;
  sentence2Ar: string;
  sentence3Ar: string;
  sentence4Ar: string;
  sentence5Ar: string;
};

type HighlightTextProps = {
  text: string;
  word: string;
  color?: string;
};

const HighlightText = ({ text, word, color = "blue" }: HighlightTextProps) => {
  if (!word) return <>{text}</>;

  const parts = text.split(new RegExp(`(${word})`, "gi"));

  return (
    <>
      {parts.map((part: string, index: number) =>
        part.toLowerCase() === word.toLowerCase() ? (
          <span key={index} style={{ color, fontWeight: "bold" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

function Lesson2({
  word1,
  word2,
  word3,
  word4,
  word5,
  word1Ar,
  word2Ar,
  word3Ar,
  word4Ar,
  word5Ar,
  sentence1,
  sentence2,
  sentence3,
  sentence4,
  sentence5,
  sentence1Ar,
  sentence2Ar,
  sentence3Ar,
  sentence4Ar,
  sentence5Ar,
}: PropsLesson) {
  const words = [word1, word2, word3, word4, word5];
  const wordsAr = [word1Ar, word2Ar, word3Ar, word4Ar, word5Ar];
  const sentences = [sentence1, sentence2, sentence3, sentence4, sentence5];
  const sentencesAr = [sentence1Ar, sentence2Ar, sentence3Ar, sentence4Ar, sentence5Ar];

  // ✅ مراجع الصوت للكلمات
  const audioRefsWords = useRef<Array<HTMLAudioElement | null>>([]);
  // ✅ مراجع الصوت للجمل
  const audioRefsSentences = useRef<Array<HTMLAudioElement | null>>([]);

  const playAudio = (index: number, type: "word" | "sentence") => {
    // 🔹 إيقاف جميع الأصوات عند تشغيل أي صوت جديد
    [...audioRefsWords.current, ...audioRefsSentences.current].forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // 🔹 تشغيل الصوت المطلوب
    if (type === "word" && audioRefsWords.current[index]) {
      audioRefsWords.current[index]?.play();
    } else if (type === "sentence" && audioRefsSentences.current[index]) {
      audioRefsSentences.current[index]?.play();
    }
  };

  return (
    <div id="day2" className="text-3xl font-light container mx-auto">
      {/* ✅ الكلمات مع زر الصوت */}
      {words.map((word, index) => (
        <div className="pt-4" key={index}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h1>{word}</h1>
              <button
                className="px-3 py-1 rounded-full cursor-pointer hover:scale-110 transition duration-300 text-gray-600 hover:text-black"
                onClick={() => playAudio(index, "word")}
              >
                <PiSpeakerHighBold />
              </button>
            </div>

            <HiArrowLongRight className="absolute left-[50%]" />

            <h1>{wordsAr[index]}</h1>
          </div>

          {/* ✅ ملف الصوت الخاص بالكلمة */}
          <audio
            ref={(el) => (audioRefsWords.current[index] = el)}
            src={`/Audios/Words/${words[index]}.mp3`}
          ></audio>
        </div>
      ))}

      {/* ✅ الجمل تحت بعضها بدون سهم */}
      {sentences.map((sentence, index) => (
        <div className="pt-6" key={index}>
          {/* ✅ الجملة الإنجليزية مع زر الصوت */}
          <div className="flex items-center gap-2">
            <h1>
              <HighlightText text={sentence} word={words[index]} color="orange" />
            </h1>
            <button
              className="px-3 py-1 rounded-full cursor-pointer hover:scale-110 transition duration-300 text-gray-600 hover:text-black"
              onClick={() => playAudio(index, "sentence")}
            >
              <PiSpeakerHighBold />
            </button>
          </div>

          {/* ✅ الجملة العربية تحت الجملة الإنجليزية */}
          <h1 className="mt-2">{sentencesAr[index]}</h1>

          {/* ✅ ملف الصوت الخاص بالجملة */}
          <audio
            ref={(el) => (audioRefsSentences.current[index] = el)}
            src={`/Audios/Sentences2/${index + 1}.mp3`}
          ></audio>
        </div>
      ))}
    </div>
  );
}

export default Lesson2;
