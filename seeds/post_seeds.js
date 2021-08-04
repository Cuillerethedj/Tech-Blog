const { Post } = require('../models');

const postData = [
  {
    title: 'Blossoming G',
    content: 'Lorizzle ipsum check it out sizzle amet, uhuh ... yih! adipiscing fizzle. Nullam sapizzle velizzle, aliquet volutpizzle, bow wow wow quizzle, gravida vizzle, go to hizzle. Pellentesque dang tortor. Sed erizzle. Bizzle cool dolor ma nizzle turpizzle tempizzle temporLedyX',
    author_id: 1,
    date_created: 'March 30, 2018',   
  },
  {
    title: 'Cosmos Flowers',
    content: 'Etizzle go to hizzle urna gizzle nisl. Yippiyo quizzle daahng dawg. Maecenizzle away, ipsizzle malesuada go to hizzle yo mamma, nulla purus euismizzle hizzle, izzle luctizzle ass nulla izzle augue. ',
    author_id: '2',
    date_created: 'May 05, 2017',
    
  },
  {
    title: 'Sand + Sea = Summa',
    content: 'Phasellizzle tellivizzle volutpizzle tellizzle. Fizzle sheezy adipiscing lorem. Check out this non est. Nulla sapizzle get down get down, ultricizzle nec, fo shizzle mah nizzle fo rizzle, mah home g-dizzle dawg, fermentizzle things, pede.',
    author_id: '3',
    date_created: 'June 10, 2019',
  },
  {
    title: 'Beach Homies',
    content: 'Maecenas at mi. Pizzle erizzle. Prizzle away, yo fizzle congue consectetizzle, gizzle libero consequizzle brizzle, ass things my shizz mi non pot. Daahng dawg faucibus boofron. Dizzle nibh lectizzle, doggy sizzle, ornare cool, porttitor izzle, tellus. Prizzle sed urna. Cras condimentum shit crazy go to hizzle. ',
    author_id: '4',
    date_created:'July 4, 2020',
  },
  {
    title: 'Beach Sunrise',
    content: 'Bow wow wow aliquizzle fo shizzle my nizzle dizzle shiz. Cum sociis natoque hizzle et pot dizzle parturient montes, nascetizzle ridiculizzle its fo rizzle. Ut fo shizzle dizzle, molestie ass, convallizzle izzle, izzle mofo, stuff. Maurizzle dang urna shizznit fo shizzle. Donec sagittizzle. Gangster augue uhuh ... yih!, fringilla we gonna chung, aliquam a, condimentizzle izzle, fizzle.',
    author_id: '5',
    date_created:'August 14, 2016',
  },
  {
    title: 'Fall Colors',
    content: 'Etizzle a magna sizzle augue hendrerizzle gizzle. Aenean tellivizzle est. Vivamus maurizzle go to hizzle, dawg bizzle, facilisis fo shizzle mah nizzle fo rizzle, mah home g-dizzle, ultrices you son of a bizzle, shizzle my nizzle crocodizzle.',
    author_id: '6',
    date_created:'October 15, 2018',
  },
  {
    title: 'Autumn Mountains',
    content: 'Nunc commodo erat hizzle rizzle. Crunk congue. Vestibulizzle check it out laorizzle dui. Quisque sizzle break it down uhuh ... yih! eu leo volutpat condimentum. Suspendisse brizzle. Nunc izzle check it out cool gangster check it out aliquam. Sizzle crunk tempizzle ante. Shizzle my nizzle crocodizzle gangsta erizzle shizzle my nizzle crocodizzle sizzle. Gizzle crackalackin.',
    author_id:'7' ,
    date_created:'November 3, 2016',
  },
  {
    title: 'Frozen River',
    content: 'Etizzle stuff urna bow wow wow nisl. Mofo quizzle izzle. Maecenas stuff, ipsizzle malesuada malesuada phat, nulla purizzle euismod fo shizzle, izzle bling bling metus nulla and hizzle. Vivamus ullamcorper, tortizzle and congue stuff, bow wow wow fizzle ultricizzle shiz, izzle shit pimpin',
    author_id:'8' ,
    date_created:'December 24, 2020',
  },
  {
    title: 'Winter Home',
    content: 'Nulla got pizzle. Aliquizzle wore commodo break yo neck, yall. Aenean we gonna chung, sapizzle izzle vulputate break it down, libero bizzle hendrerizzle leo, nizzle condimentizzle nunc tellivizzle izzle nunc. Donizzle had dolizzle. Get down get down yippiyo felis. Sed nizzle faucibizzle things. Integizzle nulla sem, volutpat id, break it down fo shizzle, auctizzle mofo, nunc. Sizzle gizzle. Nunc mammasay mammasa mamma oo sa. Curabitur sit bizzle you son of a bizzle funky fresh ante blandit ass. Quisque laoreet tellizzle pimpin phat funky fresh. Aenizzle funky fresh dignissim yippi',
    author_id: '9',
    date_created:'January 20, 2018',
  
  
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
