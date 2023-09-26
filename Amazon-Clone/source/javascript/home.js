var opened = true;
var close = false;
var signOpen = true;

function dropOpen(){
    if(opened == true){
        drop();
        signOpen = false;
    }
    else{
        dropClose();
        signOpen = true;
    }
}

function signDrop(){
    if(signOpen){
        signDropOpen();
        opened = false;
    }
    else{
        signDropClose();
        opened = true;
    }
}

function drop(){
        opened = false;
        var parent = document.getElementById("drop-list");
        var list = document.createElement("div");
        list.id = "droped";
        parent.appendChild(list);
        list.style.width = 240 + "px";
        list.style.height = 376.6 + "px";
        list.style.position = "absolute";
        list.style.backgroundColor = "#ffffff";
        list.style.top = "14px";
        list.style.borderRadius = 5 + "px";
        list.style.border = "1px solid black";
      

        var ulist = document.createElement("ul");
        ulist.style.listStyle = "none";
        var languages = ["English","Tamil","Hindi","Telugu","Kannada","Malayalam","Bengali","Marati"];
        var alias = ["EN","TA","HI","TE","KA","MA","BE","MA"];
        var names = [];
        for(var i = 0; i < 8; i++){
            var li = document.createElement("li");
            names[i] = document.createElement("input");
    
            var label = document.createElement("label");
            label.innerHTML = languages[i];
            label.style.position = "relative";
            label.style.left = 10 + "px";
            label.style.fontFamily = "Arial,sans-serif";
            label.style.fontSize = 20 + "px";
            label.style.fontWeight = "lighter";
            li.appendChild(names[i]);
            li.appendChild(label);

            label.classList.add('label-hover');
    
            names[i].type = "radio";
            names[i].value = languages[i];
            names[i].name = "radio";
            names[i].id = i;
          
            ulist.appendChild(li);
    
            list.appendChild(ulist);
            }
                names[0].onclick = () =>{
                    document.getElementById("lan").innerHTML = alias[0];
    
                }
                names[1].onclick = () =>{
                  
                    document.getElementById("lan").innerHTML = alias[1];
    
                }
                names[2].onclick = () =>{
                  
                    document.getElementById("lan").innerHTML = alias[2];
    
                }
                names[3].onclick = () =>{
                  
                    document.getElementById("lan").innerHTML = alias[3];
    
                }
                names[4].onclick = () =>{
                  
                    document.getElementById("lan").innerHTML = alias[4];
    
                }
                names[5].onclick = () =>{
                  
                    document.getElementById("lan").innerHTML = alias[5];
    
                }
                names[6].onclick = () =>{
                  
                    document.getElementById("lan").innerHTML = alias[6];
    
                }
                names[7].onclick = () =>{
                  
                    document.getElementById("lan").innerHTML = alias[7];
    
                }
        var learn = document.createElement("a");
        learn.innerHTML = "learn more";
        learn.style.color = "blue";
        learn.classList.add('link-hover');
        learn.style.position = "relative";
        learn.style.left = "75px";
        learn.style.top = "15px";
        learn.style.cursor = "pointer";

        list.appendChild(learn);

        var india = document.createElement("img");
        india.src = "../assets/india.jpg";
        india.style.height = "16px";
        india.style.width = "21px";
        india.style.position = "relative";
        india.style.top = "90px";
        india.style.left = "-65px";

        list.appendChild(india);

        var country = document.createElement("a");
        country.innerHTML = "india/change&nbsp;country";
        country.style.color = "#040436";
        country.classList.add('link-hover');
        country.style.position = "relative";
        country.style.top = "65px";
        country.style.left = "50px";
        country.style.cursor = "pointer";

        list.appendChild(country);

          
         
        }

function signDropOpen(){
    signOpen = false;
    var main = document.getElementById("sign-drop");

    var sign = document.createElement("div");
    sign.style.overflow = "hidden";
    sign.style.height = "417px";
    sign.style.width = "500px";
    sign.style.position = "absolute";
    sign.id = "sign";
    sign.style.left = "-130px";
    sign.style.top = "15px";
    sign.style.borderRadius = "5px";
    sign.style.backgroundColor = "#FFFFFF";
    sign.style.border = "1px solid black";

    var signIn = document.createElement("a");
    signIn.style.backgroundColor = "gold";
    signIn.style.paddingLeft = "95px";
    signIn.style.paddingRight = "95px";
    signIn.style.paddingTop = "10px";
    signIn.style.paddingBottom = "10px";
    signIn.style.borderRadius = "10px";
    signIn.innerText = "Sign in";
    signIn.style.color = "#111111";
    signIn.style.fontSize = "13px";
    signIn.style.fontFamily = "Arial, sans-serif";
    signIn.style.position = "relative";
    signIn.style.top = "20px";
    signIn.style.left = "133px";
    signIn.style.cursor = "pointer";
    signIn.style.boxShadow = "3px 3px 4px #cccccc";

    signIn.classList.add("sign-hover");

    sign.appendChild(signIn);


    var creatAcc = document.createElement("p");
    creatAcc.innerHTML = "<span style='font-size:11px;font-family:sans-serif;'>New Customer?</span>";
    creatAcc.style.position = "relative";
    creatAcc.style.left = "180px";
    creatAcc.style.top = "4px";
    var accLink = document.createElement("a");
    accLink.innerHTML = "<span style='color:blue;'>Start here.</span>";
    accLink.style.fontSize = "11px";
    accLink.style.fontFamily = "Arial, sans-serif";
    accLink.classList.add("start-hover");
    creatAcc.appendChild(accLink);

    sign.appendChild(creatAcc);

    var hr = document.createElement("hr");
    hr.style.position = "relative";
    hr.style.top = "-8px";
    hr.width = "80%";
    sign.appendChild(hr);

    var vr = document.createElement("div");
    vr.className = "vl";
    vr.classList.add("vl");
    sign.appendChild(vr);

    var yourList = document.createElement("div");
    yourList.classList.add("your-list");
    var p = document.createElement("p");
    p.style.font = "bold 16px Arial,sans-serif";
    p.style.position = "relative";
    p.style.top = "9px";
    p.style.left = "40px";
    p.innerText = "Your Lists";
    p.style.color = "#0F1111";
    yourList.appendChild(p);
    var unorderList = document.createElement("ul");
    unorderList.classList.add("unorder-list");

    var items = ["Create a Wish List","Wish from Any Website","Baby Wish List","Discover Your Style","Visit Showroom"];
    for(var i = 0; i < items.length; i++){
    var innerList = document.createElement("li");
    innerList.innerHTML = "<a>"+items[i]+"</a>";
    innerList.classList.add("inner-hover");
    innerList.style.padding = "3px";
    unorderList.appendChild(innerList);
    }
    yourList.appendChild(unorderList);
    sign.appendChild(yourList);

    var yourAccount = document.createElement("div");
    yourAccount.className = "yourAcc";
    yourAccount.classList.add("your-account");
    var p1 = document.createElement("p");
    p1.style.font = "bold 16px Arial,sans-serif";
    p1.style.position = "relative";
    p1.style.top = "9px";
    p1.style.left = "40px";
    p1.style.color = "#0F1111";
    p1.innerText = "Your Account";

    yourAccount.appendChild(p1);
    var unorderList1 = document.createElement("ul");
    unorderList1.classList.add("unorder-list1");

    var items1 = ["Your Account","Your Orders","Your Wish List","Your Recommendations","Your Prime Membership","Your Prime Video","Your Subscribe & Save Items","Memberships & Subscriptions","Your Seller Account"];
    for(var i = 0; i < items1.length; i++){
    var innerList1 = document.createElement("li");
    innerList1.innerHTML = "<a>"+items1[i]+"</a>";
    innerList1.classList.add("inner-hover");
    innerList1.style.padding = "3px";
    unorderList1.appendChild(innerList1);
    }
    yourAccount.appendChild(unorderList1);
    sign.appendChild(yourAccount);

    main.appendChild(sign);
}


function dropClose(){
   document.getElementById("droped").remove();
   opened = true;
}

function signDropClose(){
    document.getElementById("sign").remove();
    signOpen = true;
}