import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '../../components/Markdown/MarkdownRenderer';
import fetchRecentPostsTitles from '../../utils/fetchRecentPostsTitles';
import usePostContext from '../../\bcontext/PostContext';

const recentPostsCount = 5;

export default function Home() {
    const { totalPostsNumber } = usePostContext();
    const [markdown, setMarkdown] = useState('');
    const [recentPostsTitles, setRecentPostsTitles] = useState([]);

    useEffect(() => {
        fetch(`/Markdowns/Home/intro.md`)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));

        const markdownPaths = [];

        for (let i = 0; i < recentPostsCount; i++) {
            markdownPaths.push(`./Markdowns/Posts/${totalPostsNumber - i}.md`);
        }

        fetchRecentPostsTitles(markdownPaths).then((titles) =>
            setRecentPostsTitles(titles.slice(0, recentPostsCount))
        );
    }, [totalPostsNumber]);

    return (
        <div>
            <MarkdownRenderer markdown={markdown} />
            <h1>Recently Posts</h1>
            <ul>
                {recentPostsTitles.map(({ title, path }, index) => (
                    <li key={index}>
                        <Link to={`/post/${totalPostsNumber - index}`}>{title || 'None'}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
