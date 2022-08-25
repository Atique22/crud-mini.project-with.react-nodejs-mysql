
const express = require('express');
const mysql = require('./db').conn;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3008;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));


//VIEW DATA api call
app.get('/view', (req, res) => {
    let qry = "select * from registration";
    mysql.query(qry, (err, result) => {
        if (err) throw err;
        res.send(result);
    });

});


//registration api call
app.post('/resgiter_data', (req, res) => {
    const userData = req.body;
    console.log(userData);
    const { name, email, phone, address, password, c_password } = req.body;
    let qry = "select * from registration where phone = ? or email = ?";
    mysql.query(qry, [email, phone], (err, result) => {

        if (err) throw err;
        else {
            console.log("new data: " + req.body.email);
            console.log("table data: " + result.email);
            if (req.body.email == '' || req.body.phone == '' || req.body.name == '' || req.body.address == '' || req.body.password == '' || req.body.c_password == '') {
                console.log("enter complete requirements;");
                res.send({ require: true },{message: "here is a backend empty message"});
                // res.render('register', { require: true });
            }
            else if (result.length > 0) {
                console.log("enter unique data;");
                // return res.render('register', { mesg_repeat: true });
            }
            else if (req.body.password !== req.body.c_password) {
                console.log('enter same password!');
            }
            else {
                console.log("inserted detect");
                // inserted data
                let qry2 = "insert into registration values(?,?,?,?,?,?)";
                mysql.query(qry2, [, name, email, phone, address, password], (err, result2) => {
                    if (err) throw err;
                    console.log('inserted successfully!');
                    let userEmail = req.body.email;
                    // res.render('login', { mesg: true, userEmail });
                })
            }
        }

    })
});


//login api call 
app.get('/login_user', (req, res) => {
    const { email, password, security } = req.query;

    let qry = "select * from registration where email = ? and password = ?";
    mysql.query(qry, [email, password], (err, result) => {

        if (err) throw err;
        else {
            if (req.query.email == '' || req.query.password == '') {
                console.log("enter complete requirements;");
                res.render('login', { require: true });
            }
            // if user not found
            else if (result.length <= 0) {
                console.log("not match");
                res.render('login', { valid_e_p: true });
            }
            else { // if user found 
                console.log("login successfully!");
                let userEmail = req.query.email;
                if (req.query.security == 'admin') {
                    console.log("admin login successfully!");
                    res.render('admin_page', { mesg: true, userEmail });
                }
                else
                    res.render('display_user', { mesg: true, userEmail });
            }
        }
    })
});






//DELETE DATA  api call
app.get('/delete/(:id)', (req, res) => {
    console.log("id check=" + req.params.id);
    let UserId = req.params.id;
    var qry_delete = `DELETE FROM registration WHERE id = ${UserId}`;
    mysql.query(qry_delete, (err, result) => {
        if (err) throw err;
        console.log("deleted successfully!");
        // res.send("deleted successfully! ID ="+id)
        res.redirect('/view');
    });

});



//edit data api call
app.get('/update/:id', function (req, res, next) {
    var UserId = req.params.id;
    var sql = `SELECT * FROM registration WHERE id=${UserId}`;
    mysql.query(sql, function (err, data) {
        if (err) throw err;
        console.log("fetching data: ");
        console.log(data);
        res.render('update_data', { title: 'User List', new_data: data });
    });
});




//UPDATE DATA api call
app.get('/save_data', function (req, res, next) {
    const { id ,name, email, phone, address, password, c_password } = req.query;
    var UserId = req.query.id; 
    let qry = "select * from registration where phone = ? or email = ?";
    mysql.query(qry, [id, email, phone], (err, result) => {

        if (err) throw err;
        else {
            console.log("new data update email: " + req.query.email);
            console.log("new data update id: " + req.query.id);
            if (req.query.email == '' || req.query.phone == '' || req.query.name == '' || req.query.address == '' || req.query.password == '' || req.query.c_password == '') {
                console.log("enter complete requirements;");
                res.render('update_data', { require: true });
            }
            // else if (result.length > 0) {
            //     console.log("enter unique data;");
            //     return res.render('update_data', { mesg_repeat: true });
            // }
            else if (req.query.password !== req.query.c_password) {
                console.log('enter same password!');
            }
            else {
                console.log("update detect");
                let qry2 = `UPDATE registration SET id=?, Name=?,Email=?,Phone=?,Address=?,Password=? WHERE id=+${UserId}`;
                mysql.query(qry2, [id, name, email, phone, address, password], (err, result2) => {
                    if (err) throw err;
                    // console.log(result2);
                    console.log('update successfully!');   
                    res.redirect('/view');
                });
                
            }
        }

    });
});


















//HOME PAGE
app.get('/', (req, res) => {
    res.send("hello home backend");
    // res.render('/');
});


app.get('save_data', async(req, res) => {
    res.send("hello save backend");
})

//REGISTRATION PAGE
app.get('/register', (req, res) => {
    res.send("hello register backend");
    // res.render('register');
});

//LOGIN PAGE
app.get('/login', (req, res) => {
    res.send("hello login backend");
    // res.render('login');
});

//USER PAGE
app.get('/display_user', (req, res) => {
    res.send("hello display_user  backend");
    // res.render('display_user');
});

//ADMIN PAGE
app.get('/admin_page', (req, res) => {
    res.send("hello admin_page  backend");
    // res.render('admin_page');
});

//Update data
app.get('/update_data', (req, res) => {
    res.send("hello update_data  backend");
    // res.render('update_data');
});









//create server
app.listen(port, (err) => {
    if (err) throw err;
    console.log('listen successfully at port:  ', port)
})