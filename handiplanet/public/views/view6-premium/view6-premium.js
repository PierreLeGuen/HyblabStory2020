class View6Premium extends View {
    constructor(receiver){
        super('view6-premium', receiver);

    }

    linkElements(){
        this.btn_like = document.getElementById('view6premium-like');
        this.smartphone = document.getElementById('view6premium-smartphone');
        this.btn_like.addEventListener('click', ()=>{
            this.smartphone.src = "./assets/view6-premium/smartphone-clicked.svg";
        });

        linkElements(){
            // Button to next view
            this.btNext = document.getElementById('view6p-next-button');
            this.btNext.addEventListener('click', ()=>{
                
            });
        }
    }
}