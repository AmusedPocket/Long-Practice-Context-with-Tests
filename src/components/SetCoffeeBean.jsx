import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
	// console.log("rendering setcoffee");
	const { coffeeBean, setCoffeeBeanId } = useContext(CoffeeContext);
	console.log(coffeeBean);
	return (
		<div className='set-coffee-bean'>
			<h2>Select a Coffee Bean</h2>
			<select
				name='coffee-bean'
				onChange={(e) => setCoffeeBeanId(e.target.value)}
			>
				{coffeeBeans.map((bean) => (
					<option key={bean.id} value={bean.id}>
						{bean.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default SetCoffeeBean;
