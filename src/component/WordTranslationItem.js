import "./WorldTranslationItem.css"

function WordTranslationItem(props) {
    if (props.props.meaning === null) {
        return (
            <div>
                <p>Translation: {props.props.translation}</p>
            </div>
        );
    } else {
        return (
            <div className={"word-translation-item"}>
                <p className={"translation"}>Translation: {props.props.translation}</p>
                <p className={"meaning"}>Meaning: {props.props.meaning}</p>
            </div>
        );
    }

}

export default WordTranslationItem;