import { createContext, useState, useContext } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    const [likes, setLikes] = useState(120);
    const [retweets, setRetweets] = useState(0);
    const [tweets, setTweets] = useState(0);

    function like(e) {
        e.target.checked ? setLikes(likes + 1) : setLikes(likes - 1);
    }
    function incrementRetweets() {
        setRetweets(retweets + 1);
    }
    function incrementTweets() {
        setTweets(tweets + 1);
    }

    return (
        <Context.Provider
            value={{
                tweets,
                likes,
                retweets,
                like,
                incrementTweets,
                incrementRetweets,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export function useContexto() {
    const context = useContext(Context);
    const {
        tweets,
        likes,
        retweets,
        like,
        incrementTweets,
        incrementRetweets,
    } = context;
    return {
        tweets,
        likes,
        retweets,
        like,
        incrementTweets,
        incrementRetweets,
    };
}
