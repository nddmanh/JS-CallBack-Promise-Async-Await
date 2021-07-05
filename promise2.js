// Xin so dien thoai va sac pin

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

const sacPin = () => {
    console.log("Doi 1 ty :'( Sac pin da :(((( ");
    let chayPin;

    const thaoTacSacPin = new Promise ((resolve, reject) => {
        setTimeout(() => {
            chayPin = false;

            if(!chayPin) {
                console.log("Sac pin day. Bat dau goi cho Manh");
                resolve(soDt);
            } else {
                reject(" Chay cmn pin rooi. Ko goi duoc! ");
            }
        }, 2000);
    })

    return thaoTacSacPin;
};

// Goi cho Manh
const goiChoManh = (soDt) => {
    console.log(`Dang noi chuyen voi Manh tai so: ${soDt}`);
}

// Thuc hien toan bo thao tac
xinSoDt()
  .then( (soDt) => {
    sacPin(soDt)
      .then((soDt) => goiChoManh(soDt))
      .catch((loiKhiSacPin) => console.log(loiKhiSacPin))
  })
  .catch( (loi) => console.log(loi) )