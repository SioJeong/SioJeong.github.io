import matter from 'gray-matter';

export default async function FetchRecentPostsInfos(paths) {
    const titles = [];

    for (const path of paths) {
        try {
            const response = await fetch(path);
            const markdown = await response.text();
            const { data } = matter(markdown);

            const { title, date } = data;
            titles.push({ title, date });
        } catch (error) {}
    }

    return titles;
}
