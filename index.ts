import { Notifications } from "./notifications-observer/notifications";
import { SMSNotification } from "./notifications-observer/sms-notifications";
import { EmailNotification } from "./notifications-observer/email-notifications";

const notifications = new Notifications();

const sms = new SMSNotification(notifications);
const email = new EmailNotification(notifications);

notifications.setState("Count 1");
notifications.setState("Count 2");
