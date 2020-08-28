import { utilsService } from '../../../services/utils.js'

export const emailService = {
    getEmails,
    addEmail,
    removeEmail,
    emailRead,
    emailStar,
    sortEmails,
    getAfterSearch,
    toggleRead
}

let emails = [
    {
        subject: 'Wassap?',
        from: 'Roei Arazi',
        body: "Need a day at the beach?",
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('7/7/2017')
    },
    {
        id: utilsService.getRandId(),
        from: 'Roei Arazi',
        subject: 'subject',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius asperiores nemo. Eius ex numquam expedita tempore maxime pariatur delectus soluta voluptate cum quo exercitationem illum deserunt, voluptas quis, modi tempora adipisci nulla, laborum consequuntur? Dicta iusto at beatae placeat architecto illo quaerat repudiandae debitis, aut nostrum doloremque nemo ad, doloribus veniam similique sed sequi, facere esse. Sequi, quo nam?',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('26/8/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'another sub',
        from: 'Liam Zety',
        body: 'roei clean ur nose',
        img: '',
        isStar: false,
        isRead: true,
        sentAt: utilsService.getTimeStamp('15/12/1995')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    }
    ,
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('1/1/2006')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2020')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    }
]
let isSortedByDate = false
let isSortedByRead = false

function getEmails() {
    emails = utilsService.checkIfStorage('emails') ? utilsService.loadFromStorage('emails') : emails
    utilsService.saveToStorage('emails', emails)
    return Promise.resolve(emails)
}

function addEmail(emailDetails, isaDraft) {

    emails.unshift({
        id: utilsService.getRandId(),
        from: 'Me',
        subject: isaDraft && `Draft: ${emailDetails.subject}` || emailDetails.subject || '<no subject>',
        body: isaDraft && `Draft: ${emailDetails.body}` || emailDetails.body || '<no message>',
        img: emailDetails.img || '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isSent: true,
        isDraft: isaDraft,
        sentAt: Date.now()
    })
    utilsService.saveToStorage('emails', emails)
}

function removeEmail(id) {
    emails.forEach((email, idx) => {
        if (email.id === id) {
            if (!email.isDeleted && !email.isDraft) {
                email.isDeleted = true
            } else if (email.isDeleted && email.isStar) {
                emails.splice(idx, 1)
            }
            else emails.splice(idx, 1)
        }
    })
    utilsService.saveToStorage('emails', emails)
}

function emailRead(emailRead) {

    emails.forEach((email) => {
        if (email.id === emailRead.id) {
            email.isRead = true
        }
    })
    utilsService.saveToStorage('emails', emails)
}
function toggleRead(emailRead) {

    emails.forEach((email) => {
        if (email.id === emailRead.id) {
            email.isRead = !email.isRead
        }
    })
    utilsService.saveToStorage('emails', emails)
}
function emailStar(emailStarred) {
    emails.forEach((email) => {
        if (email.id === emailStarred.id) {
            email.isStar = !email.isStar
        }
    })
    utilsService.saveToStorage('emails', emails)
}
function sortEmails(target) {
    switch (target) {
        case 'read':
            if (isSortedByRead) emails.sort(function (email1, email2) { return email1.isRead - email2.isRead })
            else emails.sort(function (email1, email2) { return email2.isRead - email1.isRead })
            utilsService.saveToStorage('emails', emails)
            isSortedByRead = !isSortedByRead

            break;
        case 'date':
            if (isSortedByDate) emails.sort(function (email1, email2) { return email2.sentAt - email1.sentAt })
            else emails.sort(function (email1, email2) { return email1.sentAt - email2.sentAt })
            utilsService.saveToStorage('emails', emails)
            isSortedByDate = !isSortedByDate

            break;
    }
}
function getAfterSearch(txt) {

    return emails.filter(email => {
        const subject = email.subject.toLowerCase();
        const body = email.body.toLowerCase();
        const from = email.from.toLowerCase();

        return subject.includes(txt) || body.includes(txt) || from.includes(txt)

    })

}

function getIdByIdx(id) {
    return emails.findIndex(email => email.id === id)
}