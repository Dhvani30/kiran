e(".js-contact-form").validate({
  submitHandler: function (a) {
    !(function (a) {
      var i = e("#form_name").val(),
        t = e("#form_email").val(),
        s = e("#form_msg").val();

      // Set the Google Apps Script Web App URL
      var webAppUrl =
        "https://script.google.com/macros/s/AKfycbw70ifV5DMH0m8rMZIQ31v0_l2xipQpxjod-A1kBhRTIxLCmRwjF13tTFdK4yBONUTM/exec"; // Replace with your Web App URL

      // Create a JSON payload with form data
      var payload = {
        name: i,
        email: t,
        message: s,
      };

      // Send the form data to the Google Apps Script
      fetch(webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.text())
        .then((message) => {
          console.log(message); // Should log "Form submission received!"

          // Show loading indicator and clear messages
          e(a).find(".form-btn").addClass("loading");
          e(a).find(".form-error, .form-success").remove();

          // Success message after form submission
          e(a).append(
            '<div class="form-success">Your message has been sent! Check your Google Sheet for the submission.</div>'
          );
          e(a).find(".form-btn").removeClass("loading");
        })
        .catch((error) => console.error("Error:", error));
    })(a);
  },
});
