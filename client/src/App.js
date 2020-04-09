import React, { useState } from 'react';
import HomeView from './HomeView/HomeView';
import RetroView from './RetroView/RetroView';

function App() {
	const [view, setView] = useState({name: "", retroId: ""});

	const changeView = (view, retroId) => setView({name: view, retroId: retroId});

	return view.name === "retroview" ? <RetroView retroBoardId={view.retroId} changeView={changeView} /> : <HomeView changeView={changeView} />;
}

export default App;
