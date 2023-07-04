import {useNavigate} from "react-router-dom";
import NavigationBarComponent from "../component/NavigationBarComponent";

import "./Module.css"

function Module2(props) {
    console.log(props.moduleName);
    const moduleName = props.moduleName;
    const navigate = useNavigate();

    return (
        <div>
            <NavigationBarComponent/>

            <div className={"module-content-div"}>
                <h1>{moduleName}</h1>

                <p>
                    Honorifics are very important in Korean and are something you will encounter while using the language literally every day.
                    From when you call a stranger who dropped a purse or a worker in a restaurant, to when you talk to your parents
                    or boss, every daily situation involves using honorifics.
                    <br/><br/>
                    The reason for the importance of honorification in Korean is that it is required by the vertical hierarchy of
                    Confucianism, where age and social status play a big part. An idiom 장유유서(長幼有序) is the one that shows
                    the basis of Confucianism, which means there is a strict order that needs to be followed and obeyed between
                    adults and children. Therefore, it is a huge deal in Korea to show proper respect to older people, which refers
                    to physically older or of a higher social status (your coworkers or seniors at school for instance).
                    <br/><br/>
                    If a Korean chooses the wrong honorific, it can result in humiliation, embarrassment or even offending the listeners.
                    Sometimes we can hear the news that two men fought each other seriously and its cause turned out that one man started
                    to use an informal/impolite speech manner, which is called <mark>반말</mark> (banmal) in Korean, to the other man.
                    It is an extreme case, but it gives away how important it is to use appropriate speech levels and honorifics in Korean society.
                    The opposite of 반말 is <mark>존댓말</mark> (jondaemal).
                    <br/><br/>
                    So, you might be wondering, why are we talking about formal speech inside a module about family??? And you
                    would be right to ask because generally, in western cultures, you wouldn't have to worry about addressing your parents or
                    your siblings in a certain way. In Korea however it doesn't work like that, you have to always respect your elders, even if
                    they are barely a year older than you. You still have to use special forms of formal, polite speech. Here are the words you
                    would use when talking to first degree family members:
                    <ul>
                        <li>mother = <mark>어머니</mark> (formal) -> <mark>엄마</mark> (informal)</li>
                        <li>father = <mark>아버지</mark> (formal) -> <mark>아빠</mark> (informal)</li>
                        <li>grandfather = <mark>할아버지</mark></li>
                        <li>grandmother = <mark>할머니</mark></li>
                        <li>boy's older sister = <mark>누나</mark></li>
                        <li>girl's older sister = <mark>언니</mark></li>
                        <li>boy's older brother = <mark>형</mark></li>
                        <li>girl's older sister = <mark>오빠</mark></li>
                        <li>younger sibling = <mark>동생</mark></li>
                    </ul>
                    <br/><br/>
                    Now you might have noticed something very strange. Why on earth are there 4 different words to call your elder sibling? Well, that's
                    just the way it is and you'll have to learn all of them if you don't want to upset Korean people when talking to them.
                    In English, there are two words to address siblings depending on gender: sister and brother. The Korean language, however,
                    specifies sibling terms according to the gender and age of the speaker and interlocutor.

                </p>

                <div>
                    <button onClick={() => navigate(`/learn-korean/learning/${moduleName}/quiz`)}>Take quiz</button>
                    <button onClick={() => navigate(`/learn-korean/learning/${moduleName}/quiz/history`)}>Show quiz history</button>
                </div>
            </div>
        </div>
    );
}

export default Module2;