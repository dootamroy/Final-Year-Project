import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
//import Connection from 'mysql/lib/Connection';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rocketman@123',
  database: 'recipe'
});

connection.connect(function(err){
  if(err){
    console.error('Error connecting::: ' + err.stack);
    return;
  }
  console.log('connected as Id::: '+ connection.threadId);
});

/*const recipes = [
    {
      recipe_id: 35382,
      image_url:
        "https://bing.com/th?id=OSK.602054f41f7ba09555a9fa6f16cf42da",
      title: "Jalapeno Popper Grilled Cheese Sandwich",
      publisher: "Closet Cooking",
      source_url:
        "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"
    },
    {
      recipe_id: 35383,
      image_url:
        "https://bing.com/th?id=OSK.602054f41f7ba09555a9fa6f16cf42da",
      title: "Jalapeno Popper Grilled Cheese Sandwich",
      publisher: "Closet Cooking",
      source_url:
        "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"
    },
    {
      recipe_id: 35384,
      image_url:
        "https://bing.com/th?id=OSK.602054f41f7ba09555a9fa6f16cf42da",
      title: "Jalapeno Popper Grilled Cheese Sandwich",
      publisher: "Closet Cooking",
      source_url:
        "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"
    }
  ];
  */

  app.get('/recipes', (req,res)=>{
    //res.json(recipes);
    //const sql ='SELECT * FROM T_RECIPES';
    connection.query('SELECT * FROM T_RECIPES', (err,results) =>{
      if(err) throw err;
      res.send(results);
    })
  });


  app.get('/', (req,res)=>{
    res.send('aisuuuuuuuuuuuuuu!!');
  });

  app.post('/recipe', (req,res)=>{
    const recipe = req.body;
    console.log(recipe);
    // after that data needs to be parsed and passed on to db.

    const {RECIPE_ID, RECIPE_TITLE, IMAGE_URL, RECIPE_PUBLISHER, SOURCE_URL, PUBLISHED_DATE} = req.body;
    const sql = 'INSERT INTO RECIPE.T_RECIPES SET ?';
    const values ={RECIPE_ID, RECIPE_TITLE, IMAGE_URL, RECIPE_PUBLISHER, SOURCE_URL, PUBLISHED_DATE};
    connection.query(sql, values, (err,results) =>{
      if(err) {throw err; res.send(err);};
      //res.send(results);
      res.send('Recipe created successfully');
    });

    
  });



app.listen(PORT, () => console.log('Server running on port: http://localhost:${PORT}'));

//app.get();


