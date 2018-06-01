export class News{
    
    constructor(
        public uid:string,
        public date:Date,
        public title: string,
        public abstract: string,
        public url: string,
        public photo: string
    ){}
}