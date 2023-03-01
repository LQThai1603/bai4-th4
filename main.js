function lai(){
    let amount = prompt("nhap vao so tien vay: ");
    let rate = prompt("nhap vao lai suat: ");
    let months = prompt("nhap vao so thang tra: ");
    let interest = (amount * (rate * 0.01))/months;
    let total = ((amount/months) + interest);
    alert("EMI: " + total).toFixed(2);
}