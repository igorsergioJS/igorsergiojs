function getRandomIntInclusive(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//variáveis

var i, delta;
var menu1,menu2;
var n;
var loop = 1;
var checkbox;

var password = [];

var letramai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var letramin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var num = ['0','1','2','3','4','5','6','7','8','9'];

var numlet = ['0','1','3','4'];

var vogal = ['A','a','E','e','I','i','O','o','U','u','Y','y'];

var consoante = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];

var carac = ['!','@','#','$','%','^','&','*'];

var caraclet = ['@'];



function firstmenu(x)
{
    menu1 = x;

    return menu1;
}

function secmenu(y)
{
    menu2 = y;
    
    return menu2;
}





//escolha de letras minúsculas e maiúsculas

function check(a)
{
    checkbox = a;

    return checkbox;
}


function gerar()
{ 


    if(checkbox == 1)
{
    letramin = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    letramai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    consoante = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z','B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z'];

    vogal = ['A','A','E','E','I','I','O','O','U','U','Y','Y'];
}

if(checkbox == 2)
{
    letramin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    letramai = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    vogal = ['a','a','e','e','i','i','o','o','u','u','y','y']; 

    consoante = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];   
}

if(checkbox == 3)
{
    letramai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    letramin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    vogal = ['A','a','E','e','I','i','O','o','U','u','Y','y'];
    consoante = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
}

    n = document.getElementById("digitos").value;

    if(menu1 == 1 && menu2 == 1)
    {
        
        for(i = 0; i < n; i++)
    {
        delta = getRandomIntInclusive(1,4);

            if(delta == 1)
            {
                password[i] = letramai[getRandomIntInclusive(0,25)];
            }
            
            if(delta == 2)
            {
                password[i] = letramin[getRandomIntInclusive(0,25)];
            }
            if(delta == 3)
            {
                password[i] = num[getRandomIntInclusive(0,9)];
            }
            if(delta == 4)
            {
                password[i] = carac[getRandomIntInclusive(0,7)];
            }
    }
    }
    if(menu1 == 1 && menu2 == 2)
    {
        if(n%2 == 0)
{
    for(i = 0; i < n; i++)
    {

        delta = getRandomIntInclusive(1,3);

        if(delta == 1)
        {   
            if(i%2 == 0 || i == 0)
            password[i] = consoante[getRandomIntInclusive(0,39)];

            else
            password[i] = vogal[getRandomIntInclusive(0,11)];
        }

        if(delta == 2)
        {   
            if(i%2 == 0 || i == 0)
            password[i] = consoante[getRandomIntInclusive(0,39)];

            else
            password[i] = numlet[getRandomIntInclusive(0,3)];  
        }
        if(delta == 3)
        {
            if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = caraclet[0];
        }
    }       
}

 else
{
    for(i = 0; i < n; i++)
    {

        delta = getRandomIntInclusive(1,2);

        if((n - i) != 1)
        {
            if(delta == 1)
            {   
                if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = vogal[getRandomIntInclusive(0,11)];
            }

            if(delta == 2)
            {   
                if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = numlet[getRandomIntInclusive(0,3)]; 
            }


                if(delta == 3)
             {
            if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = caraclet[0];
                }
            

        }
        else
        {
            password[i] = consoante[getRandomIntInclusive(0,39)];
        }
        

    }         
}
    }
    if(menu1 == 2 && menu2 == 1)
    {
        for(i = 0; i < n; i++)
    {
        delta = getRandomIntInclusive(1,3);

            if(delta == 1)
            {
                password[i] = letramai[getRandomIntInclusive(0,25)];
            }
            
            if(delta == 2)
            {
                password[i] = letramin[getRandomIntInclusive(0,25)];
            }
            if(delta == 3)
            {
                password[i] = num[getRandomIntInclusive(0,9)];
            }
    }

    }
    if(menu1 == 2 && menu2 == 2)
    {
        if(n%2 == 0)
    {
        for(i = 0; i < n; i++)
        {

            delta = getRandomIntInclusive(1,2);

            if(delta == 1)
            {   
                if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = vogal[getRandomIntInclusive(0,11)];
            }

            if(delta == 2)
            {   
                if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = numlet[getRandomIntInclusive(0,3)];  
            }
        }       
    }

     else
    {
        for(i = 0; i < n; i++)
        {

            delta = getRandomIntInclusive(1,2);

            if((n - i) != 1)
            {
                if(delta == 1)
                {   
                    if(i%2 == 0 || i == 0)
                    password[i] = consoante[getRandomIntInclusive(0,39)];

                    else
                    password[i] = vogal[getRandomIntInclusive(0,11)];
                }

                if(delta == 2)
                {   
                    if(i%2 == 0 || i == 0)
                    password[i] = consoante[getRandomIntInclusive(0,39)];

                    else
                    password[i] = numlet[getRandomIntInclusive(0,3)]; 
                }

            }
            else
            {
                password[i] = consoante[getRandomIntInclusive(0,39)];
            }
            

        }         
    }
    }
    if(menu1 == 3 && menu2 == 1)
    {
        for(i = 0; i < n; i++)
    {
        delta = getRandomIntInclusive(1,3);

            if(delta == 1)
            {
                password[i] = letramai[getRandomIntInclusive(0,25)];
            }
            
            if(delta == 2)
            {
                password[i] = letramin[getRandomIntInclusive(0,25)];
            }
            if(delta == 3)
            {
                password[i] = carac[getRandomIntInclusive(0,7)];
            }
    }
    }
    if(menu1 == 3 && menu2 == 2)
    {
        if(n%2 == 0)
    {
        for(i = 0; i < n; i++)
        {

            delta = getRandomIntInclusive(1,2);

            if(delta == 1)
            {   
                if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = vogal[getRandomIntInclusive(0,11)];
            }

            if(delta == 2)
            {   
                if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = caraclet[0];
            }
        }       
    }

     else
    {
        for(i = 0; i < n; i++)
        {

            delta = getRandomIntInclusive(1,2);

            if((n - i) != 1)
            {
                if(delta == 1)
                {   
                    if(i%2 == 0 || i == 0)
                    password[i] = consoante[getRandomIntInclusive(0,39)];

                    else
                    password[i] = vogal[getRandomIntInclusive(0,11)];
                }

                if(delta == 2)
                {   
                    if(i%2 == 0 || i == 0)
                    password[i] = consoante[getRandomIntInclusive(0,39)];

                    else
                    password[i] = caraclet[0];  
                }

            }
                else
                {
                password[i] = consoante[getRandomIntInclusive(0,39)];
                }
            

        }         
    }
    }
    if(menu1 == 4 && menu2 == 1)
    {
        for(i = 0; i < n; i++)
    {
        delta = getRandomIntInclusive(1,2);

            if(delta == 1)
            {
                password[i] = letramai[getRandomIntInclusive(0,25)];
            }
            
            if(delta == 2)
            {
                password[i] = letramin[getRandomIntInclusive(0,25)];
            }

    }  
    }
    if(menu1 == 4 && menu2 == 2)
    {
        if(n%2 == 0)
    {
        for(i = 0; i < n; i++)
        {
 
                if(i%2 == 0 || i == 0)
                password[i] = consoante[getRandomIntInclusive(0,39)];

                else
                password[i] = vogal[getRandomIntInclusive(0,11)];
        }       
    }

     else
    {
        for(i = 0; i < n; i++)
        {


            if((n - i) != 1)
            {    
                    if(i%2 == 0 || i == 0)
                    password[i] = consoante[getRandomIntInclusive(0,39)];

                    else
                    password[i] = vogal[getRandomIntInclusive(0,11)];
    
            }
            else
            {
                password[i] = consoante[getRandomIntInclusive(0,39)];
            }
        }
    }
    }

       
    document.getElementById("Display").innerHTML = password.join('');
     

    password = [];
    
}


