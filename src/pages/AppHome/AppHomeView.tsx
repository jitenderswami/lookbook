import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

interface AppHomeViewProps {
	// Add your props here
}

const AppHomeView: React.FC<AppHomeViewProps> = () => {
	const navigate = useNavigate();
	return (
		<div className="w-[100vw] h-[100vh] bg-muted-background p-[24px] flex items-center justify-center">
			<Button onClick={() => navigate("/look-feed")}>Trigger looks feed</Button>
		</div>
	);
};

export default AppHomeView;
