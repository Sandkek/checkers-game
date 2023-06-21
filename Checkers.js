//Функция для подставления картинки
function insertImage() {   

    document.querySelectorAll('.box').forEach(image => {  //перебираем все поле

        if (image.innerText.length != 0) {  //если в ячейка есть текст загружает картинку
            image.innerHTML = `${image.innerText} <img src="${image.innerText}.png" alt="">`
            image.style.cursor = 'pointer'
        }
    })
}
insertImage()

darkbox = 'rgb(100, 75, 43)'
lightbox = 'rgb(240, 201, 150)'


//Функция для раскрашивания поля
function coloring() {            
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id         //(b801)
        arr = Array.from(getId)  // ["b", "8", "0", "1"]
        arr.shift()              //удаляет первый символ массива ["8", "0", "1"]
        aside = eval(arr.pop())  //удаляем последний символ и выводим его (номер столбца 1)
        aup = eval(arr.shift())  //удаляем последний символ и выводим его (номер строки 8)
        a = aside + aup          //(81)

        if (a % 2 != 0) {
            color.style.backgroundColor = lightbox  //четный -> светлый цвет
        }
        else {
            color.style.backgroundColor = darkbox   //нечетный -> теменый цвет
        }
    })
}
coloring()



//Функция для раскраски ходов
function reddish() {    

    document.querySelectorAll('.box').forEach(i1 => {    //перебираем все поле

        if (i1.style.backgroundColor == 'pink') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'green' && i2.innerText.length != 0) {


                    greenText = i2.innerText  //текст ячейки(Bchecker или Wchecker)
                    pinkText = i1.innerText

                    greenColor = ((Array.from(greenText)).shift()).toString()
                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    

                    getId = i2.id             //(b801)
                    arr = Array.from(getId)   // ["b", "8", "0", "1"]
                    arr.shift()               //удаляет первый символ массива ["8", "0", "1"]
                    aside = eval(arr.pop())   //удаляем последний символ и выводим его (номер столбца 1)
                    aup = eval(arr.shift())   //удаляем последний символ и выводим его (номер строки 8)
                    a = aside + aup           //(81)
            
                    if (a % 2 == 0 && pinkColor == greenColor) { ////если ячейка четная и выбранная попдатет на союзную цвет - светлый
                        i2.style.backgroundColor = lightbox
                    }
                    if (a % 2 != 0 && pinkColor == greenColor) { //если ячейка нечетная и выбранная попдатет на союзную цвет - темный
                        i2.style.backgroundColor = darkbox
                    }
                }
            })
        }
    })
}




tog = 1

document.querySelectorAll('.box').forEach(item => {


    item.addEventListener('click', function () {

        //Для замены ячейки 
        if (item.style.backgroundColor == 'green' /*&& item.innerText.length == 0*/) { //если фон зеленый //и в ячейке пусто
            tog += 1
            //console.log('tog = ', tog)
            document.getElementById(redId).innerText = ''
        }

        
        getId = item.id              //(b801)
        arr = Array.from(getId)      //["b", "8", "0", "1"]
        arr.shift()                  //удаляет первый символ массива ["8", "0", "1"]
        aside = eval(arr.pop())      //удаляем последний символ и выводим его (номер столбца 1)
        arr.push('0')                //добавляем символ в конец массива ["8", "0", "0"]
        aup = eval(arr.join(''))     //объединяем массив в строку (800)
        a = aside + aup              //(801)


        // Функция для отображения доступного пути
        function whosTurn(toggle) {

            //Шашка
            if (item.innerText == `${toggle}checker`) {

                //Для черных шашек
                if (tog % 2 == 0 && aup > 100) {

                    redId = ""

                    if (aside < 7 && document.getElementById(`b${a - 100 + 1}`).innerText != 'Bchecker' && document.getElementById(`b${a - 100 + 1}`).innerText != 'Bqueen' && document.getElementById(`b${a - 100 + 1}`).innerText.length != 0 && document.getElementById(`b${a - 200 + 2}`).innerText.length == 0){ //рубить вниз и вправо
                        redId = (`b${a - 100 + 1}`)
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a - 200 + 2}`).style.backgroundColor = 'green'
                    }
                    else{
                        if(aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length == 0) { //вниз и влево(для пустой ячейки) нужно дописать условие проверки на красную клетку
                            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                        }
                    }


                    if (aside > 2 && document.getElementById(`b${a - 100 - 1}`).innerText != 'Bchecker' && document.getElementById(`b${a - 100 - 1}`).innerText != 'Bqueen' && document.getElementById(`b${a - 100 - 1}`).innerText.length != 0 && document.getElementById(`b${a - 200 - 2}`).innerText.length == 0){ //рубить вниз и влево
                        redId = (`b${a - 100 - 1}`)
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a - 200 - 2}`).style.backgroundColor = 'green'
                    }
                    else{
                        if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length == 0) { //вниз и вправо(для пустой ячейки) нужно дописать условие проверки на красную клетку
                            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                        }
                    }
                }


                if (tog % 2 == 0 && aup < 800) {        //рубить назад для черных
                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText != 'Bchecker' && document.getElementById(`b${a + 100 + 1}`).innerText != 'Bqueen' && document.getElementById(`b${a + 100 + 1}`).innerText.length != 0 && document.getElementById(`b${a + 200 + 2}`).innerText.length == 0){ //рубить вверх и вправо
                        redId = (`b${a + 100 + 1}`)
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a + 200 + 2}`).style.backgroundColor = 'green'
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = lightbox
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = lightbox
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText != 'Bchecker' && document.getElementById(`b${a + 100 - 1}`).innerText != 'Bqueen' && document.getElementById(`b${a + 100 - 1}`).innerText.length != 0 && document.getElementById(`b${a + 200 - 2}`).innerText.length == 0){ //рубить вверх и влево
                        redId = (`b${a + 100 - 1}`)
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a + 200 - 2}`).style.backgroundColor = 'green'
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = lightbox
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = lightbox
                    }
                }


                //Для белых шашек
                if (tog % 2 != 0 && aup < 800) {

                    redId = ""

                    if (aside < 7 && document.getElementById(`b${a + 100 + 1}`).innerText != 'Wchecker' && document.getElementById(`b${a + 100 + 1}`).innerText != 'Wqueen' && document.getElementById(`b${a + 100 + 1}`).innerText.length != 0 && document.getElementById(`b${a + 200 + 2}`).innerText.length == 0){ //рубить вверх и вправо
                        redId = (`b${a + 100 + 1}`)
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a + 200 + 2}`).style.backgroundColor = 'green'
                    }
                    else{
                        
                        if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0) { //вверх и влево(для пустой ячейки)
                            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green' 
                        }
                    }
                    

                    if (aside > 2 && document.getElementById(`b${a + 100 - 1}`).innerText != 'Wchecker' && document.getElementById(`b${a + 100 - 1}`).innerText != 'Wqueen' && document.getElementById(`b${a + 100 - 1}`).innerText.length != 0 && document.getElementById(`b${a + 200 - 2}`).innerText.length == 0){ //рубить вверх и влево
                        redId = (`b${a + 100 - 1}`)
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a + 200 - 2}`).style.backgroundColor = 'green'
                    }
                    else{
                        if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length == 0) { //вверх и вправо(для пустой ячейки)
                            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                        }
                    }
                    
                }

                if (tog % 2 != 0 && aup > 100) {        //рубить назад для белых
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText != 'Wchecker' && document.getElementById(`b${a - 100 + 1}`).innerText != 'Wqueen' && document.getElementById(`b${a - 100 + 1}`).innerText.length != 0 && document.getElementById(`b${a - 200 + 2}`).innerText.length == 0){ //рубить вниз и вправо
                        redId = (`b${a - 100 + 1}`)
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a - 200 + 2}`).style.backgroundColor = 'green'
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = lightbox
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = lightbox
                    }
                    
                     if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText != 'Wchecker' && document.getElementById(`b${a - 100 - 1}`).innerText != 'Wqueen' && document.getElementById(`b${a - 100 - 1}`).innerText.length != 0 && document.getElementById(`b${a - 200 - 2}`).innerText.length == 0){ //рубить вниз и влево
                        redId = (`b${a - 100 - 1}`)
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a - 200 - 2}`).style.backgroundColor = 'green'
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = lightbox
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = lightbox
                    }
                }

                item.style.backgroundColor = 'pink'


                //Становление дамкой
                if ( a > 100 && a < 200 && document.getElementById(`b${a}`).innerText == 'Bchecker') {
                    document.getElementById(`b${a}`).innerText = 'Bqueen'
                    insertImage()
                }


                if ( a > 800 && a < 900 && document.getElementById(`b${a}`).innerText == 'Wchecker') {
                    document.getElementById(`b${a}`).innerText = 'Wqueen'
                    insertImage()
                }
                
            }


            //Дамка 
            if (item.innerText == `${toggle}queen`) {

                if (tog % 2 != 0) { //Для белых дамок

                    redId = ""


                    for (let i = 1; i < 9; i++) {

                        if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length != 0 && document.getElementById(`b${a + i * 100 + i}`).innerText != 'Wchecker' && document.getElementById(`b${a + i * 100 + i}`).innerText != 'Wqueen') { //рубить
                            redId = (`b${a + i * 100 + i}`)
                            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'red'
                            break
                            document.getElementById(`b${a + i + 1 * 100 + i + 1}`).style.backgroundColor = 'green'
                        }
                        else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) { //ходить
                            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        }
                    }


                    for (let i = 1; i < 9; i++) {

                        if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length != 0 && document.getElementById(`b${a - i * 100 + i}`).innerText != 'Wchecker' && document.getElementById(`b${a - i * 100 + i}`).innerText != 'Wqueen') { //рубить
                            redId = (`b${a - i * 100 + i}`)
                            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'red'
                            break
                            document.getElementById(`b${a - i - 1 * 100 + i + 1}`).style.backgroundColor = 'green'
                        }

                        else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) { //ходить
                            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        }     
                    }


                    for (let i = 1; i < 9; i++) {

                        if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length != 0 && document.getElementById(`b${a + i * 100 - i}`).innerText != 'Wchecker' && document.getElementById(`b${a + i * 100 - i}`).innerText != 'Wqueen') {
                            redId = (`b${a + i * 100 - i}`)
                            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'red'
                            break
                            document.getElementById(`b${a + i + 1 * 100 - i - 1}`).style.backgroundColor = 'green'
                        }

                        else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        }
                    }


                    for (let i = 1; i < 9; i++) {
                        if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length != 0 && document.getElementById(`b${a - i * 100 - i}`).innerText != 'Wchecker' && document.getElementById(`b${a - i * 100 - i}`).innerText != 'Wqueen') {
                            redId = (`b${a - i * 100 - i}`)
                            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'red'
                            break
                            document.getElementById(`b${a - i - 1 * 100 - i - 1}`).style.backgroundColor = 'green'
                        }

                        else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        }
                    }



                    item.style.backgroundColor = 'pink'
                }




                if (tog % 2 == 0) { //Для черных дамок

                    redId = ""


                    for (let i = 1; i < 9; i++) {

                        if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length != 0 && document.getElementById(`b${a + i * 100 + i}`).innerText != 'Bchecker' && document.getElementById(`b${a + i * 100 + i}`).innerText != 'Bqueen') { //рубить
                            redId = (`b${a + i * 100 + i}`)
                            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'red'
                            break
                            document.getElementById(`b${a + i + 1 * 100 + i + 1}`).style.backgroundColor = 'green'
                        }
                        else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) { //ходить
                            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        }
                    }


                    for (let i = 1; i < 9; i++) {

                        if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length != 0 && document.getElementById(`b${a - i * 100 + i}`).innerText != 'Bchecker' && document.getElementById(`b${a - i * 100 + i}`).innerText != 'Bqueen') { //рубить
                            redId = (`b${a - i * 100 + i}`)
                            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'red'
                            break
                            document.getElementById(`b${a - i - 1 * 100 + i + 1}`).style.backgroundColor = 'green'
                        }

                        else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) { //ходить
                            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        }
                        
                    }


                    for (let i = 1; i < 9; i++) {

                        if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length != 0 && document.getElementById(`b${a + i * 100 - i}`).innerText != 'Bchecker' && document.getElementById(`b${a + i * 100 - i}`).innerText != 'Bqueen') {
                            redId = (`b${a + i * 100 - i}`)
                            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'red'
                            break
                            document.getElementById(`b${a + i + 1 * 100 - i - 1}`).style.backgroundColor = 'green'
                        }

                        else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        }
                    }


                    for (let i = 1; i < 9; i++) {
                        if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length != 0 && document.getElementById(`b${a - i * 100 - i}`).innerText != 'Bchecker' && document.getElementById(`b${a - i * 100 - i}`).innerText != 'Bqueen') {
                            redId = (`b${a - i * 100 - i}`)
                            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'red'
                            break
                            document.getElementById(`b${a - i - 1 * 100 - i - 1}`).style.backgroundColor = 'green'
                        }

                        else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        }
                    }


                    item.style.backgroundColor = 'pink'

                }
            }
        }

        
        //Смена хода
        if (tog % 2 != 0) {
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            whosTurn('B')
        }
        
                
        reddish()


        //Победа
        countW = 0
        countB = 0


        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wchecker') {
                countW += 1
            }
        })

        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Bchecker') {
                countB += 1
            }
        })

        if (countB == 0 || countW == 0) {
            setTimeout(() => { 
                if (countW > 1) {
                    alert('Белые победили!')
                    location.reload()
                }
                else if (countB > 1) {
                    alert('Черные победили!')
                    location.reload()
                }
            }, 100)
        }
    })
})




//Передвижение шашек
document.querySelectorAll('.box').forEach(move => {

    move.addEventListener('click', function () {

        if (move.style.backgroundColor == 'pink') {

            pinkId = move.id
            pinkText = move.innerText


            document.querySelectorAll('.box').forEach(move2 => {

                move2.addEventListener('click', function () {
                    if (move2.style.backgroundColor == 'green' && move2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        move2.innerText = pinkText
                        coloring()
                        insertImage()
                    }
                })
            })
        }


        if (tog % 2 != 0) {
            document.getElementById('tog').innerText = "Ход белых"
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Ход черных"
        }

    })

})


//Отключение выбора нескольких шашек
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor != 'green') {
            coloring()
        }
    })
})