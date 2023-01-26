import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";

/**
 * parcel does Hot module rendering
 * via file watcher algorithm -C++
 *
 *Parcel
 - Minify
 -Cleaning code
 - dev and production build
 - super fast build algo
 - image optimization
 - caching while development
 - compression
 - compatible with older versions of browser
 - HTTPS on dev
 -- port number
 -- consistent hashing algo to cache things
 -- zero config
 -- packages take care of transitive dependenciess
 

 */
// const h1 = React.createElement(
// 	"h1",
// 	{id: "title", key: 1, style: {fontSize: "24px", color: "#875434"}},
// 	"Namaste Everyone"
// );
// const h2 = React.createElement(
// 	"h2",
// 	{id: "title2", key: 2, style: {fontSize: "24px", color: "#809344"}},
// 	"Welcome to chapter 1"
// );
// const container = React.createElement(
// 	"div",
// 	{
// 		id: "container",

// 		style: {fontSize: "24px", color: "#809344"},
// 	},
// 	[h1, h2] // passing the container children
// );
const Title = () => (
	<h1 id="title" key="h2" tabIndex={1}>
		Namaste React
	</h1>
);

// React Component
// - Functional component - latest way
//  Class Based - old way

// console.log(h1);
const heading = (
	// <h1 id="title" key="headding-1">
	<>
		<h1> Namaste JS from JSX</h1>
		{/* <h1> Namaste JS from JSX</h1>
		<h1> Namaste JS from JSX</h1> */}
	</>
);
// Composing Comopnentss

// Functonal component - conventional way to capitalize name but not mandatory
let xyz = 10;
const HeaderComponent = () => {
	return (
		<div>
			<Title />
			{xyz}
			{/* {Title()} */}
			++
			{"-"}
			{80 + 5}
			<h2>Namaste React functional component</h2>
			<h2>This is a h2 tage</h2>
			{heading}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
//passing a react element inside the root

// render react element write --> root.render(heading);
/// render react component write --> root.render(<HeaderComponent/>);

root.render(<HeaderComponent />);
