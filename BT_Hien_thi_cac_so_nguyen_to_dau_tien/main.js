let numbers = +prompt("Nhập vào n số nguyên tố đầu tiên");
let count = 0; // biến count dùng để đếm số lượng số nguyên tố cần in ra đã bằng number chưa
let N = 2 // biến này để kiểm tra xem các giá trị nó nhận được có phải là số nguyên tố không, mỗi lần lặp giá trị của biến sẽ được tăng lên 1.
// Hàm kiểm tra số nguyên tố
let check = (number) => {
    let flag = true // biến cờ hiệu
    for (let i = 2; i < number - 1; ++i) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    return flag
}

while (count < numbers) {
    if (check(N)) {
        document.write(N +"<br>");
        ++count
    }
    ++N;

}

