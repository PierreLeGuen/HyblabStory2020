/*
 * Project: handigo
 * Created Date: Thursday February 6th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Thursday, 6th February 2020 4:34:08 pm
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */


class View13 extends View {
    constructor(receiver){
        super('view13', receiver);
        // super.load();
    }

    
    async switchToNextView(){
        const borderBottom = document.getElementById('overlay-footer');
        borderBottom.className = '';
        showContextView(this.view);
    }

    linkElements(){
        hideSplash();
        // Button to next view
        this.btNext = setOverlayButton('Retrouver Wendy', false, 'sound/hover/go_to_wendy.mp3');
        this.btNext.addEventListener('click', ()=>{
            this.switchToNextView();
        });
        const borderBottom = document.getElementById('overlay-footer');
        borderBottom.className = 'hide-after';
    }

    play() {
        window.soundManager.play('sound/Data_4.mp3');
    }
}