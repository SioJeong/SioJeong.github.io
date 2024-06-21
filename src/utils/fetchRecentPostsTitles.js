import matter from 'gray-matter';

export default async function fetchRecentPostsTitles(paths) {
    const titles = [];

    for (const path of paths) {
        try {
            const response = await fetch(path);
            const markdown = await response.text();
            const parsed = matter(markdown);

            const { title, date } = parsed.data;
            titles.push({ title, date, path });
        } catch (error) {
            console.error(`Error processing ${path}:`, error);
        }
    }

    return titles;
}
