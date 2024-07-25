// Next API routing 

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_API,
  server: "us22",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}


