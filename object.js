const myObj = {
    firstName: "John",
    job: "Dev",
    driving: {
      cars: 1,
      license: true,
    },
  }

  // Destructuring
const { firstName, job, driving } = myObj
console.log(firstName, job, driving)

//  Copy

const myObj2 = myObj
myObj2.job = "FrontEnd"
myObj2.driving.cars = 2
console.table([myObj, myObj2])

// Copy-2
// const shallowCopy = Object.assign({}, myObj);
// const shallowCopy2 = { ...myObj };
// const deepCopy = JSON.parse(JSON.stringify(myObj));
// const clonedObject = structuredClone(myObj);