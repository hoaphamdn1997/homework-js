t/*odo = {
    id: 0,
    text: '',
    isCompleted: false,
    date: null(MM / DD / YYYY)
}
todoList = []
console.log('hello javascrip')
var formatTwoNumber = function (number) {
    return number < 10 ? '0' + number : number
}
var formatdate = function (date) {
    const datevalue = new Date(date)
    var datenumber = formatTwoNumber(datevalue.getDate())
    var month = formatTwoNumber(datevalue.getMonth() + 1)
    var year = datevalue.getFullYear()
    return month + '/' + datenumber + '/' + year
}
console.log('Date return', formatdate(new Date()))
var getDatesFromDate = function (date, numOfDate) {
    var millSecondDay = 24 * 60 * 60 * 1000
    var valueDate = new Date(date).valueOf()
    var result = []
    for (var i = 0; i < numOfDate; i++) {
        var nextDate = foematDate(new Date(valueDate + millSecondDay * i))
        returnpush(nextDate)
    }
    return result
}
console.log('7 date', getDatesFromDate(new Date(), 10))*/

var getNumberOfDate=function(date){
    var numberOfDate=0
    var millSecondDay=24*60*60*60
    var today=new Date().valueOf()
    var valueInPutDate=new Date(date).valueOf()
    numberOfDate=Math.ceil(Math.abs(today-valueInPutDate/millSecondDay))
    return numberOfDate
}
var checkday=(date)=>{
    return new Date(date).toUTCString().split(','[0])
    /*console.log('date UTCString',new Date(date).toUTCString())
    console.log("date ISOString", new Date(date).toISOString);*/
}
var createListTodos= function(){
    var ListTodos=[]
    var numOfDate=getNumberOfDate(new date(2018,5,1))
    console.log('numofdate',numOfDate)
    for(var i=0;i<numOfDate;i++){
checkday()
    }
   /* for(01 =>today){
var todo={
    id=i,
    text:'',
    isCompleted:false,
    date:'06/11/2018'
}
ListTodos.push(todo)
    }*/
}
createListTodos()

var Todo=function(text,isCompleted,date){
    this.id=new Date().valueOf();
    this.text=text;
    this.isCompleted=isCompleted;
    this.date=date
}
var TodoList=function(todoList){
    this.todoList=todoList;
}
todoList.prototype.createTodoList=function(){

}
var todoList=new TodoList