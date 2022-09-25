export default function About(props){
    console.log(props)
    return(
        <aside>
            <img src={props.image} alt="blog logo" />
            <p>{props.about}</p>
        </aside>
    )
}