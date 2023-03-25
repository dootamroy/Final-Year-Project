import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const recipes = [
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

  app.get('/recipes', (req,res)=>{
    res.json(recipes);
  })


  app.get('/', (req,res)=>{
    res.send('aisuuuuuuuuuuuuuu!!');
  })

  app.post('/recipe', (req,res)=>{
    const recipe = req.body;
    console.log(recipe);
    res.send('Recipe created successfully');
    // after that data needs to be parsed and passed on to db.
  })



app.listen(PORT, () => console.log('Server running on port: http://localhost:${PORT}'));

//app.get();


