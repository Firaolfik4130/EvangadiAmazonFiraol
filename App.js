import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import React, {Fragment} from "react"
import Payments from "./Payments";
const promise = loadStripe(
	"pk_test_51ON1o6JscyegHW88xnegGrufBmWKQl63mTVzC5mWdRLXanOX4ukEDe6Z9y99CTQpnoFwVjE2S1wqgB8PncYp983800xXJXx4Eo"
);
function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("The USER is>>>", authUser)
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
				    <Route
            path="/orders"
            element={<Orders />}/>
				
					<Route
						path="/payment"
						element={
							<Elements stripe={promise}>
								<Payments />
							</Elements>
						}
					/>

					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
