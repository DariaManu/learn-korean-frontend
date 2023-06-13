import {useNavigate} from "react-router-dom";
import NavigationBarComponent from "../component/NavigationBarComponent";

import "./Module.css"

function Module1(props) {
    console.log(props.moduleName);
    const moduleName = props.moduleName;
    const navigate = useNavigate();

    return (
        <div>
            <NavigationBarComponent/>

            <div className={"module-content-div"}>
                <p>
                    Before we jump in to talk about the topics presented in the other modules, we must first talk about
                    the Korean language and alphabet. Otherwise, it would be very difficult for you, learners, to follow
                    most of the presented materials and all of our work would have been rendered useless. So let's get started!
                    <br/><br/>
                    Korean is a language spoken by Korean people, which includes approximately 45 million Koreans in South
                    Korea, 30 million Koreans in North Korea, and 6 million ethnic Koreans living overseas. Among all the languages
                    of the world, Korean ranks ninth in the number of speakers. The Korean alphabet, which is called <i>Hangeul</i>,
                    was created in 1443 by King Sejong the Great. <i>Hangeul's</i> original name was <i>Hunminjeongeum</i>, which
                    literally means "The correct sounds teaching people".
                    <br/><br/>
                    Unlike other East Asian languages, such as Japanese or Chinese, whose writing systems are called either
                    syllabaries (each character represents an entire syllable, rather than just a single sound), or logo-syllabaries
                    (a single character can stand for a unique syllable but also for an entire word or idea), <i>Hangeul</i>
                    is a proper alphabet because it is written according to the actual sounds of the letter (each letter
                    represents a single sound). Therefore, virtually anyone can learn to read and write <i>Hangeul</i> in
                    just a few hours. Moreover, based on scientific principles, <i>Hangeul</i> ranks as one of the most
                    scientific and creative alphabets in the world! Pretty cool right? If you're curious to find out more
                    about all types of writing systems, check out this really interesting video: <a target={"_blank"} href={"https://youtu.be/Mmz42awTRsA"}>Writing Systems Of The World</a>.
                    <br/><br/>
                    <i>Hangeul</i> is one of Korea's most beloved cultural assets. <i>Hunminjeongeum</i> is designated as
                    National Treasure #70, and October 9, the day on which <i>Hangeul</i> was promulgated, is commemorated as
                    <i>Hangeul</i> Day. In addition, UNESCO bestows the King Sejong Award to individuals who contribute to
                    the global conquest against illiteracy, and has designated <i>Hunminjeongeum</i> as a Memory of the World.
                    <br/><br/>
                    Now that we know a little bit about the history of the Korean alphabet, it's time to look at the consonants and
                    vowels <i>Hangeul</i> uses.
                    <br/><br/>
                    <h4><u>Vowels</u></h4>
                    The vowels were created by King Sejong to resemble the shapes the shapes of the sky, earth and human standing:
                    <ol>
                        <li>• -> sky (The sky is round)</li>
                        <li>ㅡ -> earth (The earth is flat)</li>
                        <li>ㅣ -> a human being (A person is standing)</li>
                    </ol>
                    Thus, vowels are made by combining the above three figures
                    <ol>
                        <li>ㅣ• -> ㅏ</li>
                        <li>•ㅣ -> ㅓ</li>
                    </ol>
                    Here is a table with the 10 basic vowels:
                    <table className="tg">
                        <thead>
                        <tr>
                            <th className="tg-baqh">Vowel</th>
                            <th className="tg-baqh">Name</th>
                            <th className="tg-baqh">Phonetic value</th>
                            <th className="tg-baqh">Pronounciation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="tg-dzk6">ㅏ</td>
                            <td className="tg-dzk6">아</td>
                            <td className="tg-dzk6">[ a ]</td>
                            <td className="tg-dzk6">a</td>
                        </tr>
                        <tr>
                            <td className="tg-baqh">ㅑ</td>
                            <td className="tg-baqh">야</td>
                            <td className="tg-baqh">[ ja ]</td>
                            <td className="tg-baqh">ya</td>
                        </tr>
                        <tr>
                            <td className="tg-dzk6">ㅓ</td>
                            <td className="tg-dzk6">어</td>
                            <td className="tg-dzk6">[ ^ ]</td>
                            <td className="tg-dzk6">eo</td>
                        </tr>
                        <tr>
                            <td className="tg-baqh">ㅕ</td>
                            <td className="tg-baqh">여</td>
                            <td className="tg-baqh">[ j^ ]</td>
                            <td className="tg-baqh">yeo</td>
                        </tr>
                        <tr>
                            <td className="tg-dzk6">ㅗ</td>
                            <td className="tg-dzk6">오</td>
                            <td className="tg-dzk6">[ o ]</td>
                            <td className="tg-dzk6">o</td>
                        </tr>
                        <tr>
                            <td className="tg-baqh">ㅛ</td>
                            <td className="tg-baqh">요</td>
                            <td className="tg-baqh">[ jo ]</td>
                            <td className="tg-baqh">yo</td>
                        </tr>
                        <tr>
                            <td className="tg-dzk6">ㅜ</td>
                            <td className="tg-dzk6">우</td>
                            <td className="tg-dzk6">[ u ]</td>
                            <td className="tg-dzk6">u</td>
                        </tr>
                        <tr>
                            <td className="tg-baqh">ㅠ</td>
                            <td className="tg-baqh">유</td>
                            <td className="tg-baqh">[ ju ]</td>
                            <td className="tg-baqh">yu</td>
                        </tr>
                        <tr>
                            <td className="tg-dzk6">ㅡ</td>
                            <td className="tg-dzk6">으</td>
                            <td className="tg-dzk6">[ ɯ ]</td>
                            <td className="tg-dzk6">eu</td>
                        </tr>
                        <tr>
                            <td className="tg-baqh">ㅣ</td>
                            <td className="tg-baqh">이</td>
                            <td className="tg-baqh">[ i ]</td>
                            <td className="tg-baqh">i</td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                    And here is another table with an extra 11 vowels which are made by combining two or more basic vowels:
                    <h4><u>Consonants</u></h4>

                    <br/><br/>
                    There are a few things worth mentioning before ending this first module. First, you might have noticed
                    that there are a few vowels who seems to have the <i>exact</i> same pronunciation (에 and 애, or 왜, 외 and 웨)
                    and that is because in modern Korean they are indeed pronounced almost the same, and even native speakers often
                    have trouble differentiating between them. However, when these letters were first invented during King Sejong's
                    era, they used to represent completely different sounds and you could easily hear the difference between them.
                    So with words containing these letters you will simply have to memorize the correct spelling. This situation,
                    however, does not apply to the simple and double-consonants. They may seem like they are pronounced the same
                    to you, but to a native Korean speaker they are completely different. But don't worry, with practice and patience
                    you too will start noticing the difference between them.
                    <br/>
                    Secondly, you can never have a syllable starting with a vowel! Never! It always has to be a consonant at
                    the beginning of each syllable. For this reason, the consonant ㅇ is used as a "dummy" and in these cases
                    it does not have any phonetic value.
                    <br/>
                    And lastly, just like how you learned that there is a proper way of writing the letters of the latin alphabet,
                    there is also a correct order of writing the strokes of the Korean letters. You could technically write them
                    in any order you want, but using the correct will greatly help when you will want to improve your
                    handwriting speed. And at the end of the day, if you want to learn Korean why not do it the right way? We will
                    touch more on this subject later, so for now focus on memorizing these 40 letters. Oh and don't forget to
                    take the quiz! If you fail at your first try, don't worry, you can always come back here later and practice
                    some more :D
                </p>
                <div>
                    <button onClick={() => navigate(`/learn-korean/learning/${moduleName}/quiz`)}>Take quiz</button>
                    <button onClick={() => navigate(`/learn-korean/learning/${moduleName}/quiz/history`)}>Show quiz history</button>
                </div>
            </div>
        </div>
    )
}

export default Module1;