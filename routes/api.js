var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'esoko_db'
});
// connect to database
dbConn.connect(); 

/* api landing page. */
router.get('/', function(req, res, next) {
  res.send('Esoko PMS API');
});
/* GET users listing. */
router.get('/users', function (req, res, next) {
  dbConn.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'users list.' });
});
});
/* GET user details. */
router.get('/users/:id', function (req, res, next) {

  let user_id = req.params.id;
  if (!user_id) {
   return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  dbConn.query('SELECT * FROM user where uid=?', user_id, function (error, results, fields) {
   if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'user details .' });
  });
});
/* GET members listing. */
router.get('/members', function (req, res, next) {
  dbConn.query('SELECT * FROM members', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'members list.' });
});
});
/* GET member detail. */
router.get('/members/:id', function (req, res, next) {

  let user_id = req.params.id;
  if (!user_id) {
   return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  dbConn.query('SELECT * FROM members where id=?', user_id, function (error, results, fields) {
   if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'member view' });
  });
});

/* Add member . */
router.post('/members/add', function (req, res) {

  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email     = req.body.email;
  let phone     = req.body.phone;
  let gender    = req.body.gender;
  let country   = req.body.country;
  let occupation = req.body.occupation;  
  let address   = req.body.address;  
  let hobbies   = req.body.hobbies;  
  let comments   = req.body.comments;  
  let age       = req.body.age;  
  let picture   = req.body.picture; 
  if (!email) {
    return res.status(400).send({ error:true, message: 'Please provide your email' });
  }
 dbConn.query("INSERT INTO members SET ? ", { 

  first_name: first_name,
  last_name: last_name, 
  email: email, 
  phone: phone, 
  gender: gender, 
  country: country, 
  occupation: occupation, 
  address: address, 
  hobbies: hobbies, 
  comments: comments, 
  age: age, 
  pic: picture

   }, function (error, results, fields) {
if (error) throw error;
  return res.send({ error: false, data: results, message: 'New Member has been created successfully.' });
  });
});
/* Update member . */
router.post('/members/edit', function (req, res) {
  let member_id = req.body.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email     = req.body.email;
  let phone     = req.body.phone;
  let gender    = req.body.gender;
  let country   = req.body.country;
  let occupation = req.body.occupation;  
  let address   = req.body.address;  
  let hobbies   = req.body.hobbies;  
  let comments   = req.body.comments;  
  let age       = req.body.age;  
  let picture   = req.body.picture; 

  if (!member_id) {
    return res.status(400).send({ error:true, message: 'Please provide member id' });
  }
  dbConn.query("UPDATE members SET first_name = ?, last_name = ?, email = ?, phone = ?, gender = ?, country = ?, occupation = ?, address = ?, hobbies = ?, comments = ?, age = ?, pic = ? WHERE id = ?",
   [first_name, last_name, email, phone, gender, country, occupation, address, hobbies, comments, age, picture, member_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Member has been updated successfully.' });
});
});

//  Delete member
router.post('/member/delete', function (req, res) {
  
  let member_id = req.body.id;

  if (!member_id) {
      return res.status(400).send({ error: true, message: 'Please provide member id' });
  }
  dbConn.query('DELETE FROM members WHERE id = ?', [member_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Member has been deleted successfully.' });
  });
}); 


/* GET groups listing. */
router.get('/groups', function (req, res, next) {
  dbConn.query('SELECT * FROM groups', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'groups list.' });
});
});

/* Add group . */
router.post('/groups/add', function (req, res) {

  let name = req.body.name;
  let members = req.body.members;

  if (!name) {
    return res.status(400).send({ error:true, message: 'Please provide a name' });
  }
 dbConn.query("INSERT INTO groups SET ? ", { 

  name: name,
  members: members, 

   }, function (error, results, fields) {
if (error) throw error;
  return res.send({ error: false, data: results, message: 'New group has been created successfully.' });
  });
});

/* Update group . */
router.post('/groups/edit', function (req, res) {
  let group_id = req.body.id;
  let name = req.body.name;
  let members = req.body.members;

  if (!group_id) {
    return res.status(400).send({ error:true, message: 'Please provide group id' });
  }
  dbConn.query("UPDATE groups SET name = ?, members = ? WHERE id = ?",
   [name, members, group_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Group has been updated successfully.' });
});
});

/* Assign people to group . */
router.post('/groups/assign', function (req, res) {
  let group_id = req.body.id;
  let member_id = req.body.member_id;

  if (!group_id) {
    return res.status(400).send({ error:true, message: 'Please provide group id' });
  }

  dbConn.query('SELECT members FROM groups where id=?', group_id, function (error, results, fields) {
    if (error) throw error;
    
    
     let members_id = results[0].members;
     let id_split = members_id.split(":");
     let split_length=id_split.length;
     id_split[split_length]=member_id;
     let nmembers_id = id_split.join(":");
    
      // return res.send({ error: false, data: results[0].members, message: 'member view' });
    //  return members_id;

    console.log(nmembers_id);
    dbConn.query("UPDATE groups SET  members = ? WHERE id = ?",
     [nmembers_id, group_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Member has been assigned successfully.' });
  });
   });

});


/* Search members records. */
router.post('/members/search/', function (req, res, next) {

  let search = req.body.search;
  if (!search) {
    return res.status(400).send({ error:true, message: 'Please provide a search key ' });
  }
  var sql = 'SELECT * FROM members WHERE id =? OR first_name =? OR last_name =? OR email =? OR phone = ? OR gender =? OR country =? OR occupation =? OR address =? OR hobbies =? OR comments =? OR age =?';
  // console.log(sql);
  dbConn.query(sql, [search, search, search, search, search, search, search, search, search, search, search, search], function (error, results, fields) {
    if (error) throw error;
    if (results.length==0) {
      return res.send({ error: false, message: 'Empty result.' });
    } else {
      return res.send({ error: false, data: results, message: 'search result.' });
    }
   
});
});

router.post('/groups/search/', function (req, res, next) {

  let search = req.body.search;
  if (!search) {
    return res.status(400).send({ error:true, message: 'Please provide a search key ' });
  }
  var sql = 'SELECT * FROM groups WHERE id =? OR name =? ';
  // console.log(sql);
  dbConn.query(sql, [search, search, search, search], function (error, results, fields) {
    if (error) throw error;
    if (results.length==0) {
      return res.send({ error: false, message: 'Empty result.' });
    } else {
      return res.send({ error: false, data: results, message: 'search result.' });
    }
   
});
});
module.exports = router;


