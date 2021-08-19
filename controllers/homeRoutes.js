const router = require('express').Router();
const { Posts, Comments } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostsData = await Posts.findAll({
      include: [
        {
          model: Comments,
          // attributes: ['filename', 'description'],
        },
      ],
    });

    const allPosts = dbPostsData.map((Posts) =>
      Posts.get({ plain: true })
    );


    res.render('home', {
      allPosts: allPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Posts
// Use the custom middleware before allowing the user to access the Posts
router.get('/posts/:id', withAuth, async (req, res) => {
  try {
    const dbPostsData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: Comments
        },
      ],
    });

    const singlePost = dbPostsData.get({ plain: true });
    console.log('Single post from DB', singlePost);
    res.render('singlepost', { singlePost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  console.log('We hit out post create route!!!!', req.body)
  console.log('session who is logged in', req.session)

  Posts.create({title: req.body.title,content: req.body.text,user_id: req.session.user_id}).then((data,err) => {
    console.log( 'DB',data,err)
  })
})

router.post('/createComment', async (req, res) => {
  console.log('We hit out comment create route!!!!', req.body)
  console.log('session who is logged in', req.session)

  // do create with Comments model!!!// Coments.create({text: req.body.comment})
  Comments.create({
    text: req.body.comment, 
    user_id: req.session.user_id,
    post_id: parseInt(req.body.post_id) 
  }).then((data,err) => {
    console.log( 'DB',data,err)
  })

})

// GET one comments
// Use the custom middleware before allowing the user to access the comments
router.get('/comments/:id', withAuth, async (req, res) => {
  try {
    const dbcommentsData = await comments.findByPk(req.params.id);

    const comments = dbcommentsData.get({ plain: true });

    res.render('comments', { comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('sign up');
});


router.get('/dashboard', (req, res) => {


  res.render('dashboard');
});

module.exports = router;