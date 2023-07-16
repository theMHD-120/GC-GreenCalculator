var operator = ""
var number_str = "";
var last_number = 0;  // last entered number;
var last_result = ""; // last obtained number (last result);
var lbl_res_back_color = "background-color: rgb(6, 235, 117);";

function click_numbers(number) {
    document.getElementById("lbl_res").style = lbl_res_back_color;

    if (number_str.length < 10) {
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
    last_number = parseFloat(number_str);
}

function calculate_last_res() {
    var last_result_num = parseFloat(last_result);
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
            case "=":
                last_result_num = last_number;
                break;
        }
        last_result = last_result_num.toString();
    } 
    else {
        last_result = number_str;
    }
}

function click_operators(op) {
    if (op == ".") {
        if (number_str == "") {
            document.getElementById("lbl_res").style = lbl_res_back_color;
            document.getElementById("lbl_res").innerHTML = number_str += "0.";
        }
        else if (!(number_str.includes(".")))
            document.getElementById("lbl_res").innerHTML = number_str += ".";
    }
    else if (!(number_str == "" && operator == "")) {
        if (number_str != "") {
            save_last_number();
            calculate_last_res();   
        }

        operator = op;                                                                  
        number_str = "";
        document.getElementById("lbl_res").innerHTML = last_result;
    }
}