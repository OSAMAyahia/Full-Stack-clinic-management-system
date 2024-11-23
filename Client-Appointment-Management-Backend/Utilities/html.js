const mjml = require('mjml');

const generatePasswordResetTemplate = (name, resetCode) => {
  return mjml(`
  <mjml>
    <mj-head>
      <mj-title>Password Reset</mj-title>
      <mj-preview>Your Password Reset Code</mj-preview>
      <mj-attributes>
        <mj-all font-family="Arial, sans-serif" />
        <mj-text font-size="16px" color="#555555" />
        <mj-button background-color="#4CAF50" color="#ffffff" border-radius="5px" padding="10px 25px" />
      </mj-attributes>
    </mj-head>
    <mj-body background-color="#f3f4f6">
      <mj-section background-color="#001E2B" padding="20px" border-radius="10px">
        <mj-column>
          <mj-text font-size="20px" color="#fdfefe" font-weight="bold" padding-bottom="10px">
            Password Reset Request
          </mj-text>
          <mj-text color="#fdfefe">
            Hello ${name},
            <br /><br />
            We received a request to reset the password for your account. If you requested this change, please use the code below to complete the process:
          </mj-text>
          <mj-text font-size="24px" color="#fdfefe" font-weight="bold" align="center">
            Reset Code: ${resetCode}
          </mj-text>
          <mj-text color="#fdfefe">
            If you didn’t request a password reset, you can safely ignore this message. Your account remains secure.
          </mj-text>
          <mj-divider border-color="#dddddd" />
          <mj-text font-size="12px" color="#2ecc71" align="center">
            Best regards, <br/> Osama Support Team
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
  `).html;
};

module.exports = generatePasswordResetTemplate;
