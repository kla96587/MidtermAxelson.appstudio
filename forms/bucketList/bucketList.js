let bucketListItem = []
let questionOne = false
let askQuestionOne = ""

let i = 0

while (questionOne == false) {

  askQuestionOne = prompt("Do you want to add a new item to your bucket list? (Yes or No)")
  if (askQuestionOne == "Yes") {
  questionOne = false
  newItem = prompt("Please Enter your bucket list item")
  bucketListItem.push(newItem)
  console.log(newItem)

} else {
    
    questionOne = true
    }
}
while (i < bucketListItem.length) {
    console.log(bucketListItem[i])
    i += 1
}

questionTwo = prompt("Do you want to see your bucket list? Yes or No")
    if (questionTwo == "yes")
    console.log(`Here is your bucket list: ${bucketListItem}`)


