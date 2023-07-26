var operator = "";
var number_str = "";
var last_number = 0; // last entered number;
var last_result = ""; // last obtained number (result);
var last_result_num = 0; // last result with number type;
var is_number_neg = false; // if entered number was negative;
var is_number_entered = false; // used in factorial operation;
var is_fact_inv_entered = false; // used in click number function; 
// Top variable is for when factorial or inverse operators are entered;
var lbl_res_back_color = "background-color: rgb(6, 235, 117);";



// Called functions (from events functions)...

function save_last_number() {
    if (number_str == "0.")
        number_str = "0";
    last_number = Number(number_str);

    // if (is_number_neg) {
    //     last_number *= -1;
    //     is_number_neg = false;
    // }
}

function calculate_last_res() {
    last_result_num = Number(last_result);
    if (last_result != "") {
        switch(operator) {
            case "+":
                last_result_num += last_number;
                break;
            case "-":
                last_result_num -= last_number;
                break;
            case "*":
                last_result_num *= last_number;
                break;
            case "/":
                last_result_num /= last_number;
                break;
            case "%":
                last_result_num %= last_number;
                break;
            case "^":
                last_result_num **= last_number;
                break;
            case "=":
                last_result_num = last_number;
                break;
        }
        
        last_result_num = Number(last_result_num.toFixed(10));
        last_result = last_result_num.toString();
    } 
    else {
        last_result = number_str;
    }
}

function factorial() {
    
}



// Events functions ...

function click_numbers(number) {
    is_number_entered = true;
    document.getElementById("lbl_res").style = lbl_res_back_color;

    if (is_fact_inv_entered) {
        number_str = "";
        is_fact_inv_entered = false;
    }

    if (number_str.length < 12) {
        if (number_str == "0")
            number_str = "";

        switch(number) {
            case 9:
                document.getElementById("lbl_res").innerHTML = number_str += "9";
                break;
            case 8:
                document.getElementById("lbl_res").innerHTML = number_str += "8";
                break;
            case 7:
                document.getElementById("lbl_res").innerHTML = number_str += "7";
                break;
            case 6:
                document.getElementById("lbl_res").innerHTML = number_str += "6";
                break;
            case 5:
                document.getElementById("lbl_res").innerHTML = number_str += "5";
                break;
            case 4:
                document.getElementById("lbl_res").innerHTML = number_str += "4";
                break;
            case 3:
                document.getElementById("lbl_res").innerHTML = number_str += "3";
                break;
            case 2:
                document.getElementById("lbl_res").innerHTML = number_str += "2";
                break;
            case 1:
                document.getElementById("lbl_res").innerHTML = number_str += "1";
                break;
            case 0:
                document.getElementById("lbl_res").innerHTML = number_str += "0";
                break;
        }
    }
}

function click_even_operators(op) {
    is_number_entered = false;
    if (!(number_str == "" && operator == "")) {
        if (number_str != "") {
            save_last_number();
            calculate_last_res();   
        }

        operator = op;                                                                  
        number_str = "";
        document.getElementById("lbl_res").innerHTML = last_result;
    }
}

function click_odd_operators(op) {
    if (op == ".") {
        if (number_str == "") {
            document.getElementById("lbl_res").style = lbl_res_back_color;
            document.getElementById("lbl_res").innerHTML = number_str += "0.";
        }
        else if (!(number_str.includes(".")))
            document.getElementById("lbl_res").innerHTML = number_str += ".";
    }
    else if (op == "o/r") {
        if (document.getElementById("lbl_res").style != lbl_res_back_color)
            document.getElementById("lbl_res").style = lbl_res_back_color;

        operator = ""; 
        number_str = "";
        last_number = 0; 
        last_result = ""; 
        last_result_num = 0;
        is_number_neg = false;
        is_number_entered = false;
        is_fact_inv_entered = false;
        click_numbers(0);
    }
    else if (op == "off") {
        operator = "";
        last_number = 0;  
        number_str = "";
        last_result = ""; 
        is_number_neg = false;
        is_number_entered = false;
        is_fact_inv_entered = false;
        document.getElementById("lbl_res").innerHTML = "";
        document.getElementById("lbl_res").style = "background-color: rgb(4, 120, 60);";
    }
    else if (!(number_str == "" && operator == "")) {
        if (op == "back") {
            if (number_str.length > 1)
                number_str = number_str.slice(0, -1);
            else {
                number_str = "";
                click_numbers(0);
            }
                
            document.getElementById("lbl_res").innerHTML = number_str;
        }
        else if (op == "+/-") {
            if (is_number_neg) {
                is_number_neg = false;
                number_str = "-" + number_str;
            }
            else {
                is_number_neg = true;
                number_str = number_str;
            }
        }
        else if (op == "!" || op == "1/x") {
            if (is_number_entered) {
                save_last_number();
                if (op == "!")
                    last_number *= 10; // factorial
                else
                    last_number = 1 / last_number;
                last_result = last_number.toString();
                number_str = last_result;
            }
            else {
                last_result_num = Number(last_result);
                if (op == "!")
                    last_result_num *= 10; // factorial
                else
                    last_result_num = 1 / last_result_num;
                last_result = last_result_num.toString();
            }
            
            is_fact_inv_entered = true;
            document.getElementById("lbl_res").innerHTML = last_result;
        }
    }
}