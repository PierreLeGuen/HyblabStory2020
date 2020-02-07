/*
 * File Created: 2020-02-07 14:35
 * Author: Alban LECUIVRE
 * Copyright - 2020 Alban LECUIVRE
 */

async function showContextView(currentView){
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.left = '100%';

    // Création de la prochaine view
    if(window.contextView == null){
        window.contextView = new Contexte(tempDiv);
        await window.contextView.load();
    } else {
        tempDiv.appendChild(window.contextView.view);
        window.contextView.view.style.animation = '';
    }
    currentView.style.animation = 'scrollTransitionHorizontal 1s forwards';
    currentView.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    setTimeout(() => {
        tempDiv.replaceWith(window.contextView.view);
        currentView.remove();
    }, 1000);
}

async function transitionHorizontal(view, NextView){
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.left = '100%';

    // Création de la prochaine view
    const nextView = new NextView(tempDiv);
    await nextView.load();
    view.style.animation = 'scrollTransitionHorizontal 1s forwards';
    view.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    setTimeout(() => {
        tempDiv.replaceWith = nextView.view;
        view.remove();
    }, 1000);
}

async function transitionHorizontalInvert(view, NextView){
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.right = '100%';

    // Création de la prochaine view
    const nextView = new NextView(tempDiv);
    await nextView.load();
    view.style.animation = 'scrollTransitionHorizontalInvert 1s forwards';
    view.style.webkitAnimation = 'scrollTransitionHorizontalInvert 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontalInvert 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontalInvert 1s forwards';
    setTimeout(() => {
        tempDiv.replaceWith = nextView.view;
        view.remove();
    }, 1000);
}