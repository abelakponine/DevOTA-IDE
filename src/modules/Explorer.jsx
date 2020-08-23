import React from "react";

function Explorer(){
	return (
		<div className="explorer grid column-3 no-border no-margin relative">
			<div className="container">
				<details open>
					<summary>DevOTA</summary>
					<ul>
						<li>Main.java</li>
						<li className="active">index.php</li>
						<li>demo.php</li>
						<li>test.php</li>
						<li>compiler.php</li>
					</ul>
				</details>
			</div>
		</div>
	);
}

export default Explorer;