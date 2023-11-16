import { useEffect } from "react";
import Main from "./components/pages/Main";

import lenis from "./components/utils/lenis";

function App() {
	useEffect(() => {
		lenis();
	}, []);

	return (
		<>
			<Main />
		</>
	);
}

export default App;
