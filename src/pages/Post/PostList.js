import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchRecentPostsTitles from '../../utils/FetchRecentPostsInfos';
import usePostContext from '../../\bcontext/PostContext';
import PostDate from '../../components/post-date';

export default function PostList() {
    const { totalPostsNumber } = usePostContext();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // 모든 게시물 경로 생성
        const markdownPaths = Array.from(
            { length: totalPostsNumber },
            (_, i) => `./assets/markdowns/posts/${totalPostsNumber - i}.md`
        );

        fetchRecentPostsTitles(markdownPaths).then((titles) => setPosts(titles));
    }, [totalPostsNumber]);

    return (
        <div>
            <h1>All Posts</h1>
            <ul>
                {posts.map(({ title, date }, index) => (
                    <li key={index}>
                        <Link to={`/post/${totalPostsNumber - index}`}>{title}</Link>
                        <PostDate date={date} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
