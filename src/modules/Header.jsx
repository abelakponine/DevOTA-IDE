import React from "react";

const Header = ()=>{
	return (
		<header className="header grid column-1 no-border no-margin">
			<div className="grid column-3 no-border no-padding">
				<div className="inline-table">
					<h3 className="label inline-table">DevOTA</h3>
				</div>
				<ul className="nav">
					<li>File</li>
					<ol>
						<li>New File</li>
						<li>New Folder</li>
						<li>New Project</li>
					</ol>
				</ul>
				<ul className="nav">
					<li>Edit</li>
				</ul>
				<ul className="nav">
					<li>View</li>
				</ul>
				<ul className="nav">
					<li>Tools</li>
				</ul>
			</div>
			<div className="grid column-3 center no-border no-margin no-padding">
				<select className="dictionary cursor-pointer" type="search" defaultValue="PHP">
					<option>HTML</option>
					<option>CSS</option>
					<option>JavaScript</option>
					<option>PHP</option>
					<option>Java</option>
				</select>
				<span className="fas fa-play cursor-pointer" style={{margin:"4px 25px",color: "green"}}></span>
			</div>
			<div className="grid column-3 no-border no-padding">
				<span style={{color:"#949494"}}>Coming Soon! - Developed by <i className="fab fa-github"></i> <a href="https://github.com/abelakponine" target="_blank" style={{color:"#d69364", textDecoration:"underline"}} rel="noopener noreferrer">Abel Akponine</a></span>
			</div>
		</header>
	);
};

export default Header;