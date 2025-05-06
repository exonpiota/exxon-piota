from flask import Flask, request
import smtplib

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.form
    msg = f"New message from {data['email']}:\n\n{data['message']}"
    
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login('reaganjones025@gmail.com', 'Fox#EeAGbk#0X') 
        server.sendmail('reaganjones025@gmail.com', 'reaganjones025@gmail.com', msg)
    
    return 'Message sent!'

if __name__ == '__main__':
    app.run(ssl_context='adhoc')
