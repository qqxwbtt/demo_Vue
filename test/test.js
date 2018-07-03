const arr = [{
  name: 'xuwnebo',
  age: 18
}, {
  name: 'hahaha',
  age: 20
}]

for (const i of arr) {
  console.log(i, ' testestestes')
  console.log(i.name)
  if (i.name === 'xuwnebo') {
    i.name = 'test'
    console.log('@@@@@@: ', i)
  }
}
