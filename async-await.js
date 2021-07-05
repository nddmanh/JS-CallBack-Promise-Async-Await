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
                resolve();
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
const hanhDong = async () => {
    try {
        const soDt = await xinSoDt();
        try {
            await sacPin();
            goiChoManh(soDt);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

hanhDong();