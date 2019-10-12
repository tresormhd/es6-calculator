tab = [];c=[]
let calcul=0; let a ;let cc ;let dd 
let pas_ch=0;
$id=(id)=>{  return document.getElementById(id); }
f_calc=(id,n)=>{
    if (n=='ce') {
        initialiser_calc(id);
    }
    else if(n=='pow') {
        document.form1.calc_resultat.value = a ** document.form1.calc_resultat.value 
            
    }else if(n=='=')  {
        if(tab[id][0]!='=' && tab[id][1]!=1) {
            let ee = eval('calcul='+tab[id][2]+tab[id][0]+tab[id][3]+';');
            $id(id+'_resultat').value= calcul;
            document.getElementById('dd').value = tab[id][2]+tab[id][0]+tab[id][3]
            console.log(tab[id][2],tab[id][0],tab[id][3],n,ee)
            tab[id][2]=calcul;
            tab[id][3]=0;
        }
    } else if(n=='+-') {
        $id(id+'_resultat').value*=(-1);
        if(tab[id][0]=='='){
            tab[id][2] = $id(id+'_resultat').value;
            tab[id][3] = 0;
        } else {
            tab[id][3] = $id(id+'_resultat').value;
        }
        pas_ch = 1;
    }
    else if(n=='nbs')
    {
        if($id(id+'_resultat').value<10 && $id(id+'_resultat').value>-10)
        {
            $id(id+'_resultat').value=0;
        }else {
            $id(id+'_resultat').value=$id(id+'_resultat').value.slice(0,$id(id+'_resultat').value.length-1);
        }
        if(tab[id][0]=='='){
            tab[id][2] = $id(id+'_resultat').value;
            tab[id][3] = 0;
        }  else {
            tab[id][3] = $id(id+'_resultat').value;
        }
    } 

    else {
        if(tab[id][0]!='=' && tab[id][1]!=1) {
            eval('calcul='+tab[id][2]+tab[id][0]+tab[id][3]+';');
            $id(id+'_resultat').value=calcul;
            tab[id][2]=calcul;
           // tab[id][2]=document.form1.calc_resultat.value 
            tab[id][3]=0;
        }
        tab[id][2]=document.form1.calc_resultat.value 
        tab[id][0] = n;
        c.push(tab[id])
        console.log(tab[id][0])      
    }
    if(pas_ch==0){
        tab[id][1] = 1;
    } else {
        pas_ch=0;
    }
    tab[id][0]==n
    if(n=='ce'){
        document.getElementById('dd').value = 0
    }else{
         document.getElementById('dd').value += n
    }
    
    document.getElementById(id+'_resultat').focus();
    $id(id+'_resultat').innerHTML = calcul
    return true;
}
add_calc=(id,n)=>{
    if(tab[id][1]==1){ 
        $id(id+'_resultat').value=n; 
    }else{ 
        $id(id+'_resultat').value+=n; 
    }
    if(tab[id][0]=='=') {
        tab[id][2] = $id(id+'_resultat').value;
        tab[id][3] = 0;
       
    }else{
        tab[id][3] = $id(id+'_resultat').value;
    }
    a=n
    console.log(typeof(n))
    c.push(n)
    tab[id][1] = 0;
    document.getElementById(id+'_resultat').focus();
    document.getElementById('dd').value += n
    return true;
}
initialiser_calc=(id)=>{
        $id(id+'_resultat').value=0;
        document.getElementById('dd').value=0
        c.slice(0,10)
        tab[id] = new Array('=',1,'0','0',0);
        document.getElementById(id+'_resultat').focus();
        return true;
}
key_detect_calc=(id,evt)=>{
    switch (evt.keyCode) {
        case (evt.keyCode>95) && (evt.keyCode<106): var nbr = evt.keyCode-96; add_calc(id,nbr);break;
        case (evt.keyCode>47) && (evt.keyCode<58): var nbr = evt.keyCode-48; add_calc(id,nbr);break;
        case evt.keyCode==107: f_calc(id,'+');  break;
        case evt.keyCode==109: f_calc(id,'-'); break;
        case evt.keyCode==106: f_calc(id,'*'); break;
        case evt.keyCode==111: f_calc(id,'/'); break;
        case evt.keyCode==110: add_calc(id,'.'); break;
        case evt.keyCode==190: add_calc(id,'.'); break;
        case evt.keyCode==188: add_calc(id,'.'); break; 
        case evt.keyCode==13: f_calc(id,'='); break; 
        case evt.keyCode==46: f_calc(id,'ce'); break;
        case evt.keyCode==8:  f_calc(id,'nbs'); break;
        case evt.keyCode==27: f_calc(id,'ce'); break;
        default: break;
    }
    return true;
}

scientific=(x) =>{    
    let a = parseFloat(document.form1.calc_resultat.value)
    //let b = parseFloat(document.form1.calc_resultat.value)
    switch (x) {
        case 1: document.form1.calc_resultat.value = Math.sqrt(a); break;
        case 2: document.form1.calc_resultat.value = Math.tan(a); break;
        case 3: document.form1.calc_resultat.value = Math.sin(a); break;
        case 4: document.form1.calc_resultat.value = Math.cos(a); break;
        case 5: 
            document.getElementById('dd').value= a+'^'+2
            document.form1.calc_resultat.value = Math.pow(a,2); 
            break;
        case 7: 
            if(a!=0){
                document.getElementById('dd').value= document.form1.calc_resultat.value * Math.PI; 
                document.form1.calc_resultat.value = a* Math.PI
                tab[id][2]=document.form1.calc_resultat.value 
            }else {
                document.form1.calc_resultat.value=Math.PI
            }
            break;
        case 8: 
            document.form1.calc_resultat.value = Math.log(a); 
            break;
        default: break;
    }
    return true;
}
secondf = ()=>{
    let mod = document.getElementById('modulo')
    if (mod.value==='/') mod.value ='%'
    else mod.value = '/'
}
function tresor (id,n){
    //let a = parseFloat(document.form1.calc_resultat.value)
    dd = document.getElementById('dd');cc = document.form1.calc_resultat
    dd.value +=n;      
       
    
}
document.addEventListener('keydown',(e)=>{ console.log(e.which) })