import styled from "styled-components";
import "./global.css";
import "98.css";
import Window from "./components/Window";

const Main_container = styled.div`
	background: coral;
	width: 100vw;
	height: 100vh;
`;
const Title_container = styled.div`
	background: blue;
	width: 90%;
`;
const Form_main_container = styled.div`
	background: lightgreen;
	width: 80%;
`;

const App = () => {
	return (
		<>
			<Window>
				main_container
				<Title_container>title_container</Title_container>
				<Form_main_container>form_main_container</Form_main_container>
			</Window>
		</>
	);
};

export default App;
