<template>
  <div class="next-steps">
    <h2 class="my-5 text-center text-2xl font-semibold">What can I do next?</h2>

    <div class="flex flex-col md:flex-row justify-between mb-8">
      <div class="md:w-5/12 mb-4">
        <h6 class="mb-3 text-lg font-semibold">
          <a href="https://auth0.com/docs/connections" class="text-blue-500 hover:underline">
            <font-awesome-icon icon="link" class="mr-2" />Configure other identity providers
          </a>
        </h6>
        <p class="text-gray-600">Auth0 supports social providers such as Facebook, Twitter, Instagram, and more than 100 others. Enterprise providers like Microsoft Office 365, Google Apps, and Azure are also supported. You can also use any OAuth2 Authorization Server.</p>
      </div>

      <div class="md:w-5/12 mb-4">
        <h6 class="mb-3 text-lg font-semibold">
          <a href="https://auth0.com/docs/multifactor-authentication" class="text-blue-500 hover:underline">
            <font-awesome-icon icon="link" class="mr-2" />Enable Multifactor Authentication
          </a>
        </h6>
        <p class="text-gray-600">Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported.</p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between">
      <div class="md:w-5/12 mb-4">
        <h6 class="mb-3 text-lg font-semibold">
          <a href="https://auth0.com/docs/anomaly-detection" class="text-blue-500 hover:underline">
            <font-awesome-icon icon="link" class="mr-2" />Anomaly Detection
          </a>
        </h6>
        <p class="text-gray-600">Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity and block further login attempts.</p>
      </div>

      <div class="md:w-5/12 mb-4">
        <h6 class="mb-3 text-lg font-semibold">
          <a href="https://auth0.com/docs/rules" class="text-blue-500 hover:underline">
            <font-awesome-icon icon="link" class="mr-2" />Learn About Rules
          </a>
        </h6>
        <p class="text-gray-600">Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HomeContent"
};
</script>
