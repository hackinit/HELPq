Tickets = new Meteor.Collection("tickets");
Announcements = new Meteor.Collection("announcements");
Settings = new Meteor.Collection("settings");

Meteor.subscribe("userData");

Meteor.subscribe("activeTickets");

Meteor.subscribe("allAnnouncements");

Meteor.subscribe("mentorsOnline");

Meteor.subscribe("settings");

moment.updateLocale('en', {
    relativeTime : {
        future: "%s",
        past:   "%s 前",
        s  : '几秒',
        ss : '%d 秒',
        m:  "1 分钟",
        mm: "%d 分钟",
        h:  "1 小时",
        hh: "%d 小时",
        d:  "1 天",
        dd: "%d 天",
        M:  "1 月",
        MM: "%d 月",
        y:  "1 年",
        yy: "%d 年"
    }
});
