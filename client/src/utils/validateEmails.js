const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const badEmailsArr = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => emailRegEx.test(email) === false);

  if (badEmailsArr.length) {
      if (badEmailsArr.includes('')) {
          return "Remove the trailing comma or enter another email address."
      }
    return `The following email addresses are invalid: ${badEmailsArr}`;
  }

  return;
};
