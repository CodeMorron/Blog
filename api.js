import express from "express";

let app = express();
let port = 4000;
let posts = [
  {
    id: 1,
    title: "Lorem Ipsum",
    article:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel massa sodales, rutrum nisl ac, lacinia velit. Fusce auctor ut urna dapibus malesuada. Mauris sodales, mi vitae porta efficitur, quam lectus porttitor turpis, ac interdum elit est non risus. Suspendisse sem ex, iaculis eget dapibus quis, consectetur vitae orci. Nullam mollis tempor iaculis. Suspendisse erat erat, mattis eget posuere id, tempor eu odio. Sed at erat mauris. Nunc sagittis consequat tellus tincidunt vehicula. Donec lobortis ante in congue feugiat. Suspendisse sagittis fringilla ultricies. Nulla interdum massa scelerisque urna placerat, et vulputate libero imperdiet. Integer porttitor posuere est tempus mattis. Vestibulum et suscipit tortor.",
  },

  {
    id: 2,
    title: "Why Java is the new English",
    article: "Nothing is better than programming,Music and Digital art",
  },

  {
    id: 3,
    title: "The Understanding",
    article: "This Article is Just a simple test of my API understanding",
  },
];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/posts", (req, res) => {
  try {
    res.json(posts);
  } catch (error) {
    res.send(error);
  }
});

app.post("/posts",(req,res)=>{

  let postObj = {
    id: posts.length+1,
    title : req.body.title,
    article : req.body.description
  }

  posts.push(postObj)
  res.json(posts)
})

app.delete("/posts/:id",(req,res)=>{

  let postId = req.params.id
  console.log(postId)
})

app.listen(port, () => {
  console.log("API running on port " + port + "🏃🏽");
});
