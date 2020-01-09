import axios from 'axios'

export const findState = (tree, path) => {

    
    if(tree === undefined) {
        return null
    }
    if(path.length === 0) {
        return tree
    }
    let firstNode = path[0]

    return findState(tree[firstNode], path.filter((node, i) => i > 0))

}


// read(fetch stuff) axios get

// generic read
export const getContainer = (url, setter, pathToPayload, fakeData) => {
    axios
        .get(url)
        .then(res => {
            console.log(res)
            // setter(findState(res, pathToPayload))
            console.log(findState(res, pathToPayload))

        })
        .catch(err => {
            console.log(err)
        })
    setter(fakeData)
    
}

// delete(remove item) axios delete
// generic destroy
export const deleteItem = (item, appContainer, setter, url) => {

    console.log('delete exercise', item)
    console.log(appContainer)
    // axios call here
    axios
        .delete(url, item)
        .then(res => {
            console.log(res)
        })
    setter(appContainer.filter(exer => exer.id !== item.id))
}

// update(edit item) axios put

// generic update
export const updateItem = (e, item, appContainer, setter, url) => {
    e.preventDefault()
    console.log('save edited exercise', item)
     axios
        .put(url, item)
        .then(res => {
            console.log(res)
        })
    setter([
        ...appContainer.filter(exer => exer.id !== item.id),
        item
        // ...appContainer.slice(item.id + 1)
    ])
    // setMyExercises([myExercises.spl, exercise])
}


// create(add item) axios post

// generic save
export const addItem = (e, item, appContainer, setter, url) => {
    e.preventDefault()
    console.log('add exercise', item)

    axios
        .post(url, item)
    setter([...appContainer, item])
    // setMakeNewExercise(true)
    // setExerciseToAdd(exercise)
}
