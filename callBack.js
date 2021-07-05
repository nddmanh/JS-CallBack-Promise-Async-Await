const xinSoDt = (hamGoiLaiSauKhiTimRa) => {
    let soDt;

    console.log("Goi dien cho thang ban. Cho tao xin so thang Manh");

    console.log("Thang ban dang tim sdt thang Manh");

    setTimeout(() => {
        soDt = 123456;
        console.log("Day roi> Da tim duoc so thang Nam");
        hamGoiLaiSauKhiTimRa(soDt, goiChoManh);
    }, 1000);
}

const sacPin = (soDt, hamGoiLaiSauKhiSacPin) => {
    console.log("Doi ty, di sac pin phat");

    setTimeout(() => {
        console.log("Sac pin xong. Bat dau goi cho Manh");
        hamGoiLaiSauKhiSacPin(soDt);
    }, 2000);
}

const goiChoManh = (soDt) => {
    console.log(`Dang noi chuyen dien thoai voi Manh sau khi goi vao sdt: ${soDt}`);
}

xinSoDt(sacPin);