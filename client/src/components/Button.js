const Button = ({text}) => {

    const onClick = (e) => {
        console.log(e)
    }

    return (
        <button onClick={onClick} className="button">
            {text}
        </button>
    )
}


export default Button;