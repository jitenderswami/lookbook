import React, { useCallback, useEffect, useState } from "react";
import LookEntityView from "./LookEntityView";
import { LookEntityType } from "../../utils/types";
import { useSwipeable, SwipeableHandlers } from "react-swipeable";
import { HandledEvents } from "react-swipeable/es/types";
import { useNavigate } from "react-router-dom";

interface LookEntityContainerProps {
	entity: LookEntityType;
	onSwipeUp: () => void;
	onSwipeDown: () => void;
}
const intervalDuration = 5000;
const LookEntityContainer: React.FC<LookEntityContainerProps> = ({ entity, onSwipeUp, onSwipeDown }) => {
	const navigate = useNavigate();

	const [activeMedia, setActiveMedia] = useState(0);

	const handleMediaChange = useCallback(
		(action: "increment" | "decrement") => {
			setActiveMedia((prev) => {
				let updatedVal = prev;

				if (action === "increment" && prev < entity?.media?.length - 1) {
					updatedVal += 1;
				}

				if (action === "decrement" && prev > 0) {
					updatedVal += 1;
				}

				return updatedVal;
			});
		},
		[entity?.media?.length]
	);

	useEffect(() => {
		const intervalId = setInterval(() => handleMediaChange("increment"), intervalDuration);
		return () => clearInterval(intervalId);
	}, [handleMediaChange]);

	const onLeftTap = () => {
		handleMediaChange("decrement");
		const intervalId = setInterval(() => handleMediaChange("increment"), intervalDuration);
		return () => clearInterval(intervalId);
	};
	const onRightTap = () => {
		handleMediaChange("increment");
		const intervalId = setInterval(() => handleMediaChange("increment"), intervalDuration);
		return () => clearInterval(intervalId);
	};

	const [lastTapTime, setLastTapTime] = useState(0);
	const tapThreshold = 300; // milliseconds

	const handleTap = useCallback(
		(event: HandledEvents) => {
			const currentTime = new Date().getTime();
			if (currentTime - lastTapTime > tapThreshold) {
				const touchEvent = event as TouchEvent;
				const mouseEvent = event as MouseEvent;
				const tapX = touchEvent.changedTouches ? touchEvent.changedTouches[0].clientX : mouseEvent.clientX;
				const windowWidth = window.innerWidth;

				// Define the boundaries for left, center, and right areas
				const leftBoundary = windowWidth * 0.2;
				const rightBoundary = windowWidth * 0.8;

				if (tapX < leftBoundary) {
					console.log("Tapped Left");
					onLeftTap?.();
				} else if (tapX > rightBoundary) {
					console.log("Tapped Right");
					onRightTap?.();
				}
				setLastTapTime(currentTime);
			}
		},
		[lastTapTime]
	);

	const handlers: SwipeableHandlers = useSwipeable({
		onTap: ({ event }) => handleTap(event),
		onSwipedUp: () => {
			console.log("Swiped Up");
			onSwipeUp?.();
		},
		onSwipedDown: () => {
			console.log("Swiped Down");
			onSwipeDown?.();
		},
		delta: 10,
		// preventDefaultTouchmoveEvent: false,
		trackTouch: true,
		trackMouse: true,
		rotationAngle: 0
	});

	const handlePrimaryButtonClick = () => {
		navigate("/product-listing");
	};

	useEffect(() => {
		if (entity?.id && activeMedia === entity.media.length - 1) {
			setTimeout(() => {
				console.log("on to next look");
				onSwipeUp?.();
			}, intervalDuration);
		}
	}, [activeMedia, entity]);

	return (
		<LookEntityView
			entity={entity}
			handlers={handlers}
			handlePrimaryButtonClick={handlePrimaryButtonClick}
			activeMedia={activeMedia}
		/>
	);
};

export default LookEntityContainer;
