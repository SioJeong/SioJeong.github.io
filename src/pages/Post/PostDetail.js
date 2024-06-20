import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '../../components/Markdown/MarkdownRenderer';

export default function PostDetail() {
    const { postId } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(`/Markdowns/Posts/${postId}.md`)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, [postId]);

    return (
        <div>
            <h1>게시글</h1>
            <MarkdownRenderer markdown={markdown} />
        </div>
    );
}
