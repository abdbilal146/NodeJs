const Excel = require('exceljs')


async function excelTest(){
let output = {row:-1,column:2}
const workbook = new Excel.Workbook()
await workbook.xlsx.readFile()
const worksheet = workbook.getWorksheet(0)

worksheet.eachRow((row , rowNumber)=>{
    row.eachCell((cell , colNumber )=>{
        if(cell.value === 'Apple'){
            output.row = rowNumber
            output.column = colNumber
        }
    })
})

worksheet.getCell(4,5).value = "helo"
await workbook.xlsx.writeFile()
}

async function readExcel(){

}

excelTest()

