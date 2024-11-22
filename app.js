// $('form').on('keydown',function(event){
    
//     console.log('muje mt dbao')
//     // console.log($('input').val())  
//     if(event.which===13){
//         event.preventDefault()
//         console.log(event.target.value) 
//     let nam=event.target.value
//     event.target.value="" 

//     let api='https://api.tvmaze.com/search/shows?q=girls'
//     let newapi=`https://api.tvmaze.com/search/shows?q=${nam}`
//     console.log(newapi)

//     fetch(newapi).then((data)=>{
//         console.log(data,'data')
//         return data.json()
//     }).then((newdata)=>{
//         console.log(newdata)
//     }).catch((error)=>{
//         console.log(error,'err')
//     })
//     }
                                      
// })



$('form').on('submit',function(event){
    event.preventDefault()
    console.log('muje mt dbao')
    // console.log($('input').val())  
    console.log(event.target.elements[0].value) 
    let nam=event.target.elements[0].value
    event.target.elements[0].value="" 

    let api='https://api.tvmaze.com/search/shows?q=girls'
    let newapi=`https://api.tvmaze.com/search/shows?q=${nam}`
    console.log(newapi)

    fetch(newapi).then((data)=>{
        console.log(data,'data')
        return data.json()
    }).then((newdata)=>{
        console.log(newdata)
        domManipulate(newdata)
    }).catch((error)=>{
        console.log(error,'err')
    })


    function domManipulate(newdata){

        // while($('li').elements[0]){
        //     $('li').remove()
        // }

        $('li').empty();  ///make list empty
        



        for(let data of newdata){
            let element=document.createElement('figure')
            element.innerHTML=`<h2>${data.show.name}</h2>
            <br>
            <p>rating:${data.show.rating.average}</p>
            <br>
            <img src=${data.show.image.medium}>
            <br>
            <h2>${data.show.language}</h2>`
            
            $('li').append(element)

        }
    }
                                      
})

