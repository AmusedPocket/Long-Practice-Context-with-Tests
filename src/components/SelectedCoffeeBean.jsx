import { useContext, useState, useEffect } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
const SelectedCoffeeBean = () => {
	const { coffeeBean, setCoffeeBean } = useContext(CoffeeContext);
	// console.log("coffee bean is: ", coffeeBean)
	return (
		<div className='selected-coffee'>
			<h2>Current Selection: {coffeeBean.name} </h2>
		</div>
	);
};

export default SelectedCoffeeBean;
