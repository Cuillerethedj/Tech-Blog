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
router.get('/Posts/:id', withAuth, async (req, res) => {
  try {
    const dbPostsData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: comments,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const Posts = dbPostsData.get({ plain: true });
    res.render('Posts', { Posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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