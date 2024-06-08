


export default defineEventHandler(async (event) => {
    try {
        const userId = event.context.auth?.userId


        if (!userId) {
            throw new Error('unauthorized')
        }

        const config = useRuntimeConfig()

        const { amount } = readBody(event);

        const {accountNo,accountName, acqId } = config;

        // amount: money.value,
        // bin: bankInfo.value.bin,
        // accountName: bankInfo.value.accountName,
        // accountNumber: bankInfo.value.accountNumber,
        // note: user.value.uid,

        //  https://api.vietqr.io/v2/generate
        // {
        //   accountNo: '113366668888',
        //   accountName: 'QUY VAC XIN PHONG CHONG COVID',
        //   acqId: '970415',
        //   addInfo: 'Ung Ho Quy Vac Xin',
        //   amount: '79000',
        //   template: 'qr_only'
        // }

        // https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<DESCRIPTION>&accountName=<ACCOUNT_NAME>
        // {
        //   "accountNo": "113366668888",
        //   "accountName": "QUY VAC XIN PHONG CHONG COVID",
        //   "acqId": "970415",
        //   "addInfo": "Ung Ho Quy Vac Xin",
        //   "amount": "79000", 
        //   "template": "compact"
        // }


        // let note = nanoid(6);
        // const fetch = await axios.post('https://api.vietqr.io/v2/generate', {
        //     'accountNo': Config.bank.number,
        //     'accountName': Config.bank.name,
        //     'acqId': Config.bank.bin,
        //     'addInfo': `${note}`, // 8 chữ số định danh duy nhất
        //     'amount': `${lamTronSo(amount * 1000)}`,
        //     'template': 'qr_only' //compact
        // })

        // return doc
    } catch (error) {
        throw  createError(error)
    }
})