import styles from "../styles/components/Tweet.module.scss";

import { useContexto } from "../contexts/Context";

export default function Tweet() {
    const {
        tweets,
        likes,
        retweets,
        like,
        incrementTweets,
        incrementRetweets,
    } = useContexto();

    return (
        <div className={styles.container}>
            <header>
                <img src="https://github.com/joevtap.png" alt="profile pic" />
                <div className={styles.tweetOwner}>
                    <p>Joel</p>
                    <span>@joevtap</span>
                </div>
            </header>
            <main>
                <div className={styles.tweetContent}>
                    <p>Meu tweet</p>
                </div>
                <div className={styles.tweetInfo}>
                    <p>6:07 PM · 12 de mar de 2021 </p>
                    <p>· Twitter Web App</p>
                </div>
            </main>
            <footer>
                <div className={styles.tweetInteractions}>
                    <p>
                        {retweets} <span>Retweets</span>
                    </p>
                    <p>
                        {tweets} <span>Tweet com comentário</span>
                    </p>
                    <p>
                        {likes} <span>Curtidas</span>
                    </p>
                </div>
                <div className={styles.tweetButtons}>
                    <button onClick={incrementTweets}>Comentar</button>
                    <button onClick={incrementRetweets}>Retweetar</button>
                    <input type="checkbox" onClick={like} />
                    <button>Compartilhar</button>
                </div>
            </footer>
        </div>
    );
}
