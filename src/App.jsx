import styled from "styled-components";
import "./global.css";

const Main_container = styled.div`
	background: coral;
	width: 100vw;
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
			<Main_container>
				main_container
				<Title_container>title_container</Title_container>
				<Form_main_container>form_main_container</Form_main_container>
			</Main_container>
		</>
	);
};

export default App;
