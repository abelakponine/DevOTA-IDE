import React from "react";
import Logic from "./Logic";

let logic = new Logic();

function Editor(e){

	window.onload = async (e)=>{
		await new Promise((res,rej)=>{
			res(logic.doOnloadLogic(e));
		}).then((e,f)=>{
			logic.beautify();
		});
		document.getElementsByClassName('writer')[0].onchange = ()=>{
			console.log("hello");
		};
	};
	return (
		<div className="editor grid column-1 no-margin no-border relative">
			<div className="line-number absolute"></div>
			<div className="relative" style={{display:"flex",height:"100%"}}>
				<p className="writer container" onKeyDown={logic.doKeyDownLogic} spellCheck="false" contentEditable="true" style={{width:"calc(100% - 28px)",margin:"0"}}>
				</p>
			</div>
		</div>
    );
}

export default Editor;