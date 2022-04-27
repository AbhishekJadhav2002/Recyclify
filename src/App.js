import React from "react"
import "./App.css"
import Homepage from "./Components/Homepage/Homepage"

function App() {
	return (
		<React.Fragment>  {/**Using React.Fragment instead of common div, because somehow div was affecting the width of viewport and was disturbing the alignment🥲 */}
			<Homepage />
		</React.Fragment>
	);
}
export default App;
