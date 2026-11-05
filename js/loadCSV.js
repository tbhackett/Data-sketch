let table
let companyMenu

let canvas

let submitButton

let imageArray = []


async function setup() {
  table = await loadTable('js/personalData.csv', ',', 'header')

  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  background(0)
  fill(255)



  for (let i = 0; i < table.getRowCount(); i++){

    imageArray[i] = await loadImage('images/' + table.getString(i, 'image'))
  }

  print(imageArray)

  companyMenu = createSelect()
  companyMenu.option('Select Company')

  submitButton = createButton('Submit')

  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){



    //grab each of the dates
    let date = table.getString(i, 'date')
    let company = table.getString(i, 'company')

    companyMenu.option(company)   

  }

  submitButton.mousePressed(changeData)

}

function changeData(){
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)
  for (let i = 0; i < table.getRowCount(); i++){
    if(companyMenu.value() == table.getString(i, 'company')){
      text(table.getString(i, 'company'), windowWidth/2, 50)
      text(table.getString(i, 'date'), windowWidth/2, 90)
      text(table.getString(i, 'location'), windowWidth/2, 130)
      text(table.getString(i, 'service'), windowWidth/2, 170)
      text(table.getString(i, 'frequency'), windowWidth/2, 200)
      for(let j = 0; j < table.getString(i, 'frequency'); j++){
        image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)
      }

    }
  }

}