import { utilsService } from '../../../services/utils.js'

export const emailService = {
    getEmails,
    addEmail,
    removeEmail,
    emailRead
}

let emails = [
    {
        subject: 'Wassap?',
        from: 'Roei Arazi',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit omnis, eius possimus quam qui perferendis natus ipsum deserunt, ea veniam mollitia repellat ipsam, dolores laudantium temporibus maxime doloremque. Corporis asperiores commodi dolores vero. Sit corrupti, totam quas quia enim nobis, veritatis, dolorem porro reprehenderit laboriosam cum numquam tempora. Quaerat, enim.',
        isRead: false,
        sentAt: utilsService.getTimeStamp('7/7/2017')
    },
    {
        id: utilsService.getRandId(),
        from: 'Roei Arazi',
        subject: 'subject',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius asperiores nemo. Eius ex numquam expedita tempore maxime pariatur delectus soluta voluptate cum quo exercitationem illum deserunt, voluptas quis, modi tempora adipisci nulla, laborum consequuntur? Dicta iusto at beatae placeat architecto illo quaerat repudiandae debitis, aut nostrum doloremque nemo ad, doloribus veniam similique sed sequi, facere esse. Sequi, quo nam?',
        isRead: false,
        sentAt: utilsService.getTimeStamp('26/8/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'another sub',
        from: 'Liam Zety',
        body: 'roei clean ur nose',
        isRead: true,
        sentAt: utilsService.getTimeStamp('15/12/1995')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    }
    ,
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        isRead: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Liam Zety',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
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
        from: 'Liam Zety',
        subject: emailDetails.subject,
        body: emailDetails.body,
        isRead: false,
        sentAt: Date.now()
    })
    utilsService.saveToStorage('emails', emails)
}

function removeEmail(id) {
    const emailToRemoveIdx = getIdxByIx(id)
    emails = emails.filter((email, idx) => idx !== emailToRemoveIdx)

    utilsService.saveToStorage('emails', emails)
}

function emailRead(emailRead) {
    emails.forEach((email) => {
        if (email.id === emailRead.id) {
            if (email.isRead) return
            email.isRead = !email.isRead
        }
    })
}

function getIdxByIx(id) {
    return emails.findIndex(email => email.id === id)
}