import { utilsService } from '../../../services/utils.js'

export const emailService = {
    getEmails,
    saveEmail
}

let emails = [
    {
        id: utilsService.getRandId(),
        subject: 'subject',
        body: 'hello im an email',
        isRead: false,
        sentAt: utilsService.getTimeStamp('26/8/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'another sub',
        body: 'roei clean ur nose',
        isRead: false,
        sentAt: utilsService.getTimeStamp('15/12/1995')
    },
    {
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: utilsService.getTimeStamp('7/7/2017')
    },
    {
        subject: 'date check?',
        body: 'Pick up!',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    }
]

function getEmails() {
    emails = utilsService.loadFromStorage('emails') || emails
    utilsService.saveToStorage('emails', emails)

    return Promise.resolve(emails)
}

function saveEmail(email) {
    var currTimeStamp = Date.now()
    // email.subject
    // email.body
    emails.unshift({
        id: utilsService.getRandId(),
        subject: 'NEW EMAIL',
        body: 'hello im NEW email',
        isRead: false,
        sentAt: Date.now()
    })
    utilsService.saveToStorage('emails', emails)
}