// const isFrendCome = false

// const meetingRequest = new Promise((resolve, reject) => {
//     if(isFrendCome){
//         const msg = "Frend I'm there"
//         resolve(msg)
//     }else{
//         const err = "I can't come there"
//         reject(err)
//     }
// })

// meetingRequest
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))
// .finally(() => console.log("I'm colling you"))

// console.log('Request data ...')

// // sync - bu faqat bitta klioentga hizmat qiladi

// // async - bu bir nechta klientlarga himzt ko'rsata oldi

// setTimeout(() => {
//     console.log('Processing data...')
//     const product = {
//         name: "car",
//         color: "black"
//     }

//     setTimeout(() => {
//         product.status = 'order'
//         console.log(product)
//     }, 2000)
// }, 2000)
// console.log('Request data...')

// const req = new Promise((resolve,) => {
//     setTimeout(() => {
//         const product = {
//             name: 'car',
//             color: 'black',
//         }
//         console.log('Processing data...')
//         resolve(product)
//     }, 2000)
// })

// req.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.status = 'ordered'
//             console.log('Get data...')
//             reject()
//         }, 2000)
//     })
// })
// .then(result => console.log(result))
// .catch(() => console.log("Something went wrong"))
// .finally(() => console.log('Fetching end'))

const request = time => {
    return new Promise (resolve => {
        setTimeout(() => resolve(), time)
    })
}

// request(1000).then(() => console.log('Request 1000 ms'))
// request(2000).then(() => console.log('Request 2000 ms'))
// request(3000).then(() => console.log('Request 3000 ms'))

// Promise.all([request(1000), request(2000), request(3000)]).then(() => 
//   console.log('All')
// )

Promise.race([request(1000), request(2000), request(3000)]).then(() => 
   console.log('All')
)