import { Notifications } from "./observables/notifications";
import { SMSNotification } from "./observers/sms-notifications";
import { EmailNotification } from "./observers/email-notifications";

const notifications = new Notifications();

const sms = new SMSNotification(notifications);
const email = new EmailNotification(notifications);

notifications.setState("Count 1");
notifications.setState("Count 2");
