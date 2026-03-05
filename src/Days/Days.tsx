import { Chip } from "@material-tailwind/react";
import Lesson1 from "../Lessons/Lesson1";
import Lesson2 from "../Lessons/Lesson2";

function Lessons() {
  return (
    <>
      <Chip size="lg" value="Day 1" className="text-center rounded-none" />

      <Lesson1
        /*»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» English Word ««««««««««««««««««««« */
        word1={"Concise"}
        word2={"Splash"}
        word3={"Stream"}
        word4={"Unplug"}
        word5={"Role"}
        /*»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» Arabic Word ««««««««««««««««««««« */
        word1Ar={"اختصار"}
        word2Ar={"تناثر / تلاعب بالماء"}
        word3Ar={"جدول / مجرى مائي"}
        word4Ar={"فصل / إيقاف التشغيل"}
        word5Ar={"دور"}
        /*»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» English sentence ««««««««««««««««««««« */
        sentence1={"Keep your explanation concise and to the point."}
        sentence2={"The kids love to splash in the pool during summer."}
        sentence3={"The water flows gently in the stream."}
        sentence4={"Don't forget to unplug the charger before leaving."}
        sentence5={
          "She played an important role in the success of the project."
        }
        /*»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» Arabic sentence ««««««««««««««««««««« */
        sentence1Ar={"اجعل شرحك موجزًا ومباشرًا"}
        sentence2Ar={"يحب الأطفال اللعب ورش الماء في المسبح خلال الصيف"}
        sentence3Ar={"يتدفق الماء بلطف في الجدول"}
        sentence4Ar={"لا تنسَ فصل الشاحن قبل المغادرة"}
        sentence5Ar={"لقد لعبت دورًا مهمًا في نجاح المشروع"}
      />
      <Chip size="lg" value="Day 2" className="text-center rounded-none mt-5" />
      <Lesson2 /*»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» English Word ««««««««««««««««««««« */
        word1={"Actually"}
        word2={"Instead"}
        word3={"Probably"}
        word4={"Almost"}
        word5={"Guess"}
        /*»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» Arabic Word ««««««««««««««««««««« */
        word1Ar={"في الواقع / فعليًا"}
        word2Ar={"بدلاً من ذلك"}
        word3Ar={"على الأرجح"}
        word4Ar={"تقريبًا"}
        word5Ar={"يخمن / يعتقد"}
        /*»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» English sentence ««««««««««««««««««««« */
        sentence1={"I thought he was angry, but actually, he was just tired."}
        sentence2={"I don’t like coffee. I’ll have tea instead."}
        sentence3={"It’s late, so she’s probably at home."}
        sentence4={"I’m almost finished with my work."}
        sentence5={
          "I guess she will be here soon."
        }
        /*»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» Arabic sentence ««««««««««««««««««««« */
        sentence1Ar={"اعتقدت أنه كان غاضبًا، لكن في الواقع، كان متعبًا فقط"}
        sentence2Ar={"لا أحب القهوة. سأشرب الشاي بدلاً من ذلك"}
        sentence3Ar={"الوقت متأخر، لذا من المحتمل أنها في المنزل"}
        sentence4Ar={"لقد انتهيت تقريبًا من عملي"}
        sentence5Ar={"أعتقد أنها ستكون هنا قريبًا"}
      />
    </>
  );
}

export default Lessons;
