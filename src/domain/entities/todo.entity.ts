

export class TodoEntity {
    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date|null
    ){}

    get isCompleted(){
        //  !!this.completedAt convierte cualquier 
        //valor "falsy" (como null, undefined, 0, "", etc.) en false,
        // y cualquier valor "truthy" en true. Esto se usa para verificar si completedAt tiene un valor válido o no.
        return !!this.completedAt;
    }

    

}

