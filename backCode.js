var operator = ""
var number_str = "";
var last_number = 0;  // last entered number;
var last_result = ""; // last obtained number (last result);
var is_number_neg = false; // if entered number was negative;
var lbl_res_back_color = "background-color: rgb(6, 235, 117);";

function click_numbers(number) {
    document.getElementById("lbl_res").style = lbl_res_back_color;

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

function save_last_number() {
    if (number_str == "0.")
        number_str = "0";
    last_number = Number(number_str);

    if (is_number_neg)
        last_number *= -1;
}

function calculate_last_res() {
    var last_result_num = Number(last_result);
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
            case "!":
                last_result_num = last_number;
                last_result_num *= 10; // factorial
                break;
            case "=":
                last_result_num = last_number;
                break;
        }
        
        last_result_num = Number(last_result_num.toFixed(10));
        last_result = last_result_num.toString();
    } 
    else {
        if (operator == "!") {
            last_result_num = last_number;
            last_result_num *= 10; // factorial
            last_result = last_result_num.toString();
        }
        else 
            last_result = number_str;
    }
}

function click_even_operators(op) {
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
        if (document.getElementById("lbl_res").style == lbl_res_back_color) {
            operator = ""
            last_number = 0;  
            number_str = "0";
            last_result = ""; 
            is_number_neg = false;
        } 
        else
            document.getElementById("lbl_res").style = lbl_res_back_color;
        document.getElementById("lbl_res").innerHTML = "0";
    }
    else if (op == "off") {
        operator = ""
        last_number = 0;  
        number_str = "";
        last_result = ""; 
        is_number_neg = false;
        document.getElementById("lbl_res").innerHTML = "";
        document.getElementById("lbl_res").style = "background-color: rgb(4, 120, 60);";
    }
    else if (op == "back") {
        number_str -= lastIndexOf(number_str);
    }
}