// instead of prototypical inheritance.
// this uses closures.
// takes advantage of the scoping variations

function Animal () {
  const howl = () => {
    console.log('')
  }

  return {
    // counter++;

  }
}

function Dog (name) {

}

const chubbu = Dog('chubbu')
const scooby = Dog('scoo by')
