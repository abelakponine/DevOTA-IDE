import React from "react";
import "../styles/devgod.app.css";
import "../styles/editor.css";

import Header from "./Header";
import Explorer from "./Explorer";
import Editor from "./Editor";
import ToolBox from "./ToolBox";

const Main = ()=>{
	return (
		<div className="bgColor rowspan display-flex flex-column">
			{Header()}
			<div className="grid display-flex fullHeight">
				{Explorer()}
				{Editor()}
				{ToolBox()}
			</div>
		</div>
    );
};

export default Main;