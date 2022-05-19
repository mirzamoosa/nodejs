const express = require('express');
const path =require('path');
const app =express();
const publicPath= path.join(__dirname,'public');

const reqFilter=(req,res,next)=>{
      if(!req.query.age)
      { 
          res.send("please provide age")
      }
      else{
        next();

      }
     
}
app.use(reqFilter)
app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

app.get('/users',(req,res)=>{
    res.send('welcome to users page')
})

app.set('view engine','ejs');
app.get('/profile',(req,res)=>{
    const user={
        name:'mirza',
        email:'mirzamoosa56@gmail.com',
        city:'karachi',
        skills:['html','css','Bootstrap','javascript','nodejs','angularjs']
    }
    res.render('profile',{user})
});

app.get('/login',(req,res)=>{
    const user={
        name:'mirza',
        email:'mirzamoosa56@gmail.com',
        city:'karachi',
        skills:['html','css','Bootstrap','javascript','nodejs','angularjs']
    }
    res.render('login',{user});
})

//app.use(express.static(publicPath));
app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
});
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})

/*app.get("/",(req,res)=>{
res.send(`<h1>welcome,to Home page</h1><a href="/about">Go to About page</a>`);
});

app.get("/about",(req,res)=>{

    res.send(`
    <input type ="text" placeholder="User name"/>
    <button>Click Me</button>
    <a href="/">Go to Home page</a>
    `);
});

app.get("/help",(req,res)=>{

    res.send([
        {
        name: 'MirzaMoosa',
        email:'mirzamoosa56@gmail.com'
        },
        {
        name: 'WaleedKhan',
        email:'waleedkhan63@gmail.com'
        }
    ]);
    });*/
    
    

    app.listen(5000);

