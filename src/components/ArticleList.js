import Article from "./Article"

export default function ArticleList(props){
    console.log(props)
    return(
        <main>
            {props.posts.map((post)=>(
               <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} key={post.id} />
            ))}

        </main>
    )
}