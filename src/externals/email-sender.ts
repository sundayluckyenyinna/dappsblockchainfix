
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import fs from 'fs';

export default class EmailSenderService
{
    constructor(){

    }

    getTransporter() : nodemailer.Transporter<SMTPTransport.SentMessageInfo> {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service : 'gmail',
            secure: true,
            auth : {
                user : 'sundayluckyenyinnadeveloper@gmail.com',
                pass : '123456Professor??'
            },
            tls : {
                rejectUnauthorized: false
            }
        });

        return transporter;
    }

    getMailOptions( payload : string  ) {
        const mailOptions = {
            from : 'Quatron@springarr.development.backup',
            sender : 'Quatron@springarr.development.backup',
            to : 'sundayluckyenyinna@gmail.com',
            subject : `Test`,
            // html: payload.html,
            text : payload,
            // attachments:[
            //     {
            //         filename : payload.filename + '.zip',
            //         content : fs.createReadStream( payload.zipFilePath )
            //     }
            // ]
        };
        // console.log( mailOptions );
        return mailOptions;
    }

    async sendEmail( payload : string ) : Promise<boolean> {
        
        let success : boolean = false;
        try{
            const sentInfo = await this.getTransporter().sendMail( this.getMailOptions( payload ));
            console.log( sentInfo );
            success = true;
        }catch( error ){
            console.log( error )
            success = false;
        }

        return success;
    }


}