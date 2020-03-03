import React from "react";
import { fetchDataAction, toggleFavAction, Store } from "./store";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(
        () => {
            state.episodes.length === 0 && fetchDataAction(dispatch);
        },
        [state]
    );

    const props = {
        episodes: state.episodes,
        state: { state, dispatch },
        toggleFavAction,
        favourites: state.favourites
    };

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>Loading...</div>}>
                <div className="episode-layout">
                    <EpisodesList {...props} />
                </div>
            </React.Suspense>
        </React.Fragment>
    );
}
