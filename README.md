# slack-notifier

this is a very simple small pckage at the time. all you need is to install the package:

```bash
npm i slack-hook-notifier
```

import the library in your code:

```javascript
var notify_slack = require('slack-hook-notifier');
notify("tessst notification.", "bug");
```

the first argument is the text of the notification,
the second argument is the status of the notification.

------

there are five main statuses you can use:

* bug
* alert
* note
* success