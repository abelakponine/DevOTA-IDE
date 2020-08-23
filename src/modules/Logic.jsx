import React from "react";

class Logic extends React.Component {

	constructor(){
		super();
		this.offset = 0;
		this.elem = null;
	}
	setOffset(val){
		this.offset = val;
	}
	addTab(e){
		if (e.keyCode === 9){
			e.preventDefault();
			document.execCommand("insertHTML",false,"&nbsp;&nbsp;&nbsp;&nbsp;");
		}
	}
	beautify(){
		console.log("Beautify");
	}
	doKeyDownLogic(e){
		let logic = new Logic();
		logic.addTab(e);
		logic.beautify();
	}
	doOnloadLogic = (e)=>{
		document.getElementsByClassName("writer")[0].innerText = `<?php
    class Player {
        private $fname;
        private $lname;

        function __construct($fname, $lname){
            $this->fname  = $firstname;
            $this->lname = $lastname;
        }
        function getFname(){
            return $this->fname;
        }
        function setFname($fname){
            $this->fname = $fname;
        }
        function getLname(){
            return $this->fname;
        }
        function setLname($lname){
            $this->lname = $lname;
        }
    }
?>`;
	}
}

export default Logic;