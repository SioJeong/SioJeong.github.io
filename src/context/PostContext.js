import { createContext, useState, useContext } from 'react';

const PostContext = createContext();

// Provider 컴포넌트
export function PostProvider({ children }) {
    const [totalPostsNumber, setTotalPostsNumber] = useState(5);

    return (
        <PostContext.Provider value={{ totalPostsNumber, setTotalPostsNumber }}>
            {children}
        </PostContext.Provider>
    );
}

export default function usePostContext() {
    return useContext(PostContext);
}
