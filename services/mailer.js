var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://zymonogatariup%40gmail.com:bk2011shinigami@smtp.gmail.com');

exports.sendMail = function(req, res) {  
    console.log('POST /email/send');
    console.log(req.body);
    
    var mailOptions = {
        from: '"vitae curriculum" <zymonogatariup@gmail.com>',
        to: "zombieyael@gmail.com",
        subject: 'New message', 
        text: 'Alguien envio un mensaje desde el curriculum con los siguientes datos \n  Nombre: ' + req.body.name +
        '\n de la compañia: '+ req.body.company + "\n informacion de contacto: " + req.body.info + "\n y el mensaje: " + 
        req.body.message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
        console.log('Message sent: ' + info.response);
    });  
};