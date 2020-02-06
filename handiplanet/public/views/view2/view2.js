
class View2 extends View {
    constructor(receiver){
        super('view2', receiver);
    }
    
    linkElements(){
        this.btFree = document.getElementById('button-hotel-a');
        this.btFree.addEventListener('click', ()=>{
            this.switchToViewFree();
        });
        this.btPremium = document.getElementById('button-hotel-b');
        this.btPremium.addEventListener('click', ()=>{
            this.switchToViewPremium();
        });
    }

    async switchToViewFree() {
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';
        // Création de la prochaine view
        const nextView = new View3Free(tempDiv);
        await nextView.load();
        this.view.style.transition = 'transform 1s';
        tempDiv.style.transition = 'transform 1s';
        this.view.style.transform = 'translateY(-100%)';
        tempDiv.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            tempDiv.replaceWith = nextView.view;
            this.view.parentNode.removeChild(this.view);
        }, 1000);
    }

    async switchToViewPremium() {
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';
        // Création de la prochaine view
        const nextView = new View3Premium(tempDiv);
        await nextView.load();
        this.view.style.transition = 'transform 1s';
        tempDiv.style.transition = 'transform 1s';
        this.view.style.transform = 'translateY(-100%)';
        tempDiv.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            tempDiv.replaceWith = nextView.view;
            this.view.parentNode.removeChild(this.view);
        }, 1000);
    }
}