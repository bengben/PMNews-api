var express = require('express');
var db 			= require('../model/db.js');

var router 	= express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* news */
router.get('/news/:p', function(req, res, next) {
	let p  				= req.params.p;
	let numStart 	= p * 10;
	if(p=='1'){
		numStart = 0;
	}
	let numEnd 		= numStart+10;
	let nextPage	=	parseInt(p)+1;
	let page 			= {p:p,numStart:numStart,numEnd:numEnd,nextPage:nextPage};// 
	let sql 			=	"select "
  res.json({p:p,numStart:numStart,numEnd:numEnd,nextPage:nextPage})
});


router.post('/insert', function(req, res, next) {
	console.log(req.body);
	let sd = require('silly-datetime');
	let time=sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
	let news = {tag: req.body.tag, author: req.body.author,avatar:req.body.avatar,createTime:time,content:req.body.content,photo:req.body.photo};
  let sqlString = 'INSERT INTO article SET ?';
  let connection = db.connection();
  db.insert(connection, sqlString, news, function(id){
      console.log('inserted id is:' + id);
  });
  db.close(connection);
  res.json(news);
});


//插入测试
router.get('/dbtest',function(req, res){
    let project = {project_name: 'test', create_time: '2017-03-28 14:09:29'};
    let sqlString = 'INSERT INTO project SET ?';
    let connection = db.connection();
    db.insert(connection, sqlString, project, function(id){
        console.log('inserted id is:' + id);
    });
    db.close(connection);
    return;
});

module.exports = router;
