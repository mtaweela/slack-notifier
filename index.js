var axios = require("axios")

var { SLACK_WEBHOOK_URL } = process.env

var notify_slack = function (text, status) {
    var state = {
        bug: {
            icon_emoji: ':bomb:',
            username: 'Bug'
        },
        alert: {
            icon_emoji: ':warning:',
            username: 'Alert'
        },
        note: {
            icon_emoji: ':bulb:',
            username: 'Note'
        },
        success: {
            icon_emoji: ':trophy:',
            username: 'Hoorah'
        }
    }

    data = {
        text,
        icon_emoji: state[status].icon_emoji,
        username: state[status].username
    }

    axios
        .post(SLACK_WEBHOOK_URL, data)
        .then(function (response) { })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = notify_slack
