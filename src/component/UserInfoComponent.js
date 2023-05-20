function UserInfoComponent(props) {
    return (
        <div>
            <p>{props.user.username}</p>
            <p>{props.user.progressLevel}</p>
        </div>
    )
}

export default UserInfoComponent;