import React, { useState } from 'react'

export default function App() {

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore,setShowScore] = useState(false);

	const [score, setScore] =useState(0);

	const handleAnswerButtonClick = (isCorrect) => {

		if(isCorrect===true)
		{
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;

		if(nextQuestion < questions.length)
		{
			setCurrentQuestion(nextQuestion);
		}
		else{
			setShowScore(true);
		}

		
	}

	function refreshPage() {
		window.location.reload(false);
	  }

	return (
		<div className='heading'>
			<div>
				<h1>Amaan's Quiz App</h1>
			</div>
			<div className="app">
				{showScore ? (
					<div className="score-section">
						You scored {score} out of {questions.length}
						<br/>
						
						<button className='reset' onClick={refreshPage}>Click to reset!</button>
						
					</div>
				) : (
					<>
						<div className="question-section">
							<div className="question-count">
								<span>Question {currentQuestion+1}</span>/{questions.length}
							</div>
							{/* HINT: You can access first question using questions[0] */}
							<div className="question-text">
								{questions[currentQuestion].questionText}
							</div>
						</div>
						<div className="answer-section">
							{questions[currentQuestion].answerOptions.map((answerOption)=>{
								return (<button onClick={() =>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)
							})}
						</div>
					</>
				)}
			</div>
		</div>
		
	)
}
