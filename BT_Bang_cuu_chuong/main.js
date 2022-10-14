let table;
table = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (let i = 1; i <= 10; ++i) {
    table += "<tr>";
    for (let j = 2; j <= 9; ++j){
        table += "<td>" + j +"x"+ i+"="+j*i+"</td>"
    }
    table += "</tr>";
}
table += "</table>";
document.write(table)