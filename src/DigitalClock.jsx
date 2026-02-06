import { useState, useEffect } from "react";

function DigitalClock() {
	const [time, setTime] = useState(new Date());
	// const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	function addZero(digit) {
		return String(digit).padStart(2, "0");
	}

	function formatTime() {
		let hours = time.getHours();
		let minutes = time.getMinutes();
		let seconds = time.getSeconds();

		return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
	}

	return (
		<div>
			<div className="clock">
				<span>{formatTime()}</span>
			</div>
		</div>
	);
}

export default DigitalClock;
