import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '../../components/markdown/MarkdownRenderer';
import fetchRecentPostsTitles from '../../utils/FetchRecentPostsInfos';
import usePostContext from '../../\bcontext/PostContext';

const RECENT_POSTS_STANDARD = 5;

export default function Home() {
    const { totalPostsNumber } = usePostContext();
    const [markdown, setMarkdown] = useState('');
    const [recentPostsTitles, setRecentPostsTitles] = useState([]);

    useEffect(() => {
        fetch(`/assets/markdowns/home/intro.md`)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));

        const markdownPaths = [];

        for (let i = 0; i < RECENT_POSTS_STANDARD; i++) {
            markdownPaths.push(`./assets/markdowns/posts/${totalPostsNumber - i}.md`);
        }

        fetchRecentPostsTitles(markdownPaths).then((titles) =>
            setRecentPostsTitles(titles.slice(0, RECENT_POSTS_STANDARD))
        );
    }, [totalPostsNumber]);

    return (
        <div>
            <MarkdownRenderer markdown={markdown} />
            <h1>Recently Posts</h1>
            <ul>
                {recentPostsTitles.map(({ title }, index) => (
                    <li key={index}>
                        <Link to={`/post/${totalPostsNumber - index}`}>{title || 'None'}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
