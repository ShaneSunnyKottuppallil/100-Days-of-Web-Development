const express = require("express");
const port = 8080;
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "shane",
        content: "I love Coding!!"
    },
    {
        id: uuidv4(),
        username: "sven",
        content: "I love Robotics!!"
    },
    {
        id: uuidv4(),
        username: "shalets",
        content: "I love Medicine!!"
    },
    {
        id: uuidv4(),
        username: "sunny",
        content: "I love  Mechanics!!"
    }
];

// To view all Posts 
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// To Create new Post 1) GET Request to form 
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
// To Create new Post 2) POST Request to add new post.
app.post("/posts", (req, res) => {
    let id = uuidv4();
    let { username, content } = req.body;
    posts.push({ id, username, content });
    // Response to Redirect to All Posts after creating a Post 
    res.redirect("/posts");
});


// GET Request To get one Post using id
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        res.render("error.ejs");
    } else {
        res.render("show.ejs", { post });
    }
});

// PATCH to update specific post (Edit Post )
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

// To GET Request from Posts page and pass request to edit.ejs file... which inturn  sends patch req after editing form 
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let posts = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
})

// To Delete a Post 
app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts= posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

 

// To Listen all requests to Port 8080 
app.listen(port, () => {
    console.log(`Listening on Port : ${port}`);
});


