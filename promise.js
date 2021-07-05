// Xin so dien thoai

const xinSoDt = () => {
    console.log("Goi dien cho thang ban. Cho tao xin so thang Manh voi huhu T.T ");
    console.log("Doi xiu ddang tim.....");

    const thaoTacTimKiem = new Promise( (resolve, reject) => {
        let daTimThay;

        setTimeout(() => {
            daTimThay = true;

            if(daTimThay) {
                soDt = 123456;
                console.log(`Day roi. So cua Manh dz la ${soDt}`);
                resolve(soDt);
            } else {
                reject(" Tao khong co so cua thang Manh dou nhe :( ");
            }
        }, 1000);
    })
    return thaoTacTimKiem;
};

xinSoDt()
  .then( (soDt) => console.log(`Da xin duoc so thang Manh: ${soDt}`) )
  .catch( (loi) => console.log(loi) )