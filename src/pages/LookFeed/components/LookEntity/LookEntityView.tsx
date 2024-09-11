import React from "react";
import { LookEntityType } from "../../utils/types";
import { SwipeableHandlers } from "react-swipeable";
import { Button } from "../../../../components/ui/button";

interface LookEntityViewProps {
	entity: LookEntityType;
	handlers: SwipeableHandlers;
	handlePrimaryButtonClick: () => void;
	activeMedia: number;
}

const LookEntityView: React.FC<LookEntityViewProps> = ({ entity, handlers, handlePrimaryButtonClick, activeMedia }) => {
	return (
		<>
			<div
				className="w-[100vw] h-[100vh] top-0 left-0 fixed bg-[transparent] z-50 opacity-100"
				style={{ background: entity.media[activeMedia] }}
				{...handlers}
			>
				<div className="w-full h-full relative">
					<div className="w-full p-[24px]">
						<div className="text-white text-xl font-bold">{entity?.title}</div>
						<div className="text-white text-lg font-semibold">{entity?.description}</div>
					</div>

					<div className="w-full p-[24px] absolute bottom-0 z-[100]">
						<Button className="w-full" onClick={handlePrimaryButtonClick}>
							View Product
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LookEntityView;
