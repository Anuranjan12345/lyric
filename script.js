const color=["#4A772F" , "#61ba49" ,"#337aad" ,"#b2a533" ,"#c227b7"];
const val=["Minami no", "shima wa", "atakai paina ","purupuru atama ","pokapoka","aho baka",];

const title = document.querySelector(".text");
const bg = document.querySelector(".col");
    let i =0;
    setInterval(()=>{
    switch(i)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            {
            title.innerHTML = val[i];
            bg.setAttribute("style", `background: ${color[i]}; opacity:0.8;`);
            i++;
            break;
            }
            default:
                {
                    i=0;
                }
    }
    },400);
