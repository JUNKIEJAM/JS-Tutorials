console.log("Tutorial 51");

//iterators

function fruitsIterators(values) {

    let nextIndex = 0;

    return {
        next: function() {
            if (nextIndex < values.length) {
                //we will return this object
                return {
                    value: values[nextIndex++],
                    done: false

                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log(myArray);

//using the iterator

const fruits = fruitsIterators(myArray);
console.log(fruits.next().value); // if value is not used, then whole array will be return starting with a new iterator
console.log(fruits.next().value);
console.log(fruits.next().value);