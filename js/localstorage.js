document.querySelector('#bang').addEventListener('input', function(e) {
    document.querySelector('#bang_img').setAttribute('src', e.target.value)
})

document.querySelector('#eyes').addEventListener('input', function(e) {
    document.querySelector('#eyes_img').setAttribute('src', e.target.value)
})

document.querySelector('#eyesclosed').addEventListener('input', function(e) {
    document.querySelector('#eyesclosed_img').setAttribute('src', e.target.value)
})

document.querySelector('#mouth').addEventListener('input', function(e) {
    document.querySelector('#mouth_img').setAttribute('src', e.target.value)
})

document.querySelector('#mouthopen').addEventListener('input', function(e) {
    document.querySelector('#mouthopen_img').setAttribute('src', e.target.value)
})

document.querySelector('#face').addEventListener('input', function(e) {
    document.querySelector('#face_img').setAttribute('src', e.target.value)
})

document.querySelector('#body').addEventListener('input', function(e) {
    document.querySelector('#body_img').setAttribute('src', e.target.value)
})

document.querySelector('#back').addEventListener('input', function(e) {
    document.querySelector('#back_img').setAttribute('src', e.target.value)
})

document.querySelector('#submit').addEventListener('click',function(e){
    if (document.querySelector('#bang').value || !localStorage.getItem('ftBang')) {
       localStorage.setItem('ftBang', document.querySelector('#bang').value)
    }
    if (document.querySelector('#eyes').value || !localStorage.getItem('ftEyes')) {
        localStorage.setItem('ftEyes', document.querySelector('#eyes').value)
    }
    if (document.querySelector('#eyesclosed').value || !localStorage.getItem('ftEyesClosed')) {
        localStorage.setItem('ftEyesClosed', document.querySelector('#eyesclosed').value)
    }
    if (document.querySelector('#mouth').value || !localStorage.getItem('ftMouth')) {
        localStorage.setItem('ftMouth', document.querySelector('#mouth').value)
    }
    if (document.querySelector('#mouthopen').value || !localStorage.getItem('ftMouthOpen')) {
        localStorage.setItem('ftMouthOpen', document.querySelector('#mouthopen').value)
    }
    if (document.querySelector('#face').value || !localStorage.getItem('ftFace')) {
        localStorage.setItem('ftFace', document.querySelector('#face').value)
    }
    if (document.querySelector('#body').value || !localStorage.getItem('ftBody')) {
        localStorage.setItem('ftBody', document.querySelector('#body').value)
    }
    if (document.querySelector('#back').value || !localStorage.getItem('ftBack')) {
        localStorage.setItem('ftBack', document.querySelector('#back').value)
    }

    location.href = location.origin + '/live.html'
})
