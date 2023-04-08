import { For } from 'solid-js';
import PostItem from './PostItem';
import classes from './PostList.module.css';
function PostList(props) {
    return(
        <ul class={classes.list}>
            <For each={props.posts}>
                {(post, index) => <PostItem key={post.id} title={post.title}/>}
            </For>
        </ul>
    );
}
export default PostList;