import React, { useState } from 'react';
import HomeView from './HomeView/HomeView';
import RetroView from './RetroView/RetroView';

function App() {
	const [view, setView] = useState(0);

	const changeView = view => setView(view);

	return view === "retroview" ? <RetroView changeView={changeView} /> : <HomeView changeView={changeView} />;
}

export default App;
