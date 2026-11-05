let table
let appMenu

let canvas

let submitButton

let imageArray = []


async function setup() {
  table = await loadTable('datasheet.csv', ',', 'header')

  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  background(0)
  fill(255)



  for (let i = 0; i < table.getRowCount(); i++){

  imageArray[i] = await loadImage('images/' + table.getString(i, 'Image'))
  }

  print(imageArray)

  appMenu = createSelect()
  appMenu.option('Select App')

  submitButton = createButton('Submit')

  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){



    //grab each of the dates
    let date = table.getString(i, 'Date')
    let app = table.getString(i, 'App')
    let video = table.getString(i, 'Video')
    appMenu.option(app)   

    text(video, 300, (10*i)+ 20)

  }

  submitButton.mousePressed(changeData)
}

  



function changeData(){
  background(0)
  textSize(30)
  fill(255)
  textAlign(CENTER)
  imageMode(CENTER)
  for (let i = 0; i < table.getRowCount(); i++){
    if(appMenu.value() == table.getString(i, 'App')){
      text(table.getString(i, 'App'), windowWidth/2, 50)
      text(table.getString(i, 'Video'), windowWidth/2, 90)
      text(table.getString(i, 'Liked'), windowWidth/2, 130)
      text(table.getString(i, 'Date'), windowWidth/2, 170)
      
        image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)
      

    }
  }

}