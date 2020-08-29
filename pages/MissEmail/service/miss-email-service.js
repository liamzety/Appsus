import { utilsService } from '../../../services/utils.js'

export const emailService = {
    getEmails,
    addEmail,
    removeEmail,
    emailRead,
    emailStar,
    sortEmails,
    getAfterSearch,
    toggleRead,
    getEmailsCount
}

let emails = [
    {
        subject: 'No leather in the office, starting tomorrow',
        from: 'Jack Hyde',
        body: "HR just notified me that we have a new employee who starts tomorrow that is allergic to leather. To protect his health and productivity, all leather will be prohibited from the office. This includes bags, shoes, pants, belts, and any other leather accessories. Please leave your leather at home! Thanks for your support.",
        img: '',
        isStar: false,
        isRead: true,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('7/7/2017')
    },
    {
        id: utilsService.getRandId(),
        from: 'Ezio Auditore',
        subject: 'Company-wide Christmas apparel tomorrow',
        body: ' I just got notice from our CMO that we’ll be filming for the company Holiday greeting video tomorrow. All employees are expected to appear in the video, so please wear red and green and any other holiday apparel you own (Santa suits, Christmas sweaters, reindeer noses, and onesies encouraged).',
        img: '',
        isStar: true,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('26/8/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'w/e',
        from: 'Liam Zety',
        body: 'roei clean ur nose',
        img: '',
        isStar: false,
        isRead: true,
        isDeleted: false,
        isDraft: false,
        isSent: true,
        sentAt: utilsService.getTimeStamp('15/12/1995')
    },
    {
        id: utilsService.getRandId(),
        subject: 'date check?',
        from: 'Roei Arazi',
        body: 'About that sweet rice, i dont get whats so good about it... any way call me ',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: true,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    }
    ,
    {
        id: utilsService.getRandId(),
        subject: 'New office policy',
        from: 'Ragnar Lothbrok',
        body: 'This has been a particularly bad flu season, and we’re concerned about how disease affects productivity. After much discussion and review of recent research, leadership has decided to issue an office policy against sneezing. If you need to sneeze, please go to the bathroom to avoid spreading germs and wash your hands after the sneeze. Do not sneeze at your desk! This new policy starts tomorrow. ',
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
        subject: 'Help me keep my eyes well!',
        from: 'Ashley Sobriety',
        body: 'After several years of getting increasingly bad eyes and stronger prescriptions, I’ve finally gotten a diagnosis. My optometrist informed me that I have a condition in which the color black is damaging my eyesight, sort of like an allergy. I’ll be wearing shaded glasses for the next couple of weeks while I undergo treatment. Please refrain from using black on any team documents or presentations (bright colors are okay).',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: true,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2020')
    },
    {
        id: utilsService.getRandId(),
        subject: 'Stupid kyle',
        from: 'Eric Cartman',
        body: 'I demand kyle to be exterminated answer within the day or else.',
        img: '',
        isStar: true,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'Support my nephew!',
        from: 'Inuyasha',
        body: 'Hey friends — My nephew, Adrian, is running the “Fun Run” 5K for charity at his middle school this weekend. He chose to raise money for the Americans Against Constipation Fund (AACF) and is looking for sponsorships. Please consider donating $10-$40 for this important cause! Thanks for contributing.',
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
        from: 'Julius Ceaser',
        body: 'Hi everyone! Starting this week, our supply closet will no longer stock staples, paper clips, or tape, for environmental reasons. For fastening paper, we will provide organic glue. Thanks for helping us reduce our office footprint!',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: true,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'IT Swap',
        from: 'Mark Riptoe',
        body: 'Due to recent security revelations, our office switching to Chromebooks. Tomorrow, you’ll find that your desktop computers have been replaced with the Samsung Chromebook Plus. If you have a company laptop, please exchange it tomorrow morning before getting to work. Thanks to our IT and operations team for organizing the swap.',
        img: '',
        isStar: false,
        isRead: true,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'Improve mental health by switching to tea',
        from: 'Greg Doucette',
        body: 'In light of research about the damaging effects of caffeine on mental health, we’ve decided to switch our coffee to herbal tea. Starting tomorrow, our office manager will brew herbal and black teas, available for free in the micro-kitchen. I encourage you to choose the decaffeinated option :) Coffee will no longer be offered',
        img: '',
        isStar: true,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'Is this a joke?',
        from: 'Liam Zety',
        body: 'FYI, our office manager informed me this morning that there will be a yodeling convention happening tomorrow on the three floors below us. Please bring earplugs or headphones if the noise will bother you.',
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
        subject: 'Draft: b',
        from: 'Julius Ceasar',
        body: 'Draft: e tu brutu?',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: true,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'Draft: blood',
        from: 'Vlad The Impaler',
        body: 'Draft: i need more bl',
        img: '',
        isStar: false,
        isRead: false,
        isDeleted: false,
        isDraft: true,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'Hallway to be nap area',
        from: 'Sylvanas Windrunner',
        body: 'To attract top tech talent and stay competitive in recruiting, company leadership has decided to convert the hallway to a nap area as a perk for employees. You’re welcome to enjoy 20 min-1 hour power naps in the nap area any time of day (pillows provided). Respect your peers by remaining silent in the hallway — no phone calls, conversations, or meetings, please.',
        img: '',
        isStar: false,
        isRead: true,
        isDeleted: true,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'Medalion is humming',
        from: 'Geralt of rivia',
        body: 'Winds howling...',
        img: '',
        isStar: true,
        isRead: false,
        isDeleted: false,
        isDraft: false,
        isSent: false,
        sentAt: utilsService.getTimeStamp('8/1/2010')
    },
    {
        id: utilsService.getRandId(),
        subject: 'Space reorganization',
        from: 'Kim Bok Joo',
        body: 'We’ve decided to reorganize our cubicles to achieve better organizational synergy. According to the recent findings of our McKinsey consultant, reshaping our work area into a pentagonal hive will improve communication and collaboration across teams. We ask that you clear off your desk tomorrow morning to make it easier to move. ',
        img: '',
        isStar: false,
        isRead: true,
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
    const emailsCount = emails.length;
    let emailsRead = 0
    emails.forEach(email => {
        if (email.isRead) emailsRead++
    })
    let percentage = emailsCount / emailsRead
    percentage = (100 / percentage).toFixed(0)
    if (emails.length === 0) percentage = 100
    utilsService.saveToStorage('emails', emails)
    return Promise.resolve({ emails, percentage })
}
function getEmailsCount() {
    return emails.length
}
function addEmail(emailDetails, isaDraft) {
    if (!emailDetails.body && !emailDetails.subject) return
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