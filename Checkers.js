//Функция для подставления картинки
function insertImage() {   

    document.querySelectorAll('.box').forEach(image => {  //перебираем все поле

        if (image.innerText.length !== 0) {  //если в ячейка есть текст загружает картинку
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

        if (a % 2 == 0) {
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

                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {


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
                    if (a % 2 !== 0 && pinkColor == greenColor) { //если ячейка нечетная и выбранная попдатет на союзную цвет - темный
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

        if (item.style.backgroundColor == 'green' /*&& item.innerText.length == 0*/) { //если фон зеленый и в ячейке пусто
            tog = tog + 1
            document.getElementById(redId).innerText = ''
        }

        /*else if (item.style.backgroundColor == 'red') {
            document.getElementById(redId).innerText = ''
            if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length == 0) {
                document.getElementById(`b${a - 200 + 2}`).backgroundColor = 'green'
            }
        }*/

        /*else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) { //если фон зеленый и в ячейке есть шашка

            
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = '' //очищаем текст элемента с розовым задним фоном
                    item.innerText = pinkText                      //переносим в новую ячейку данные первоночального элемента
                    coloring()
                    insertImage()
                    tog = tog + 1

                    
                }
            })
        }*/

        

        getId = item.id              //(b801)
        arr = Array.from(getId)      //["b", "8", "0", "1"]
        arr.shift()                  //удаляет первый символ массива ["8", "0", "1"]
        aside = eval(arr.pop())      //удаляем последний символ и выводим его (номер столбца 1)
        arr.push('0')                //добавляем символ в конец массива ["8", "0", "0"]
        aup = eval(arr.join(''))     //объединяем массив в строку (800)
        a = aside + aup              //(801)




        /*console.log('getId =', getId)
        console.log('aside = ', aside)
        console.log('aup = ', aup)
        console.log('a = ', a)*/



        // Функция для отображения доступного пути

        

        function whosTurn(toggle) {

            
            //Шашка

            if (item.innerText == `${toggle}checker`) {

                //Для черных
                if (tog % 2 == 0 && aup > 100) {

                    redId = ""

                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length == 0) { //вниз и вправо(для пустой ячейки) нужно дописать условие проверки на красную клетку
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside < 7 && document.getElementById(`b${a - 100 + 1}`).innerText !== 'Bchecker' && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0 && document.getElementById(`b${a - 200 + 2}`).innerText.length == 0){ //рубить вниз и вправо
                        redId = (`b${a - 100 + 1}`)
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a - 200 + 2}`).style.backgroundColor = 'green'
                    }
                    /*if (aside < 7 && document.getElementById(`b${a + 100 + 1}`).innerText !== 'Bchecker' && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0 && document.getElementById(`b${a + 200 + 2}`).innerText.length == 0){ //рубить вверх и вправо
                        redId = (`b${a + 100 + 1}`)
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a + 200 + 2}`).style.backgroundColor = 'green'
                    }*/

                    if(aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length == 0) { //вниз и влево(для пустой ячейки) нужно дописать условие проверки на красную клетку
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 2 && document.getElementById(`b${a - 100 - 1}`).innerText !== 'Bchecker' && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0 && document.getElementById(`b${a - 200 - 2}`).innerText.length == 0){ //рубить вниз и влево
                        redId = (`b${a - 100 - 1}`)
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a - 200 - 2}`).style.backgroundColor = 'green'
                    }
                    /*if (aside > 2 && document.getElementById(`b${a + 100 - 1}`).innerText !== 'Bchecker' && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0 && document.getElementById(`b${a + 200 - 2}`).innerText.length == 0){ //рубить вверх и влево
                        redId = (`b${a + 100 - 1}`)
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a + 200 - 2}`).style.backgroundColor = 'green'
                    }*/
                }


                //Для белых
                if (tog % 2 !== 0 && aup < 800) {

                    redId = ""

                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length == 0) { //вверх и вправо(для пустой ячейки)
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside < 7 && document.getElementById(`b${a + 100 + 1}`).innerText !== 'Wchecker' && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0 && document.getElementById(`b${a + 200 + 2}`).innerText.length == 0){ //рубить вверх и вправо
                        redId = (`b${a + 100 + 1}`)
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a + 200 + 2}`).style.backgroundColor = 'green'
                    }
                    /*if (aside < 7 && document.getElementById(`b${a - 100 + 1}`).innerText !== 'Wchecker' && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0 && document.getElementById(`b${a - 200 + 2}`).innerText.length == 0){ //рубить вниз и вправо
                        redId = (`b${a - 100 + 1}`)
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a - 200 + 2}`).style.backgroundColor = 'green'
                    }*/

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0) { //вверх и влево(для пустой ячейки)
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green' 
                    }
                    if (aside > 2 && document.getElementById(`b${a + 100 - 1}`).innerText !== 'Wchecker' && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0 && document.getElementById(`b${a + 200 - 2}`).innerText.length == 0){ //рубить вверх и влево
                        redId = (`b${a + 100 - 1}`)
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a + 200 - 2}`).style.backgroundColor = 'green'
                    }
                    /*if (aside > 2 && document.getElementById(`b${a - 100 - 1}`).innerText !== 'Wchecker' && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0 && document.getElementById(`b${a - 200 - 2}`).innerText.length == 0){ //рубить вниз и влево
                        redId = (`b${a - 100 - 1}`)
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'red'
                        document.getElementById(`b${a - 200 - 2}`).style.backgroundColor = 'green'
                    }*/

                }

                item.style.backgroundColor = 'pink'
                //document.getElementById(redId).innerText = ''
            }
        }


        //Смена хода

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "Ход белых"
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Ход черных"
            whosTurn('B')
        }

        reddish()



        //Победа

        numW = 0
        numB = 0


        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wchecker') {
                numW += 1
            }

        })

        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Bchecker') {
                numB += 1
            }

        })

        if (numB == 0 || numW == 0) {
            setTimeout(() => { 
                if (numW > 1) {
                    alert('Белые победили!')
                    location.reload()
                }
                else if (numB > 1) {
                    alert('Черные победили!')
                    location.reload()
                }
            }, 100)
        }



    })

})





//Передвижение шашек
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {

            pinkId = hathiTest.id
            pinkText = hathiTest.innerText


            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})



/*document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'red') {

            redId = hathiTest.id
            redText = hathiTest.innerText


            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length !== 0) {
                        document.getElementById(redId).innerText = ''
                        hathiTest2.innerText = redText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})*/



//Отключение выбора нескольких шашек
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})