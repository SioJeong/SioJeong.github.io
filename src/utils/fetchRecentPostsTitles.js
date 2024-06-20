import extractFirstH1 from './extractFirstH1';

export default async function fetchRecentPostsTitles(paths) {
    const titles = await Promise.all(
        paths.map(async (path) => {
            try {
                const response = await fetch(path);
                const markdown = await response.text();
                const title = extractFirstH1(markdown);
                return { title, path };
            } catch (error) {}
        })
    );

    return titles;
}
