// window.onload = () => {
    function setLocalStorage(name,data){
        localStorage.setItem(name, JSON.stringify(data));
      }
      function getLocalStorage(name){
        return JSON.parse(localStorage.getItem(name));
      }
      function ajaxZaSve(url, method, result){
        $.ajax({
            url:url,
            method: method,
            dataType: "json",
            success: result,
            error: function(xhr){console.log(xhr);}
        });
    }

    var url=window.location.href;
    if(url.indexOf('index.html')!=-1)
    {
        function dogadjajiIndexf()
        {
            var id=$(this).data('id');
            console.log(id);
            setLocalStorage("idDogadjaj",id);
        }
        function ispisDogadjaja()
        {
            ajaxZaSve("data/desavanja.json","get",function(result)
            {	
            setLocalStorage("dogadjaji",result);
            var ispisDogadjaja="";
            for(let i=0;i<=3;i++)
            {
                            ispisDogadjaja+=`
                            <div class="col-md-3 col-sm-6 box">
                            <div class="news vest">
                                <a href="dogadjaji.html"data-id="${result[i].id}"class="slika"><image class="news-image" style="height:200px;" src="images/${result[i].slika}" alt="${result[i].slika}"></image></a>
                                <h3 class="news-title"><a href="dogadjaji.html" data-id="${result[i].id}"class="slika">${result[i].naslov}</a></h3>
                                <small class="date"><i class="fa fa-calendar"></i>${result[i].datum}</small>
                            </div>
                            </div>
                            `
            }
            ispisDogadjaja+=
            `
            <div class="text-center" style="width: 100%;">
                                        <a href="vesti.html" class="button">Више</a>
                                    </div>
            `;
            
            $("#indexNews").html(ispisDogadjaja);
            $( ".slika" ).mouseenter(dogadjajiIndexf);
            });
            //var dogadjajiIndex=getLocalStorage("dogadjaji");

        }
        ispisDogadjaja();

        function videoIndex()
        {
            var id=$(this).data('id');
            console.log(id);
            setLocalStorage("zasebanVideo",id);
        }
        function ispisVideo()
        {
            ajaxZaSve("data/video.json","get",function(result)
            {	
            setLocalStorage("video",result);
            ispisVideo='';
            for(let i=0;i<4;i++)
            {
                console.log(result[i].src);
                ispisVideo+=`
                <div class="col-md-3 col-sm-6">
                <div class="news slika1"  data-id="${result[i].id}">
                    <iframe width="100%" height="174px" src="${result[i].src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3 class="news-title"><a href="videoStrana.html">${result[i].naslov}</a></h3>
                    <small class="date"><i class="fa fa-calendar"></i>${result[i].datum}</small>
                </div>
                </div>
                `
            }
            ispisVideo+=
            `
            <div class="text-center" style="width: 100%;">
                                        <a href="video.html" class="button">Више</a>
                                    </div>
            `
            $("#indexNewsVideo").html(ispisVideo);
            $( ".slika1" ).mouseenter(videoIndex);
            });
            //var nizVideo=getLocalStorage("video");

        }
        ispisVideo();
        function cudaIndex()
        {
            var id=$(this).data('id');
            console.log(id);
            setLocalStorage("idCuda",id);
        }
        $( ".slika2" ).mouseenter(cudaIndex);
        function ispisCudaF()
        {
            ajaxZaSve("data/cuda.json","get",function(result)
            {	
            setLocalStorage("cuda",result);
            var item = result[Math.floor(Math.random() * result.length)];
            var ispisCuda=`
            <a href="cuda.html" class="slikaCudo"data-id='${item.id}'><image class="news-image" style="width: 50%;" src="${item.slika}"></image></a>
            <small class="date"><i class="fa fa-calendar"></i>${item.datum}</small>
            <label><h3 class="news-title"><a href="cuda.html"class="slikaCudo"data-id='${item.id}'>${item.naziv}</a></h3></label>
            `;
            $("#cudo").html(ispisCuda);
            $(".slikaCudo").mouseenter(function()
            {
                var id=$(this).data('id');
                setLocalStorage("idCudo",id);
            })
            });
        
        
            //var svaCuda=getLocalStorage("cuda");

        }
        ispisCudaF();


}
    if(url.indexOf('galerija.html')!=-1)
    {

        $.ajax({
            url:'data/galerija.json',
            method:"get",
            dataType:'json',
            success:function(result)
            {
                setLocalStorage("galerija",result);
                var ispis=`
                <div class="w3-container">

                </div>
                <div class="w3-row-padding"style="    display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;">
                `;
                var div=document.getElementById("redGalerija");
                result.forEach(element => {
                    ispis+=
                    `
                    <div class="w3-container w3-third geeks"style="padding: 10px 8px;">
                    <img alt="${element.src}" src="images/${element.src}.jpg" style="width:90%" height:"100px";cursor:pointer" 
                    onclick="onClick(this)" class="w3-hover-opacity">
                    
                  </div>
                    `
                });/*padding-top:0px!important; */
                ispis+=`
                </div>
                <div id="modal01" class="w3-modal" style="   background-color: rgba(0,0,0,0.4);
                z-index:999;display:none!important;align-items:center;justify-content:center;padding-top: 0px!important;" onclick="this.style.display='none'">
                <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                <div class="w3-modal-content w3-animate-zoom" style=";    background-color: initial!important;">
                <div><img id="img01" style="width:100%"></div>
                </div>
              </div>
                `
                div.innerHTML=ispis;
            }
    });
    ajaxZaSve("data/desavanja.json","get",function(result)
    {
        setLocalStorage("desavanja",result);
        var ispis2=`<ul class="popular-posts" id="izdvojeno">`;
        //var dogadjaji1=getLocalStorage("dogadjaji");
        result.forEach(element => {
            ispis2+=
            `
            <li style="padding:5px;">                                    
            <!--Post item small-->
            <div class="post-item-small" style="display:flex;">
                        <div class="left"style="width:50%;">
                        <a class="slika" target="_blank" href="dogadjaji.html" data-id="${element.id}">
                           <img src="images/${element.slika}" alt="${element.slika}" style="width:100%!important;">          
                        </a>
                    </div>
                    <div class="right"style="width:40%;padding:5px;">
                    <h3 class="title"style="margin-bottom:0px;">
                        <a class="slika" target="_blank" data-id="${element.id}" href="dogadjaji.html">
                            ${element.naslov}            </a>
                    </h3>
                    <small data-id="${element.autor}" class="date"><i class="fa fa-user"></i>${element.autor}</small></br>
                    <small data-id="${element.id}" class="date"><i class="fa fa-calendar"></i>${element.datum}</small>
                </div>
            </div>                            </li>
            `
        });
        ispis2+=`</ul>`;
        $("#tab_popular_posts_response").html(ispis2);
        $( ".slika" ).mouseenter(function()
        {
            var id=$(this).data('id');
            console.log(id);
            setLocalStorage("idDogadjaj",id);
        });
    })



    }
    // var url=window.location.href;
    if(url.indexOf('vesti.html')!=-1)
    {
        function dogadjaji()
        {
            var id=$(this).data('id');
            console.log(id);
            setLocalStorage("idDogadjaj",id);
        }
        $.ajax({
            url:'data/desavanja.json',
            method:"get",
            dataType:'json',
            success:function(result)
            {	
                setLocalStorage("dogadjaji",result);
                var ispis="";
                var div=document.getElementById("desavanja");
                result.forEach(element => {
                    ispis+=
                    `
                    <li style="    display: flex;
                    
                    ">
                    
                    <a href="dogadjaji.html"data-id="${element.id}"class="slika"> <img  src="images/${element.slika}" style="width:170px!important; height: 121px;" alt=""></a>
                    
                    <div class="seremon-detail"style="margin-left: 11%;">
                        <h3 class="seremon-title"><a class="slika" href="dogadjaji.html?id=${element.id}" data-id="${element.id}">${element.naslov}</a></h3>
                        <div class="seremon-meta">
                            <div class="pastor"><i class="fa fa-user"></i>${element.autor}</div>
                            <div class="date"><i class="fa fa-calendar"></i> ${element.datum}</div>
                        </div>
                        <p style="font-family: emoji!important;">${element.opis}</p>
                    </div>
                    </li>
                    `
                });               
                div.innerHTML=ispis;
                $( ".slika" ).hover(dogadjaji);
            }
        });

            ajaxZaSve("data/galerija.json","get",function(result){
                setLocalStorage("slike",result);
                //var slike=getLocalStorage("slike");
                var ispisSlike="";
                for(let i=1;i<=4;i++)
                {
                    var item = result[Math.floor(Math.random() * result.length)];
                    ispisSlike+=`
                    <a href="galerija.html"><img style="width:45%;" src="images/${item.src}.jpg" alt="${item.src}"></a>
                    `
                }
                $("#randomImages").html(ispisSlike); 
            })
     
    }
    // var url=window.location.href;
    if(url.indexOf('dogadjaji.html')!=-1)
    {       
        var dogadjaj=getLocalStorage("dogadjaji");
        //console.log(dogadjaj);
        var id=getLocalStorage('idDogadjaj');       
        var zasebanDogadjaj=dogadjaj.find(element => element.id==id);
        console.log(zasebanDogadjaj);
        var ispis="";
        ispis+=
        `
        <li>
        <h1>${zasebanDogadjaj.naslov}</h1>
        <div class="seremon-meta">
        <div class="pastor"><i class="fa fa-user"></i>${zasebanDogadjaj.autor}</div>
        <div class="date"><i class="fa fa-calendar"></i> ${zasebanDogadjaj.datum}</div>
        </div>
        
        <div class="seremon-detail" style="display:flex;flex-direction:column;">
            
        <div style="justify-content:center;display:flex" ><img  src="images/${zasebanDogadjaj.slika}" style=" max-width: -webkit-fill-available; " alt=""></div>
            <div style="font-size:18px;"><p>${zasebanDogadjaj.vise}</p>
            <div>${obradaSlika(zasebanDogadjaj.ostaleSlike)}</div>
            </div>
        </div>
        </li>
        `
        $("#dogadjaj").html(ispis);
        function obradaSlika(niz)
        {
            var ispis="";
            if(niz.length==0)
            {
                return ispis;
            }
            niz.forEach(element => {
                ispis+=`<a href="galerija.html"><img src='images/${element}'alt="${element}"style="width:30%;"><a>`
            });
            return ispis;
        }
        var ispis2=`<ul class="popular-posts" id="izdvojeno">`;
        var dogadjaji1=getLocalStorage("dogadjaji");
        dogadjaji1.forEach(element => {
            ispis2+=
            `
            <li style="padding:5px;">                                    
            <!--Post item small-->
            <div class="post-item-small" style="display:flex;">
                        <div class="left"style="width:50%;">
                        <a class="slika" target="_blank" href="dogadjaji.html" data-id="${element.id}">
                           <img src="images/${element.slika}" alt="${element.slika}" style="width:100%!important;">          
                        </a>
                    </div>
                    <div class="right"style="width:40%;padding:5px;">
                    <h3 class="title">
                        <a class="slika" target="_blank" data-id="${element.id}" href="dogadjaji.html">
                            ${element.naslov}            </a>
                    </h3>
                    <small data-id="${element.autor}" class="date"><i class="fa fa-user"></i>${element.autor}</small></br>
                    <small data-id="${element.id}" class="date"><i class="fa fa-calendar"></i>${element.datum}</small>
                </div>
            </div>                            </li>
            `
        });
        ispis2+=`</ul>`;
        $("#tab_popular_posts_response").html(ispis2);
        $( ".slika" ).mouseenter(function()
        {
            var id=$(this).data('id');
            console.log(id);
            setLocalStorage("idDogadjaj",id);
        });
    }
//     var url=window.location.href;

// var url=window.location.href;
if(url.indexOf('video.html')!=-1)
{
    var div=document.getElementById("video");
    function videoLocal()
                {
                    var id=$(this).data("id");
                    setLocalStorage("zasebanVideo",id)
                };
    $.ajax({
        url:'data/video.json',
        method:"get",
        dataType:'json',
        success:function(result)
        {	
            setLocalStorage("video",result);
            
            var ispisVideo="";
            result.forEach(element => {
                ispisVideo+=
                `
                
                
                <div class="col-sm-6"style="">
                <div class="news">
                <a href="videoStrana.html">
                    <iframe width="100%" height="174px" src="${element.src}" class="video"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </a>
                    <h3 class="news-title" ><a href="videoStrana.html" class="video" data-id="${element.id}">${element.naslov}</a></h3>
                    <small class="date"><i class="fa fa-calendar"></i>${element.datum}</small>
                </div>
                </div>
                
                
                `
                
        });
        
        $("#video").html(ispisVideo);
        $(".video").click(videoLocal);
    }});
    // $.ajax({
    //     url:'data/galerija.json',
    //     method:"get",
    //     dataType:'json',
    //     success:function(result)
    //     {	
            
    //     }
    //     });
        ajaxZaSve("data/galerija.json","get",function(result)
        {
            setLocalStorage("slike",result);
            //var slike=getLocalStorage("slike");
            var ispisSlike="";
            for(let i=1;i<=4;i++)
            {
                var item = result[Math.floor(Math.random() * result.length)];
                ispisSlike+=`
                <a href="galerija.html"><img style="width:45%;" src="images/${item.src}.jpg" alt="${item.src}"></a>
                `
            }
            $("#randomImages").html(ispisSlike); 
        })

    

}
// var url=window.location.href;
if(url.indexOf('videoStrana.html')!=-1)
{
    var id=getLocalStorage("zasebanVideo");
    var videi=getLocalStorage("video");
    var video=videi.find(x=>x.id==id);
    console.log(video);
    var ispis=`<div class="content col-md-8"style="background-color:aliceblue;width:100%;margin:auto;">
    <div class="col-sm-6"style="width:100%;">
    <div class="news">
        <iframe width="100%" height="300px" src="${video.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3 class="news-title" ><a href="videoStrana.html" class="video" data-id="${video.id}">${video.naslov}</a></h3>
        <small class="date"><i class="fa fa-calendar"></i>${video.datum}</small>
    </div>
    </div>
    </div>
    
    `;
    $("#dogadjaj").html(ispis);
    // $.ajax({
    //     url:'data/desavanja.json',
    //     method:"get",
    //     dataType:'json',
    //     success:function(result)
    //     {
    //         setLocalStorage("dogadjaji",result);
    //     }
    // });
    ajaxZaSve("data/desavanja.json","get",function(result)
    {
        setLocalStorage("dogadjaji",result);
        var ispis2=`<ul class="popular-posts" id="izdvojeno">`;
        //var dogadjaji1=getLocalStorage("dogadjaji");
        result.forEach(element => {
            ispis2+=
            `
            <li style="padding:5px;">                                    
            <!--Post item small-->
            <div class="post-item-small" style="display:flex;">
                        <div class="left"style="width:50%;">
                        <a class="slika" target="_blank" href="dogadjaji.html" data-id="${element.id}">
                           <img src="images/${element.slika}" alt="${element.slika}" style="width:100%!important;">          
                        </a>
                    </div>
                    <div class="right"style="width:40%;padding:5px;">
                    <h3 class="title"style="margin-bottom:0px;">
                        <a class="slika" target="_blank" data-id="${element.id}" href="dogadjaji.html">
                            ${element.naslov}            </a>
                    </h3>
                    <small data-id="${element.autor}" class="date"><i class="fa fa-user"></i>${element.autor}</small></br>
                    <small data-id="${element.id}" class="date"><i class="fa fa-calendar"></i>${element.datum}</small>
                </div>
            </div>                            </li>
            `
        });
        ispis2+=`</ul>`;
        $("#tab_popular_posts_response").html(ispis2);
        $( ".slika" ).mouseenter(function()
        {
            var id=$(this).data('id');
            console.log(id);
            setLocalStorage("idDogadjaj",id);
        });
    })


}
// var url=window.location.href;
if(url.indexOf('cuda.html')!=-1)
{
    // $.ajax({
    //     url:'data/cuda.json',
    //     method:"get",
    //     dataType:'json',
    //     success:function(result)
    //     {	
    //         setLocalStorage("cuda",result);
    //     }
        
    // })
    ajaxZaSve("data/cuda.json","get",function(result)
    {
        setLocalStorage("cuda",result);
        //var cuda=getLocalStorage("cuda");
        var id=getLocalStorage("idCuda");
        var cudo=result.find(x=>x.id==id);
        var ispis="";
        // cuda.forEach(element => {
            ispis+=`<div class="content col-md-8"style="background-color:aliceblue;width:100%;margin:auto;">
            <div class="col-sm-6"style="width:100%;">
            <div class="news">
               <img src="${cudo.slika}"alt="cuda" style="width:60%;">
                <h3 class="news-title" >${cudo.naziv}</h3>
                <small class="date"><i class="fa fa-calendar"></i>${cudo.datum}</small>
                <p>${cudo.opis}</p>
            </div>
            </div>
            </div>
            
            `;
        // });
    
        $("#cuda").html(ispis);
    })

    // $.ajax({
    //     url:'data/galerija.json',
    //     method:"get",
    //     dataType:'json',
    //     success:function(result)
    //     {	
    //         setLocalStorage("slike",result);
    //     }
    //     });
        ajaxZaSve("data/galerija.json","get",function(result)
        {
            setLocalStorage("slike",result);
            //var slike=getLocalStorage("slike");
            var ispisSlike="";
            for(let i=1;i<=4;i++)
            {
                var item = result[Math.floor(Math.random() * result.length)];
                ispisSlike+=`
                <a href="galerija.html"><img style="width:45%;" src="images/${item.src}.jpg" alt="${item.src}"></a>
                `
            }
            $("#randomImages").html(ispisSlike); 
        })

}
// var url=window.location.href;
if(url.indexOf('svaCuda.html')!=-1)
{
    $.ajax({
        url:'data/cuda.json',
        method:"get",
        dataType:'json',
        success:function(result)
        {	
            setLocalStorage("cuda",result);
        }
        
    })
    ajaxZaSve('data/cuda.json',"get",function(result)
    {
        setLocalStorage("cuda",result);
        var ispis="";
        result.forEach(element => {
            ispis+=                    `
            <li>
            <a href="cuda.html"data-id="${element.id}"class="slika3"> <img  src="${element.slika}" style="width: 121px; height: 121px;" alt=""></a>
            <div class="seremon-detail">
                <h3 class="seremon-title"><a class="slika3" href="cuda.html" data-id="${element.id}">${element.naziv}</a></h3>
    
                <p style="font-family: emoji!important;">${element.opis}</p>
            </div>
            </li>
            `
        });
        $("#cuda").html(ispis);
        $(".slika3").mouseenter(cudaLocal);
    })
    function cudaLocal()
    {
        var id=$(this).data("id");
        setLocalStorage("idCuda",id)
    };
    //var cuda=getLocalStorage("cuda");


    
    
    $.ajax({
        url:'data/galerija.json',
        method:"get",
        dataType:'json',
        success:function(result)
        {	
            setLocalStorage("slike",result);
        }
        });
        ajaxZaSve('data/galerija.json',"get",function(result)
        {
            var ispisSlike="";
            for(let i=1;i<=4;i++)
            {
                var item = result[Math.floor(Math.random() * result.length)];
                ispisSlike+=`
                <a href="galerija.html"><img style="width:45%;" src="images/${item.src}.jpg" alt="${item.src}"></a>
                `
            }
            $("#randomImages").html(ispisSlike);
        })
        //var slike=getLocalStorage("slike");
  

}
// var url=window.location.href;
if(url.indexOf('ocrkvi.html')!=-1)
{
    // $.ajax({
    //     url:'data/desavanja.json',
    //     method:"get",
    //     dataType:'json',
    //     success:function(result)
    //     {	
    //         setLocalStorage("dogadjaji",result);
    //     }
    // });
    ajaxZaSve("data/desavanja.json","get",function(result)
    {
        setLocalStorage("dogadjaji",result);
        var ispis2=`<ul class="popular-posts" id="izdvojeno">`;
        //var dogadjaji1=getLocalStorage("dogadjaji");
        result.forEach(element => {
            ispis2+=
            `
            <li style="padding:5px;">                                    
            <!--Post item small-->
            <div class="post-item-small" style="display:flex;">
                        <div class="left"style="width:50%;">
                        <a class="slika" target="_blank" href="dogadjaji.html" data-id="${element.id}">
                           <img src="images/${element.slika}" alt="${element.slika}" style="width:100%!important;">          
                        </a>
                    </div>
                    <div class="right"style="width:40%;padding:5px;">
                    <h3 class="title"style="margin-bottom:0px;">
                        <a class="slika" target="_blank" data-id="${element.id}" href="dogadjaji.html">
                            ${element.naslov}            </a>
                    </h3>
                    <small data-id="${element.autor}" class="date"><i class="fa fa-user"></i>${element.autor}</small></br>
                    <small data-id="${element.id}" class="date"><i class="fa fa-calendar"></i>${element.datum}</small>
                </div>
            </div>                            </li>
            `
        });
        ispis2+=`</ul>`;
        $("#tab_popular_posts_response").html(ispis2);
        $( ".slika" ).mouseenter(function()
        {
            var id=$(this).data('id');
            console.log(id);
            setLocalStorage("idDogadjaj",id);
        });
    })


}
// var url=window.location.href;
if(url.indexOf('prodavnica.html')!=-1)
{  
    // $.ajax({
    //     url:'data/proizvodi.json',
    //     method:"get",
    //     dataType:'json',
    //     success:function(result)
    //     {	
    //         setLocalStorage("proizvodi",result);
    //     }
    // });
    ajaxZaSve("data/proizvodi.json","get",function(result)
    {
        setLocalStorage("proizvodi",result);
        var ispis="";
        //var proizvodi=getLocalStorage("proizvodi");
        result.forEach(element => {
            ispis+=
            `
            <div class="col-md-4 col-sm-6 box"style="padding-top:20px;display:flex;justify-content:center;">
            <div class="proizvodd"style="padding-bottom:60px;"><a href="zasebanProizvod.html" class="woocommerce-LoopProduct-link woocommerce-loop-product__link art"data-id="${element.id}"><img data-id="${element.id}" width="200" height="200" src="images/prodavnica/${element.slika}.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="${element.slika}" loading="lazy" >
            <h2 data-id="${element.id}" style="     word-wrap: break-word;width: min-content;  " class="woocommerce-loop-product__title">${element.naziv}</h2>
            
            </a></div><div class="dodajKorpa"style=" width:max-content ;  bottom: 0px!important;position: absolute;">    <h2 style="background-color:#2e443f;color:white;">Телефон за куповину:</br><a class="a1234"  target="_blank"  href="tel:0645877322"><i class="fa fa-phone"style="color:white;font-size:25px">&nbsp;&nbsp;&nbsp;</i> 0645877322</a>    <h2>
            </div>
            </div>
    
            `
        });
        //  <button class="dodajKorpaa" value="Додај у корпу"data-id="${element.id}">Додај у корпу</button>
        //<span class="price"><span class="woocommerce-Price-amount amount"><bdi>${element.cena}&nbsp;<span class="woocommerce-Price-currencySymbol">рсд</span></bdi></span></span>
        $("#artiklii").html(ispis);
        $(".art").mouseenter(dodavanjeId);
    })

    // $.ajax({
    //     url:'data/kategorije.json',
    //     method:"get",
    //     dataType:'json',
    //     success:function(result)
    //     {	
    //         setLocalStorage("kategorije",result);
    //     }
    // });
    ajaxZaSve('data/kategorije.json',"get",function(result)
    {
        setLocalStorage("kategorije",result);
        var ispis2="";
        //var kategorije=getLocalStorage("kategorije");
        result.forEach(element => {
            // ispis2+=
            // `
            // <div class="col-md-1 col-sm-6 box"style="padding-top:20px;display:flex;justify-content:center;">
            // <div class="proizvodd"style="padding-bottom:40px;"><a href="#" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="100%" height="100px" src="images/prodavnica/${element.slike}.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="${element.slika}" loading="lazy" >
            // <h2 style="     word-wrap: break-word;width: min-content;  " class="woocommerce-loop-product__title">${element.naziv}</h2>
            // </a></div>
            // </div>
    
            // `
            ispis2+=
            `
            <p data-id="${element.naziv}" class="kat">${element.naziv}</label><p>
            `
        });
        $("#kategorije").html(ispis2);
        function pointer() {
            document.getElementById("kategorije").style.cursor = "pointer";
            //document.getElementById("sortiranje").style.cursor = "pointer";
          }
          $(".kat").mouseenter(pointer);
          $(".kat").click(obradaKat);
    })

     // $(".sort").mouseenter(pointer);
    function dodavanjeId()
    {
        var id=$(this).data("id");
        setLocalStorage("idProizvoda",id);
    }
    $(".dodajKorpaa").click(dodavanjeKorpe);
    function dodavanjeKorpe()
    {
        var id=$(this).data("id");
        setLocalStorage("korpa",id);
    }
    
    function obradaKat()
    {
        var naziv=$(this).data("id");
        console.log(naziv);
        if(naziv=="Све")
        {
            $.ajax({
                url:'data/proizvodi.json',
                method:"get",
                dataType:'json',
                success:function(result)
                {	
                    setLocalStorage("proizvodi",result);
                }

            })
            var ispis2="";
            var proizvodi2=getLocalStorage("proizvodi");
            proizvodi2.forEach(element => {
                ispis2+=
                `
                <div class="col-md-4 col-sm-6 box"style="padding-top:20px;display:flex;justify-content:center;">
                <div class="proizvodd"style="padding-bottom:60px;"><a href="zasebanProizvod.html" class="woocommerce-LoopProduct-link woocommerce-loop-product__link art"data-id="${element.id}"><img data-id="${element.id}" width="200" height="200" src="images/prodavnica/${element.slika}.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="${element.slika}" loading="lazy" >
                <h2 data-id="${element.id}" style="     word-wrap: break-word;width: min-content;  " class="woocommerce-loop-product__title">${element.naziv}</h2>
                
                </a></div><div class="dodajKorpa"style=" width:max-content ;  bottom: 0px!important;position: absolute;"><h3 style="background-color:#2e443f!important;color:white!important;width: min-content!important;">Телефон за куповину:0645877322</h3></div>
                </div>
        
                `
            });
            $("#artiklii").html(ispis2);
            $(".art").mouseenter(dodavanjeId);
        }
        else
        {
            console.log("xxxx");
            //var filtrirani;
            $.ajax({
                url:'data/proizvodi.json',
                method:"get",
                dataType:'json',
                success:function(result)
                {	
                    setLocalStorage("proizvodi",result);
                }

            })
            var ispis3="";
            var proizvodi3=getLocalStorage("proizvodi");
            proizvodi3=proizvodi3.filter(x=>x.kategorija==naziv);
            setLocalStorage("proizvodi",proizvodi3);
            proizvodi3.forEach(element => {
                ispis3+=
                `
                <div class="col-md-4 col-sm-6 box"style="padding-top:20px;display:flex;justify-content:center;">
                <div class="proizvodd"style="padding-bottom:60px;"><a href="zasebanProizvod.html" class="woocommerce-LoopProduct-link woocommerce-loop-product__link art"data-id="${element.id}"><img data-id="${element.id}" width="200" height="200" src="images/prodavnica/${element.slika}.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="${element.slika}" loading="lazy" >
                <h2 data-id="${element.id}" style="     word-wrap: break-word;width: min-content;  " class="woocommerce-loop-product__title">${element.naziv}</h2>
                
                </a></div><div class="dodajKorpa"style=" width:max-content ;  bottom: 0px!important;position: absolute;"><h3 style="background-color:#2e443f!important;color:white!important;width: min-content!important;">Телефон за куповину:0645877322</h3></div>
                </div>
        
                `
            });
            $("#artiklii").html(ispis3);
            $(".art").mouseenter(dodavanjeId);
        }
    }

}
// var url=window.location.href;
if(url.indexOf('zasebanProizvod.html')!=-1)
{  
    var id=getLocalStorage("idProizvoda");
    $.ajax({
        url:'data/proizvodi.json',
        method:"get",
        dataType:'json',
        success:function(result)
        {	
            setLocalStorage("proizvodi",result);
        }
    });
    var proizvodiZaseban=getLocalStorage("proizvodi");
    var item=proizvodiZaseban.find(x=>x.id==id);
    var ispisZasebnogProizvoda="";
    ispisZasebnogProizvoda+=
    `
    <div class="col-md-6 col-sm-6" style="width:100%;padding-left:0px!important;padding-top:10px;">
    <div id="cudo" class="news" style="
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    ">
    <div  style="
    width: 100%;
    display: flex;
    
    
    ">
    <a href="#"style="width: 50%;"  class="slikaCudo" data-id="${item.id}"><img class="news-image" style="width: 100%;" src="images/prodavnica/${item.slika}.jpg"></a>
    <div style="    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;padding-left:10px;">
    <h1>${item.naziv}</h1>
    
    <h3 style="text-align:justify;color:#89837c!important;">Опис:${item.opis}</h3>
    <h2 style="background-color:#2e443f;color:white;">Телефон за куповину:</br><a class="a1234"  target="_blank"  href="tel:0645877322"><i class="fa fa-phone"style="color:white;font-size:25px">&nbsp;&nbsp;&nbsp;</i> 0645877322</a>    <h2>
    
    </div>
    </div>
    <div>

    
    </div>   
    </div>
        
    </div>
    `;
    // <button class="dodajKorpaa" value="Додај у корпу"data-id="${item.id}">Додај у корпу</button>
    //<h2 style="background-color:#2e443f;color:white;">Цена &nbsp;&nbsp;${item.cena}&nbsp;рсд</h2>
    $("#proizvod").html(ispisZasebnogProizvoda);
    // $(".dodajKorpaa").click(dodavanjeKorpe);
    // function dodavanjeKorpe()
    // {
    //     var id=$(this).data("id");
    //     setLocalStorage("korpa",id);
    //     var korpa=getLocalStorage("korpa");
        
    // }
}
//regex
var regName=/^([A-ZČĆŽŠĐ][a-zčćžšđ]{1,20})+$/;
var regEmail=/^[^@]+@[^@]+\.[^@\.]+$/;
var name;
var mail;
var tekst;
var podaci=[];
var greske=[];
// $("#name").on("focus",function()
// {
//     $("#greskaime").css("display","none");
// })
// $("#mail").on("focus",function()
// {
//     $("#greskamail").css("display","none");
// })
$("#name").on("blur",function()
{
    name=$("#name").val();
    console.log(name);
    if(regName.test(name))
	{
        $("#greskaime").css("display","none");
        podaci[0]=name;
        if(podaci.length==2)
        {
            $("#send").css('display','block');

        }
           $("#send").removeAttr('disabled');
    }
    else
    {
        $("#greskaime").css("display","block");
        $("#send").attr('disabled','disabled');
        greske.push(name);
    }
})
$("#mail").on("blur",function()
{
    mail=$("#mail").val();
    console.log(mail);
    if(regEmail.test(mail))
	{
        $("#greskamail").css("display","none");
        podaci[1]=mail;

        if(podaci.length==2)
        {
            $("#send").css('display','block');
        }
        $("#send").removeAttr('disabled');

    }
    else
    {
        $("#greskamail").css("display","block");
        $("#send").attr('disabled','disabled');
        greske.push(mail);
    }
})
// $("#mesage").on("blur",function()
// {
//     tekst=$("#mesage").val();
//     console.log(tekst);
// })
// function sendMail(str) {
//     var link = "mailto:stefanstanisavljevic777@gmail.com" + "&subject=" + escape("This is my subject") + "&body=" + escape(str);
//     location.href = link;
// }
// $("#send").mouseenter(function()
// {
// if(greske!=0)
// {
//     $("#send").attr('disabled','disabled');
// }
// else
// {
//     $("#send").removeAttr('disabled');
// }
// console.log(greske);
// });
// $("#send").click(function()
// {
//     if(regName.test(name))
// 	{
//         $("#greskaime").css("display","none");
//         podaci.push(name);
//     }
//     else
//     {
//         $("#greskaime").css("display","block");
//         greske.push(name);
//     }
//     if(regEmail.test(mail))
// 	{
//         $("#greskamail").css("display","none");
//         podaci.push(mail);
//     }
//     else
//     {
//         $("#greskamail").css("display","block");
//         greske.push(mail);
//     }
//     if(greske.length==0)
//     {
//         $("#send").attr('disabled','disabled');
//     }
//     else
//     {
//         $("#send").removeAttr('disabled');
//     }
// });

// }
