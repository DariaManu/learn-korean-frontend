function WordTranslationItem(props) {
    if (props.props.meaning === null) {
        return (
            <div>
                <p>Translation: {props.props.translation}</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>Translation: {props.props.translation}</p>
                <p>Meaning: {props.props.meaning}</p>
            </div>
        );
    }

}

export default WordTranslationItem;