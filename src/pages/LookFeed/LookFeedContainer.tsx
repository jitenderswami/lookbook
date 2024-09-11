import React, { useState } from "react";
import LookFeedView from "./LookFeedView";
import { LOOK_LIST } from "./constants/MockData";

const LookFeedContainer: React.FC = () => {
	const [activeLook, setActiveLook] = useState(LOOK_LIST[0]);

	const onSwipeUp = () => {
		const currentIndex = LOOK_LIST.findIndex((look) => look.id === activeLook.id);
		const nextIndex = (currentIndex + 1) % LOOK_LIST.length; // Wrap around to start
		setActiveLook(LOOK_LIST[nextIndex]);
	};

	const onSwipeDown = () => {
		console.log("Trigger Swipe down");
		const currentIndex = LOOK_LIST.findIndex((look) => look.id === activeLook.id);
		const prevIndex = (currentIndex - 1 + LOOK_LIST.length) % LOOK_LIST.length; // Wrap around to end
		setActiveLook(LOOK_LIST[prevIndex]);
	};
	return <LookFeedView activeLook={activeLook} onSwipeUp={onSwipeUp} onSwipeDown={onSwipeDown} />;
};

export default LookFeedContainer;
