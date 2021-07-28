const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const faker = require('faker');
const cookieParser = require('cookie-parser');
const Blog = require('./models/blog');
const User = require('./models/user');

require('dotenv').config();
const app = express();

const dbUri = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/meanblog';
const PORT = process.env.PORT || 80;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongo db connected'))
    .catch(err => console.log(err));


const corsOptions = {
    origin: true,
    credentials: true
}
app.use(express.static(path.join(__dirname, '/angular-src/dist')));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors(corsOptions));


const verifyToken = (req, res, next) => {
    if (!req.cookies.token) {
        return res.status(401).send('Unauthorized request');
    }
    const token = req.cookies.token.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    else if (payload.subject !== req.cookies.userId) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}

const verifyBlogAuthor = async (req, res, next) => {
    const user = await User.findById(req.userId);
    if (user.email !== process.env.ADMIN_USER_EMAIL && req.body.userId !== req.userId) {
        return res.status(401).send('Unauthorized request');
    }
    next();
}

////////////////////////////////////////////////////////////

app.post('/api/signup', async (req, res) => {
    try {
        const resp = await User.findOne({email: req.body.email});
        if (resp !== null) {
            res.status(401).send('That email is already registered');
        }
        else {
            try {
                const userData = req.body;
                userData.username = userData.email.split('@')[0];
                const newUser = await User.create(userData);
                const payload = { subject: newUser._id}
                const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
                res.cookie('token', 'Bearer ' + token, {httpOnly: true});
                res.cookie('username', userData.username);
                res.status(201).json({userId: newUser._id.toString(), username: newUser.username}); 
            } 
            catch(err) {
                res.status(400).json(err); 
            }            
        }
    }
    catch(err) {
        res.status(400).json(err);
    }
});

app.post('/api/login', async (req, res) => {
    const userData = req.body;
    try {
        const user = await User.findOne({email: userData.email})
        if (!user) {
            res.status(401).send('That email is not registered');
        }
        else {
            bcrypt.compare(userData.password, user.password)
                .then(auth => {
                    if (auth) {
                        const payload = { subject: user._id};
                        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
                        res.cookie('token', 'Bearer ' + token, {httpOnly: true});
                        res.cookie('userId', user._id.toString());
                        res.cookie('username', user.username);
                        res.status(200).send({userId: user._id, username: user.username});
                    }
                    else {
                        res.status(401).send('Incorrect password');
                    }
                })
        }
    }    
    catch(err) {
        res.status(400).json(err);
    }
});

/////////////////////////////////////////////////////////

app.post('/api/blogs', [verifyToken, verifyBlogAuthor], (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.get('/api/blogs', (req, res) => {
    Blog.find().sort({createdAt: 'descending'})
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.get('/api/blogs4userId/:userId', (req, res) => {
    Blog.find({userId: req.params.userId}).sort({createdAt: 'descending'})
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.get('/api/blogs/:_id', (req, res) => {
    Blog.findById(req.params._id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.put('/api/blogs/:_id', [verifyToken, verifyBlogAuthor], (req, res) => {
    const update = new Blog(req.body);
    Blog.findByIdAndUpdate(req.params._id, update, {new:true})
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.delete('/api/blogs/:_id', verifyToken, (req, res) => {
    Blog.findById(req.params._id)
        .then(blog => {
            if (blog.userId === req.userId) {
                Blog.findByIdAndDelete(req.params._id)
                    .then(result => res.json(result))
                    .catch(err => res.json(err)); 
            }
            else {
                return res.status(401).send('Unauthorized request');
            }
        })
        .catch(err => res.status(400).json(err));
});

app.delete('/api/blogs', verifyToken, (req, res) => {
    Blog.collection.drop()
        .then(result => res.json(result))
        .catch(err => res.json(err));     
});

app.get('/api/useridForBlog/:_id', (req, res) => {
    Blog.findById(req.params._id)
        .then(result => res.json(result.userId))
        .catch(err => res.json(err));
});

///////////////////////////////////////////////////////////////////////////////////////////

// app.get('/api/users', verifyToken, (req, res) => {
//     User.find().sort({username: 'ascending'})
//         .then(result => res.json(result))
//         .catch(err => res.json(err));
// });

app.get('/api/users/:id', verifyToken, (req, res) => {
    User.findById(req.params.id)
        .then(result => {
            const d = {...result.toObject()};
            delete d.password;
            res.json(d);
        })
        .catch(err => res.json(err));
});

app.post('/api/users', verifyToken, (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.put('/api/users/:id', verifyToken, (req, res) => {
    const update = new User(req.body);
    User.findByIdAndUpdate(req.params.id, update)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.delete('/api/users', verifyToken, (req, res) => {
    User.deleteMany({})
        .then(result => res.json(result))
        .catch(err => res.json(err));    
});

app.get('/api/usernames', (req, res) => {
    User.find().sort()
        .then(result => {
            const arr = result.map(user => ({_id: user._id, username: user.username}));
            res.json(arr);
        })
        .catch(err => res.json(err));
});

app.get('/api/usernames/:id', (req, res) => {
    User.findById(req.params.id).sort()
        .then(resp => res.json({_id: resp._id, username: resp.username}))
        .catch(err => res.json(err));
});

app.patch('/api/usernames/:userId', verifyToken, (req, res) => {
    const userId = req.params.userId;
    User.findByIdAndUpdate(userId, {$set: {username: req.body.username}}, {new:true})
        .then(result => {
            res.cookie('username', result.username);
            res.json(result.username);   
        })
        .catch(err => res.json(err));
});

///////////////////////////////////////////////////////////////////////////////////////////

app.post('/api/createFakeBlogsForUser', verifyToken, (req, res) => {
   const Nposts = req.body.Nposts;
   const user = req.body.user;
   const blogs = [];
   for (let i=0; i<Nposts; i++) {
       const blog = new Blog({
            userId: user._id,
            username: user.username,
            title: faker.lorem.words(5), 
            body: faker.lorem.paragraphs(6),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
       });
       blogs.push(blog);
   } 
   Blog.collection.insertMany(blogs)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.post('/api/createFakeSingleBlog', verifyToken, (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

///////////////////////////////////////////////////////////////////////////////////////////

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/angular-src/dist/index.html'));
});

app.listen(PORT, () => console.log(`serving from  ${process.env.API_BASE_URL}:${PORT}`));


