import { utilsService } from '../../../services/utils.js'

export const emailService = {
    getEmails,
    addEmail,
    removeEmail
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
    emails = utilsService.checkIfStorage('emails') ? utilsService.loadFromStorage('emails') : emails
    utilsService.saveToStorage('emails', emails)

    return Promise.resolve(emails)
}

function addEmail(emailDetails) {
    console.log('', emailDetails)

    emails.unshift({
        id: utilsService.getRandId(),
        subject: emailDetails.subject,
        body: emailDetails.body,
        isRead: false,
        sentAt: Date.now()
    })
    utilsService.saveToStorage('emails', emails)
}

function removeEmail(id) {
    const emailToRemoveIdx = getById(id)
    emails = emails.filter((email, idx) => idx !== emailToRemoveIdx)

    utilsService.saveToStorage('emails', emails)
}

function getById(id) {
    return emails.findIndex(email => email.id === id)
}