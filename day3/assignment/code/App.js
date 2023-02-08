import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import logo from "./assets/images/logo.png";
import user from "./assets/images/user.png";
// Q.1a Create Nested Header Element using React.createElement

const heading1 = React.createElement(
	"h1",
	{id: "heading1"},
	"Namaste React Live"
);
const heading2 = React.createElement(
	"h2",
	{id: "heading2"},
	"Day 3 assignment"
);
const heading3 = React.createElement(
	"h3",
	{id: "heading3"},
	"Nested header examples React Live Day 3 assignment"
);

const headerElement = React.createElement("div", {className: "title"}, [
	heading1,
	heading2,
	heading3,
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headerElement);

// Q.1b Create Nested Header Element using Jsx

const headerJsx = (
	<div className="title">
		<h1>Namaste React Live JSX</h1>
		<h2>Day 3 assignment JSXe</h2>
		<h3> "Nested header examples React Live Day 3 assignment"</h3>
	</div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headerJsx);

// Q.1c Create Nested Header Element using functional and JSX

const Header = () => (
	<div className="title">
		<h1>Namaste React Live functional component JSX</h1>
		<h2>Day 3 assignment functional component JSX</h2>
		<h3>
			"Nested header examples React Live Day 3 assignment"- functional component
			JSX
		</h3>
	</div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);

// Q.1d Create Nested Header Element using JSX and attributes

const headerJsxWithAttributes = (
	<div className="title">
		<h1 id="heading1">Namaste React Live using JSX and attributes</h1>
		<h2>Day 3 assignment using JSX and attributes</h2>
		<h3>
			"Nested header examples React Live Day 3 assignment"- using JSX and
			attributes
		</h3>
	</div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headerJsxWithAttributes);

//Q.1e Composition of components

const ComposedComponent = () => {
	return (
		<div>
			<Header>Hello</Header>;
			<Header />;{<Header>Hello</Header>}
		</div>
	);
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ComposedComponent />);

//Q.1e different components

const jsxComponent = (
	<div>
		<Header>Hello</Header>;
		<Header /> {/*gives you warning since Header IS COMPONENT */}
		{<Header>Hello</Header>}
	</div>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<jsxComponent />);

//Q2. header component with search name and logo
const HeaderComponent = () => {
	return (
		<div className="header-container">
			<div className="logo">
				<img src={logo} alt="logo image" />
			</div>
			<div className="search">
				<input type="search" id="search" placeholder="search name or key" />
			</div>
			<div className="user-icon">
				<img src={user} alt="user image" />
			</div>
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
