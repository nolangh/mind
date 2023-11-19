import styled from "styled-components";
import "./global.css";
import "98.css";

const Main_container = styled.div`
	background: coral;
	width: 50%;
	height: 50%;
`;
const Title_container = styled.div`
	background: blue;
	justify-content: center;
`;

const Title = styled.div`
	color: white;
`;

const Body_container = styled.div`
	display: flex;
	flex-direction: row;
	background: lightgoldenrodyellow;
`;

const Left_image_container = styled.div`
	background: lightskyblue;
	margin: 5px;
`;
const Right_image_container = styled.div`
	background: lightslategray;
	margin: 5px;
`;
const Window_body = styled.div`
	background: lightgreen;
	width: 80%;
`;

const Input_Container = styled.div`
	background: blue;
`;

const Input_label = styled.label`
	color: white;
`;

const Button = styled.input`
	margin: 10rem;
`;

const App = () => {
	return (
		<>
			{/**SECTION - Main Body Container */}
			<Main_container fluid className="window">
				{/*SECTION Title Container */}
				<Title_container className="title-bar">
					<Title className="title-bar-text">Mind Reader</Title>
				</Title_container>
				<Body_container>
					<Left_image_container>svg container - Left</Left_image_container>
					{/*SECTION Window Body */}
					<Window_body className="window-body">
						Window Body
						{/*SECTION Input Container */}
						<Input_Container className="field-row">
							<Input_label>Enter your word</Input_label>
							<input id="textInput" type="text" />
						</Input_Container>
						{/*SECTION Submit Button */}
						<Button type="submit" />
					</Window_body>
					<Right_image_container>svg container - Right</Right_image_container>
				</Body_container>
			</Main_container>
		</>
	);
};

export default App;
