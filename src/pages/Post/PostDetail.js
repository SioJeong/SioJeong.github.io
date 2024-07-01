import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '../../components/markdown/MarkdownRenderer';
import DateFormatter from '../../components/markdown/DateFormatter';
import matter from 'gray-matter';

export default function PostDetail() {
    const { postId } = useParams();
    const [markdown, setMarkdown] = useState('');
    const [frontmatter, setFrontMatter] = useState({});

    useEffect(() => {
        fetch(`/assets/markdowns/posts/${postId}.md`)
            .then((response) => response.text())
            .then((text) => {
                const { content, data: frontmatter } = matter(text);
                setMarkdown(content);
                setFrontMatter(frontmatter);
            });
    }, [postId]);

    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <p>
                Tags:{' '}
                {Array.isArray(frontmatter.tag)
                    ? frontmatter.tag.map((tag, index) => (
                          <span key={index}>
                              {index > 0 ? ', ' : ''}
                              {tag}
                          </span>
                      ))
                    : frontmatter.tag}
            </p>
            <DateFormatter dateString={frontmatter.date} />
            <MarkdownRenderer markdown={markdown} />
        </div>
    );
}
