import { isIOS, isAndroid, isMobile, isTablet } from 'react-device-detect';

export const sendEmail = () => {
  const email = "saibalkole@gmail.com";
  const subject = "Job Opportunity Discussion";
  const body = "Hi, I came across your portfolio and would like to discuss a job opportunity with you.";

  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const isMobileOrTablet = isMobile || isTablet;

  if (isMobileOrTablet && (isIOS || isAndroid)) {
    if (navigator.vibrate) navigator.vibrate(100);
    window.location.href = mailtoURL;
  } else {
    window.open(gmailURL, "_blank");
  }
};
