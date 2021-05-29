const result = document.getElementById("result");
const point = document.getElementById("point");

let operators = ["+", "-", "*", "/"];
let numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


result.textContent = "0";

//数字に関するルール
function btnAction(num){
    //演算子の直後に"00"を追加しない
    if ((operators.indexOf(result.textContent.slice(-1)) != -1) && num == "00"){
        return;
    }
    if (result.textContent == "0"){//表記が0の時
        if(num == "0" || num == "00"){//は0を追加しない（何も起きない）
            return;
        }else{
        result.textContent = num;//先頭の0は消して数字を並べる
    }} else{//表記が0じゃないときは
    result.textContent += num;//文字列末尾に数字追加
    }
}

//演算子に関するルール
function operator(opt){
    //マイナスのみ先頭につけられる
    if (result.textContent === "0" && opt == "-"){
        result.textContent = "-";
        point.classList.remove("inactive");
    //演算子は続けて打てない
    }else if(operators.indexOf(result.textContent.slice(-1)) === -1){//文字列の最後が演算子でないなら演算子を追加
        result.textContent += opt;
        point.classList.remove("inactive");//演算子を挟んだら、小数点をもう一度打てるように
    }
}

//小数点に関するルール
function pointer(){
    // 不活性なら何もしない
    if (point.classList.contains("inactive") === true){
        return;
    }//前に数字がないなら小数点は打てない
    else if(numbers.indexOf(result.textContent.slice(-1)) === -1){
        return;
    }else{
        result.textContent += ".";
        point.classList.add("inactive");//小数点を打ったら不活性にして一度打てないように、operator()で活性に戻す処理
    }
}

//ACボタン    
function AC(){
    result.textContent = "0";
    point.classList.remove("inactive");
}

//=ボタン
function calc(){
    result.textContent = String(eval(result.textContent))
    point.classList.add("inactive");
}