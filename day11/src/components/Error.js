import {useRouteError} from "../../../28-01-2023/node_modules/react-router-dom/dist";

const Error = () => {
	const err = useRouteError();
	console.log(err);
	return (
		<div>
			<h1>Oops!!</h1>
			<h2>Something went wrong!!</h2>
			<h2>{err.status + " :  " + err.statusText}</h2>
		</div>
	);
};

export default Error;
