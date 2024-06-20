import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchRecentPostsTitles from '../../utils/fetchRecentPostsTitles';

export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    const totalPostsNumber = 10; // 게시물의 총 개수 설정 (필요에 따라 조정)

    useEffect(() => {
        // 모든 게시물 경로 생성
        const markdownPaths = Array.from(
            { length: totalPostsNumber },
            (_, i) => `./Markdowns/Posts/${totalPostsNumber - i}.md`
        );

        fetchRecentPostsTitles(markdownPaths).then((titles) => setPosts(titles));
    }, []);

    return (
        <div>
            <h1>All Posts</h1>
            <ul>
                {posts.map(({ title, path }, index) => (
                    <li key={index}>
                        <Link to={`/post/${totalPostsNumber - index}`}>{title || '없음'}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
