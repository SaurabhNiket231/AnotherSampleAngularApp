export class Customer {
    constructor(
        public id:number,
        public firstName: string,
        public lastName: string,
        public mobileNumber: string,
        public dateOfBirth: Date,
        public aadharNum: string,
        public bankAccountNo: string,
        public bankName: string,
        public ifscCode: string,
        public gender: string,
        public panNum: string
    ){}
}
