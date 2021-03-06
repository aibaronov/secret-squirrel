require('dotenv').config();
const {CONNECTION_STRING} = process.env;
const { Sequelize } = require('sequelize');
const bcryptjs = require('bcryptjs');

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`

        create table users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE,
            email VARCHAR(50),
            password VARCHAR(200)
        );

        create table messages(
            id SERIAL PRIMARY KEY,
            sender VARCHAR(50),
            message VARCHAR(500),
            nVal INTEGER,
            user_id INTEGER REFERENCES users(id)
            );   
         `).then(()=> {
            console.log("DB SEEDED!");
            res.sendStatus(200);
        }).catch((err) => {
            console.log("Error seeding DB", err);
        })
    },
    getMessages: (req, res) => {
        console.log("get messages for this user: ", req.body);
        console.log('Getting messages...');
        const {username} = req.body;
        sequelize.query(`
            SELECT messages.id, sender, message, nVal, username FROM messages
            JOIN users ON users.id = messages.user_id
            WHERE username = '${username}';
        `).then(dbRes => {
            res.status(200).send(dbRes[0]);
            console.log(dbRes[0])
        }).catch(err => res.status(400).send(400));
    },

    register: (req, res) => {
        console.log("User attempted to register");
        const {username, email, password} = req.body;
        console.log(username, email, password)
        const salt = bcryptjs.genSaltSync(5);
        const pinHash = bcryptjs.hashSync(password, salt);
        delete req.body.password;
        req.body.passWordHash = pinHash;
        sequelize.query(`
            INSERT INTO users(username, email, password)
            VALUES('${username}', '${email}', '${pinHash}');
        `).then(dbRes => {
            console.log('User added to DB!')
            console.log(dbRes[0][0]);
            res.status(200).send(dbRes[0][0]);
        }).catch(err => {{
            console.log("failed to add user to DB", err.name)}
            res.status(400).send(err.name)
        }
            );
        
    }, 

    login: (req, res) => {
        console.log("User attempted to log in");
        console.log(req.body);

        const {username, password} = req.body;

        sequelize.query(`
            SELECT password FROM users
            WHERE username = '${username}'`)
        .then((dbRes) => {
            console.log(dbRes[0][0])
            const existingPassword = bcryptjs.compareSync
            (password, dbRes[0][0].password);

            console.log(existingPassword);
            if(existingPassword){
                return res.status(200).send(dbRes[0]);
            }
            else{
                return res.status(400).send('Failed to log in');
            }
        }).catch(err => {
            res.status(400).send(err);
        })
    },
    sendMessage: (req, res) => {
        console.log(req.body);
        const {sender, username, encryptedMessage, nVal} = req.body;
        console.log(sender, username, encryptedMessage, nVal);
        let userID = 0;
        sequelize.query(`
            SELECT id FROM users
            WHERE username = '${username}';`)
            .then((dbRes) => {
                console.log(dbRes[0][0]);
                userID = dbRes[0][0].id
                console.log('user id', userID);

                sequelize.query(`
                    INSERT INTO messages(sender, message, user_id, nVal)
                    VALUES('${sender}','${encryptedMessage}', ${userID}, ${nVal});
                    `).then(dbRes => {
                        console.log("message posted to DB")
                        }).catch(err => console.log(err))
                    }).catch(err => {console.log(err)})

        console.log("Message received");
        res.send("Message Received");
    },
    deleteMessage: (req, res) => {
        
        const message_id = req.params.id;
        
        sequelize.query(`
            DELETE FROM messages
            WHERE id = ${message_id};
        `).then(dbRes => {
            res.status(200).send(`Message id ${message_id} deleted`)
        }).catch(err => {res.status(400).send(err)})
    }
};