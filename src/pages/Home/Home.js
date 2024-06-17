import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Home() {
    //     const markdown = `
    // # 안녕하세요!
    // 저는 현재 리액트에서 \`react-markdown\`를 이용하여 **마크다운**을 랜더링하고 있습니다.
    //     `;

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('./Markdowns/Home/Welcome.md')
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    });

    return (
        <div>
            <ReactMarkdown remarkPlugins={remarkGfm}>{markdown}</ReactMarkdown>
        </div>
    );
}
