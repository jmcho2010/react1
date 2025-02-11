import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function List(){
    const dispatch = useDispatch();
    const {posts, status, error} = useSelector(state => state.posts);
    
    useEffect(() =>{
        dispatch(fetchPosts());
    }, [dispatch])

    if (status === 'loading') return <div>로딩 중...</div>;
    if (status === 'failed') return <div>{error}</div>;

    return(
        <ul>
            {posts.map(post =>(
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>                
            ))}
        </ul>
    );
}