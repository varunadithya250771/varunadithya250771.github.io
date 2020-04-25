let a=[],b=[],i=0,flag=1,w=0,d=20;
let tab=document.getElementsByTagName("div");
let elapsed=0,x=0,interval,startTime;
let t=[{dif:"easy",best:0},{dif:"medium",best:0},{dif:"hard",best:0}];

impo();

function impo()
{
 createArray(a,d);
 shuffle(a);
 createArray(b,(2*d),d);
 
}

function changedif(f)
{if(x!=0)
  alert("Warning!!You are not allowed to change difficulty in the middle of a game");
 else
 { 
 let k=document.getElementById("test");
 if(f==20)
  {k.className="c";
   d=Number(f);impo();
   document.getElementById("best").textContent=`Best: ${t[0].best}`;
  }
 else 
  if(f==42)
   {k.className="co";
    d=Number(f);impo();
    document.getElementById("best").textContent=`Best: ${t[1].best}`;
   } 
  else
   if(f==72)
   {k.className="con";
    d=Number(f);impo();
    document.getElementById("best").textContent=`Best: ${t[2].best}`;
   }
 }
}

function timer()
{ if(x==120)
  {
  startTime=Date.now();
  interval= setInterval(function(){
       elapsed=Date.now()-startTime;
       document.getElementById("timer").textContent=`Time: ${(elapsed/1000).toFixed(3)}`;
       
       
  },100);
 }
 if(x==240)
       {clearInterval(interval);
        elapsed =0;
        startTime=0;
       }  
}

function createArray(m,n,p=0){
 for(;p<n;p++)
  m[i++]=p+1;
 a=a.slice(0,d);
 b=b.slice(0,d);
 i=0;
}

function shuffle(m){
 for(i=m.length-1;i>0;i--){
  let j=Math.floor(Math.random()*(i+1));
  let k=m[i];
  m[i]=m[j];
  m[j]=k;
 }
}
  


function del()
 {
  let x=document.getElementsByClassName("grid-it");
  let y=document.getElementById("test");
  for(i=0;i<d;i++)
   y.removeChild(x[0]);
 }

function reset(v)
 {x=Number(v);
  flag=1;
  w=0;
  document.getElementById("timer").textContent="Time: 0.0"; 
  del();
  shuffle(a);
  timer();
  x=0; 
} 

function start(v)
{x=Number(v);
 timer(x); 
 function generate(m)
 {
  for(i=0;i<m.length;i++)
  {
   let q=document.createElement("button");
   q.textContent=m[i];
   q.setAttribute("id",i);
   q.value=m[i];
   q.className="grid-it";
   q.addEventListener("click",function onclick(event) {change(this.id);});
   if(d==42)
    q.style.fontSize="50px";
   if(d==72)
    q.style.fontSize="40px";
    
   tab[0].appendChild(q);
   
  }
 }

 

 function change(l)
 {
  let r=document.getElementById(l);
  if(Number(r.value)==flag)
  {
   if(r.value>d)
   {
     r.textContent="";
     flag++;
   }
   else
   {
    r.textContent=b[w];
    r.value=b[w++];
    flag++;
   }
   if(Number(flag)==((2*d)+1))
   {
    alert("congratulations!!\nYou finished the game");
    if(d==20)
     { if(t[0].best!=0)
       alert("Bravo!!!You hold the best score!!");
       if((elapsed/1000).toFixed(3)>t[0].best)
         t[0].best=(elapsed/1000).toFixed(3);
       document.getElementById("best").textContent=`Best: ${t[0].best}`;
       
     }
    else 
     if(d==42)
      {if(t[1].best!=0)
       alert("Bravo!!!You hold the best score!!");
       if((elapsed/1000).toFixed(3)>t[1].best)
         t[1].best=(elapsed/1000).toFixed(3);
       document.getElementById("best").textContent=`Best: ${t[1].best}`;
       }
     else
      if(f==72)
       {if(t[2].best!=0)
         alert("Bravo!!!You hold the best score!!");
        if((elapsed/1000).toFixed(3)>t[0].best)
        t[2].best=(elapsed/1000).toFixed(3);
        document.getElementById("best").textContent=`Best: ${t[2].best}`;
        }
    reset("240");   
    }
   
  }
  else
  {
   alert("Game over!! You clicked a wrong number in the ascending sequence");
   reset("240");
  }
 }



generate(a);

}

