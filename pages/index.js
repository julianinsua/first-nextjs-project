import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
	static async getInitialProps(context) {
		console.log(context);
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ appName: "SuperApp" });
			}, 1000);
		});
		return promise;
	}

	render() {
		return (
			<div>
				<h1>The Main Page of {this.props.appName}</h1>
				<p>
					Go to the{" "}
					<Link href='/auth'>
						<a>Auth</a>
					</Link>
					<button onClick={() => Router.push("/auth")}>Go to Auth</button>
				</p>
			</div>
		);
	}
}

export default IndexPage;
