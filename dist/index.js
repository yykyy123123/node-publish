setTimeout(() => {
    fetch("/test",{
        headers:{
            // "Cache-control":"no-cache"
        },
    }).then(res=>{
        res.text().then(rr=>{
            console.log(rr);
        })
    })
}, 1000);