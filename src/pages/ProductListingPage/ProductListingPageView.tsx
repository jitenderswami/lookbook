import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductListingPageView: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="w-full p-[24px] text-lg text-semibold flex flex-col gap-[24px]">
			Product Listing Page
			<Button onClick={() => navigate("/")}>Go home</Button>
		</div>
	);
};

export default ProductListingPageView;
