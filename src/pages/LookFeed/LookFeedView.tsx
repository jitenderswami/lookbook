import React from "react";
import LookEntity from "./components/LookEntity";
import { LookEntityType } from "./utils/types";
import { LOOK_LIST } from "./constants/MockData";

interface LookFeedViewProps {
	activeLook: LookEntityType;
	onSwipeUp: () => void;
	onSwipeDown: () => void;
}

const LookFeedView: React.FC<LookFeedViewProps> = ({ activeLook, onSwipeUp, onSwipeDown }) => {
	return (
		<div>
			{LOOK_LIST?.map((look) => {
				if (look.id !== activeLook.id) return <></>;
				return <LookEntity key={look.id} entity={look} onSwipeUp={onSwipeUp} onSwipeDown={onSwipeDown} />;
			})}
		</div>
	);
};

export default LookFeedView;
