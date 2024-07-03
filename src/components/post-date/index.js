export default function PostDate({ date }) {
    const formatDate = (date) => {
        const dateString = new Date(date);
        const year = dateString.getFullYear();
        const month = String(dateString.getMonth() + 1).padStart(2, '0');
        const day = String(dateString.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return <span>{formatDate(date)}</span>;
}
