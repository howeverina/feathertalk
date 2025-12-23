if (localStorage.getItem('ftBang')) {
    if (localStorage.getItem('ftBang')[0]!='[') {
        localStorage.setItem('ftBang', `${JSON.stringify(new Array(10).fill(localStorage.getItem('ftBang')))}`)
    }
    for (let i=0; i<10; i++){
        document.querySelector(`#bang_img${(i+1)%10}`).setAttribute('src', JSON.parse(localStorage.getItem('ftBang'))[i])
    }
} else {
    for (let i=0; i<10; i++){
        document.querySelector(`#bang_img${(i+1)%10}`).setAttribute('src', 'assets/bang.png')
    }
}

if (localStorage.getItem('ftEyes')) {
    if (localStorage.getItem('ftEyes')[0]!='[') {
        localStorage.setItem('ftEyes', `${JSON.stringify(new Array(10).fill(localStorage.getItem('ftEyes')))}`)
    }
    for (let i=0; i<10; i++){
        document.querySelector(`#eyes_img${(i+1)%10}`).setAttribute('src', JSON.parse(localStorage.getItem('ftEyes'))[i])
    }
} else {
    for (let i=0; i<10; i++){
        document.querySelector(`#eyes_img${(i+1)%10}`).setAttribute('src', 'assets/eyes.png')
    }
}

if (localStorage.getItem('ftEyesClosed')) {
    if (localStorage.getItem('ftEyesClosed')[0]!='[') {
        localStorage.setItem('ftEyesClosed', `${JSON.stringify(new Array(10).fill(localStorage.getItem('ftEyesClosed')))}`)
    }
    for (let i=0; i<10; i++){
        document.querySelector(`#eyesclosed_img${(i+1)%10}`).setAttribute('src', JSON.parse(localStorage.getItem('ftEyesClosed'))[i])
    }
} else {
    for (let i=0; i<10; i++){
        document.querySelector(`#eyesclosed_img${(i+1)%10}`).setAttribute('src', 'assets/eyesclosed.png')
    }
}

if (localStorage.getItem('ftMouth')) {
    if (localStorage.getItem('ftMouth')[0]!='[') {
        localStorage.setItem('ftMouth', `${JSON.stringify(new Array(10).fill(localStorage.getItem('ftMouth')))}`)
    }
    for (let i=0; i<10; i++){
        document.querySelector(`#mouth_img${(i+1)%10}`).setAttribute('src', JSON.parse(localStorage.getItem('ftMouth'))[i])
    }
} else {
    for (let i=0; i<10; i++){
        document.querySelector(`#mouth_img${(i+1)%10}`).setAttribute('src', 'assets/mouth.png')
    }
}

if (localStorage.getItem('ftMouthOpen')) {
    if (localStorage.getItem('ftMouthOpen')[0]!='[') {
        localStorage.setItem('ftMouthOpen', `${JSON.stringify(new Array(10).fill(localStorage.getItem('ftMouthOpen')))}`)
    }
    for (let i=0; i<10; i++){
        document.querySelector(`#mouthopen_img${(i+1)%10}`).setAttribute('src', JSON.parse(localStorage.getItem('ftMouthOpen'))[i])
    }
} else {
    for (let i=0; i<10; i++){
        document.querySelector(`#mouthopen_img${(i+1)%10}`).setAttribute('src', 'assets/mouthopen.png')
    }
}

if (localStorage.getItem('ftFace')) {
    if (localStorage.getItem('ftFace')[0]!='[') {
        localStorage.setItem('ftFace', `${JSON.stringify(new Array(10).fill(localStorage.getItem('ftFace')))}`)
    }
    for (let i=0; i<10; i++){
        document.querySelector(`#face_img${(i+1)%10}`).setAttribute('src', JSON.parse(localStorage.getItem('ftFace'))[i])
    }
} else {
    for (let i=0; i<10; i++){
        document.querySelector(`#face_img${(i+1)%10}`).setAttribute('src', 'assets/face.png')
    }
}

if (localStorage.getItem('ftBody')) {
    if (localStorage.getItem('ftBody')[0]!='[') {
        localStorage.setItem('ftBody', `${JSON.stringify(new Array(10).fill(localStorage.getItem('ftBody')))}`)
    }
    for (let i=0; i<10; i++){
        document.querySelector(`#body_img${(i+1)%10}`).setAttribute('src', JSON.parse(localStorage.getItem('ftBody'))[i])
    }
} else {
    for (let i=0; i<10; i++){
        document.querySelector(`#body_img${(i+1)%10}`).setAttribute('src', 'assets/body.png')
    }
}

if (localStorage.getItem('ftBack')) {
    if (localStorage.getItem('ftBack')[0]!='[') {
        localStorage.setItem('ftBack', `${JSON.stringify(new Array(10).fill(localStorage.getItem('ftBack')))}`)
    }
    for (let i=0; i<10; i++){
        document.querySelector(`#back_img${(i+1)%10}`).setAttribute('src', JSON.parse(localStorage.getItem('ftBack'))[i])
    }
} else {
    for (let i=0; i<10; i++){
        document.querySelector(`#back_img${(i+1)%10}`).setAttribute('src', 'assets/back.png')
    }
}

for (let i=0; i<10; i++){
    document.querySelector(`#bang${i}`).addEventListener('input', function(e){
        document.querySelector(`#bang_img${i}`).setAttribute('src', e.target.value)
    })
}

for (let i=0; i<10; i++){
    document.querySelector(`#eyes${i}`).addEventListener('input', function(e){
        document.querySelector(`#eyes_img${i}`).setAttribute('src', e.target.value)
    })
}

for (let i=0; i<10; i++){
    document.querySelector(`#eyesclosed${i}`).addEventListener('input', function(e){
        document.querySelector(`#eyesclosed_img${i}`).setAttribute('src', e.target.value)
    })
}

for (let i=0; i<10; i++){
    document.querySelector(`#mouth${i}`).addEventListener('input', function(e){
        document.querySelector(`#mouth_img${i}`).setAttribute('src', e.target.value)
    })
}

for (let i=0; i<10; i++){
    document.querySelector(`#mouthopen${i}`).addEventListener('input', function(e){
        document.querySelector(`#mouthopen_img${i}`).setAttribute('src', e.target.value)
    })
}

for (let i=0; i<10; i++){
    document.querySelector(`#face${i}`).addEventListener('input', function(e){
        document.querySelector(`#face_img${i}`).setAttribute('src', e.target.value)
    })
}

for (let i=0; i<10; i++){
    document.querySelector(`#body${i}`).addEventListener('input', function(e){
        document.querySelector(`#body_img${i}`).setAttribute('src', e.target.value)
    })
}

for (let i=0; i<10; i++){
    document.querySelector(`#back${i}`).addEventListener('input', function(e){
        document.querySelector(`#back_img${i}`).setAttribute('src', e.target.value)
    })
}

for (let i=0; i<10; i++){
    document.querySelector(`#tab${i}`).addEventListener('click', function(e){
        if (document.querySelector(`#form${i}`)) {
            document.querySelector('.selected').classList.remove('selected')
            document.querySelector('.activated').classList.remove('activated')
            document.querySelector(`#tab${i}`).classList.add('selected')
            document.querySelector(`#form${i}`).classList.add('activated')
        }
    })
}

document.querySelector('#submit').addEventListener('click',function(e){

    if (!localStorage.getItem('ftBang')) {
        let bangArray = new Array(10)
        for (let i=0; i<10; i++){
            bangArray[i] = document.querySelector(`#bang${(i+1)%10}`).value?document.querySelector(`#bang${(i+1)%10}`).value:'assets/bang.png'
        }
        localStorage.setItem('ftBang', JSON.stringify(bangArray))
    }
    if (!localStorage.getItem('ftEyes')) {
        let bangArray = new Array(10)
        for (let i=0; i<10; i++){
            bangArray[i] = document.querySelector(`#eyes${(i+1)%10}`).value?document.querySelector(`#eyes${(i+1)%10}`).value:'assets/eyes.png'
        }
        localStorage.setItem('ftEyes', JSON.stringify(bangArray))
    }
    if (!localStorage.getItem('ftEyesClosed')) {
        let bangArray = new Array(10)
        for (let i=0; i<10; i++){
            bangArray[i] = document.querySelector(`#eyesclosed${(i+1)%10}`).value?document.querySelector(`#eyesclosed${(i+1)%10}`).value:'assets/eyesclosed.png'
        }
        localStorage.setItem('ftEyesClosed', JSON.stringify(bangArray))
    }
    if (!localStorage.getItem('ftMouth')) {
        let bangArray = new Array(10)
        for (let i=0; i<10; i++){
            bangArray[i] = document.querySelector(`#mouth${(i+1)%10}`).value?document.querySelector(`#mouth${(i+1)%10}`).value:'assets/mouth.png'
        }
        localStorage.setItem('ftMouth', JSON.stringify(bangArray))
    }
    if (!localStorage.getItem('ftMouthOpen')) {
        let bangArray = new Array(10)
        for (let i=0; i<10; i++){
            bangArray[i] = document.querySelector(`#mouthopen${(i+1)%10}`).value?document.querySelector(`#mouthopen${(i+1)%10}`).value:'assets/mouthopen.png'
        }
        localStorage.setItem('ftMouthOpen', JSON.stringify(bangArray))
    }
    if (!localStorage.getItem('ftFace')) {
        let bangArray = new Array(10)
        for (let i=0; i<10; i++){
            bangArray[i] = document.querySelector(`#face${(i+1)%10}`).value?document.querySelector(`#face${(i+1)%10}`).value:'assets/face.png'
        }
        localStorage.setItem('ftFace', JSON.stringify(bangArray))
    }
    if (!localStorage.getItem('ftBody')) {
        let bangArray = new Array(10)
        for (let i=0; i<10; i++){
            bangArray[i] = document.querySelector(`#body${(i+1)%10}`).value?document.querySelector(`#body${(i+1)%10}`).value:'assets/body.png'
        }
        localStorage.setItem('ftBody', JSON.stringify(bangArray))
    }
    if (!localStorage.getItem('ftBack')) {
        let bangArray = new Array(10)
        for (let i=0; i<10; i++){
            bangArray[i] = document.querySelector(`#back${(i+1)%10}`).value?document.querySelector(`#back${(i+1)%10}`).value:'assets/back.png'
        }
        localStorage.setItem('ftBack', JSON.stringify(bangArray))
    }

    location.href = location.origin + '/live.html'
})
