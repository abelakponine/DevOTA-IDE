import React from "react";

const ToolBox = ()=>{
	return (
		<div className="toolbox explorer grid column-3 no-border no-padding no-margin relative">
			<div className="container display-flex flex-column">
				<details style={{color: "#fb9a75"}} open>
					<summary>Team Members</summary>
					<ul>
						<li><span></span><span>Abel Akponine</span></li>
					</ul>
				</details>
				<div style={{height:"100%"}}>
					<h5 style={{color: "silver",margin: "10px 0 0 0"}}>General Chat</h5>
					<div style={{background:"#424148",height:"280px",margin:"12px 0 0 0",borderRadius: "6px"}}>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ToolBox;