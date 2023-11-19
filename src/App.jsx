import React, { useState } from "react";
import styled from "styled-components";
import "./global.css";
import "98.css";

// *SECTION - STYLE
const Container = styled.div`
	display: flex;
	background: darkgreen;
	height: 100%;
	width: 100%;
`;

const Window = styled.div`
	background: pink;
	height: 50%;
	width: 50%;
	margin: auto;
`;

const Title_bar = styled.div`
	background: blue;
	justify-content: center;
	height: 10%;
`;

const Title = styled.div`
	color: white;
`;

const Body_container = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	background: lightgoldenrodyellow;
	height: 90%;
`;

const Left_image_container = styled.div`
	background: lightslategray;
	height: 100%;
	width: 20%;
`;
const Right_image_container = styled.div`
	background: lightslategray;
	width: 20%;
`;
const Window_body = styled.div`
	margin: 0;
	display: flex;
	flex-direction: column;
	background: lightgreen;
	width: 60%;
`;

const Hero = styled.div`
	display: flex;
	background: darkgreen;
	height: 40%;
	justify-content: center;
	align-items: center;
`;

const Description = styled.h2`
	color: pink;
`;

const Input_Container = styled.div`
	background: blue;
	height: 60%;
`;

const Form = styled.form`
	display: flex;
	height: 100%;
	background-color: green;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Input_label = styled.label`
	color: white;
`;
const Button_container = styled.div`
	background-color: yellow;
`;
const Button = styled.input``;

const App = () => {
	const [inputValue, setInputValue] = useState("");
	const [submittedValue, setSubmittedValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmittedValue(inputValue);
		setInputValue;
		alert(`${inputValue}`);
	};

	return (
		<>
			{/**SECTION - Main Body Container */}
			<Container>
				<Window className="window">
					{/*SECTION Title Container */}
					<Title_bar className="title-bar">
						<Title className="title-bar-text">Mind Reader</Title>
					</Title_bar>
					<Body_container>
						<Left_image_container>svg container - Left</Left_image_container>
						{/*SECTION Window Body */}
						<Window_body className="window-body">
							<Hero>
								<Description>WINDOW BODY</Description>
							</Hero>
							{/*SECTION Input Container */}
							<Input_Container className="field-row">
								<Form onSubmit={handleSubmit}>
									<Input_label>
										<h4>ENTER YOUR WORD</h4>{" "}
									</Input_label>
									<input
										placeholder="Enter your word"
										id="textInput"
										type="text"
										value={inputValue}
										onChange={handleInputChange}
									/>
									<Button_container>
										<Button type="submit" value="submit" />
									</Button_container>
								</Form>
							</Input_Container>
							{/*SECTION Submit Button */}
						</Window_body>
						<Right_image_container>svg container - Right</Right_image_container>
					</Body_container>
				</Window>
			</Container>
		</>
	);
};

export default App;
