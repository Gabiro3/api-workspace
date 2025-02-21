// Import Resend package
import { Resend } from 'resend';

// Create an instance of Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define a type for the email parameters
interface EmailParams {
    userEmail: string;
    subject: string;
    message: string;
}

// Define the notifyUser function
async function notifyUser({ userEmail, subject, message }: EmailParams): Promise<void> {
    try {
        // Send email using Resend
        const response = await resend.emails.send({
            from: 'no-reply@techriserwanda.org',  // Sender's email address
            to: userEmail,  // Recipient's email address
            subject: subject,  // Subject of the email
            html: message,  // HTML message body
        });
        
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export { notifyUser };

