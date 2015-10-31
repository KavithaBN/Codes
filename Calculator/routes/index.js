var ejs = require("ejs");

exports.index = function(req, res){
	  res.render('index', { title: 'Calculator' });
	};
	
function result(req,res){
	ejs.renderFile('./views/index.ejs',function(err, result) {
		var num1=req.param("num1");
		var num2=req.param("num2");
		var value,msg="";
		
		if(typeof num1 === "number" && typeof num2 === "number") {
			switch(req.param("oper")) {
				case "Addition":
					value = num1+num2;
					break;
				case "Subtraction":
					value = num1-num2;
					break;
				case "Multiplication":
					value = num1*num2;
					break;
				case "Division":
					value = num1/num2;
					
					break;
				default:
					value = "Error";
					msg = "Select an operator";
			}
		}
		else {
			value = "Error";
			msg = "Enter a valid number";
		}
		console.log("result:"+value);
		res.send({"Infinity":value,"error":msg});
	});
}
exports.result=result;