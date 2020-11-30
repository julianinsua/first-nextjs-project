import React from "react";
import User from "../../components/User";

const AuthIndexPage = (props) => {
	return (
		<div>
			<h1>The Auth Index Page of {props.appName}</h1>
			<User name='Max' age={28} />
		</div>
	);
};

AuthIndexPage.getInitialProps = (context) => {
	console.log(context);
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ appName: "SuperApp" });
		}, 1000);
	});
	return promise;
};

export default AuthIndexPage;
