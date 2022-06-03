

if (typeof init === 'undefined') {
    console.log('run');
    try {
        var media = document.getElementsByClassName("video-stream html5-main-video");
        console.log(media);
        console.log(window.location.href);
        console.log('Successful');
    } catch (e) {
        console.log('not Successful');
        console.log(e);
    }
    /*const init=function(){
        const inject=document.createElement('div');
        inject.className='element';
        inject.innerHTML='Hello';
        document.body.appendChild(inject);
    }
    init();*/
}





