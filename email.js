var emailApp = {
  name: 'Gmail',
  mailboxes: [
    'primary',
    'social',
    'promotions',
    'work',
    'personal',
    'spam',
    'trash',
  ],
  contacts: [
    {
      name: 'Joe K',
      email: 'kula@dsp.com',
      phone: 1234567890,
    },
    {
      name: 'Nate',
      email: 'ritter123@gmail.com',
      phone: 9876543214,
    },
    {
      name: 'Joe H',
      email: 'hodakievic584@gmail.com',
      phone: 4938509739,
    },
  ],
  incoming_emails: [
    {
      subject: 'Entry Level Jobs',
      sender: 'linkedin.com',
      length: 5302,
      date_recieved: '2018-10-06',
      time_recieved: '10:31:05',
      text: 'Here are some entry level positions to apply to:',
    },
    {
      subject: 'Sales Projections',
      sender: 'your_boss@workemail.com',
      length: 2033,
      date_recieved: '2018-10-05',
      time_recieved: '09:45:07',
      text: 'Send me next quarter\'s sales projections',
    }
  ],
  outgoing_emails: [
    {
      subject: 'Sales Projections',
      recipient: 'your_boss',
      text: 'Here are the sales projections',
      status: 'sent'
    },
    {
      subject: 'Re: Entry Level Jobs',
      recipient: 'linkedin job poster',
      text: '',
      status: 'draft',
    },
  ]

}

console.log(emailApp.mailboxes.join(', '));
emailApp.contacts.forEach(function(item, index){
  console.log(item.email);
})
console.log(emailApp.incoming_emails[1].text);
emailApp.outgoing_emails[1].status = 'sent';
console.log(emailApp.outgoing_emails[1].status);
emailApp.outgoing_emails[2] = {
  subject: 'Updated Sales Projections',
  recipient: 'your_boss',
  text: 'Here are the updated sales projections',
  status: 'draft',
}

console.log(emailApp.outgoing_emails[2]);

for (var i of emailApp.outgoing_emails){
  console.log(i);
}

for (var i in emailApp){
  console.log(i);
}
