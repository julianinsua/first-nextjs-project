import Link from "next/link";
import React from "react";

export const errorPage = () => {
	return (
		<div>
			<h1>Ahahah, you didn't say the magic word!</h1>
			<p>This is a custom 404 error. Do you know what you are doing pal?</p>
			<p>
				if you don't, try going
				<Link href='/'>
					<a> back</a>
				</Link>
				.
			</p>
		</div>
	);
};

export default errorPage;
