import { getAllToppings } from '../data/apiManager.js'



export const toppingDropdown = () => {
    const target = document.querySelector('#toppingSelect');

	getAllToppings().then((toppings) => {
    const toppingArrayList = toppings.map((topping) =>`<option value="${topping.id}">${topping.name}</option>`)
		target.innerHTML += toppingArrayList.join("");
	
	})
}