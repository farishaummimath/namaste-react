const h1 = React.createElement(
	"h1",
	{ id: "title", key: 1, style: { fontSize: "24px", color: "#875434" } },
	"Namaste Everyone"
);
const h2 = React.createElement(
	"h2",
	{ id: "title2", key: 2, style: { fontSize: "24px", color: "#809344" } },
	"Welcome to chapter 1"
);
const container = React.createElement(
	"div",
	{
		id: "container",

		style: { fontSize: "24px", color: "#809344" },
	},
	[h1, h2] // passing the container children
);
// console.log(h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
