<template>
  <div>
    <HeroHero3 />
    <FAQFAQ4 />
    <FeaturesFeatures1 />
    <ForgetPasswordForgetPassword3 />
    <SignupSignup3 />
    <LoginLogin3 />
    <TestimonialsTestimonials1 />
    <div
      class="py-10 flex flex-col space-y-8 justify-center items-center min-h-screen bg-gray-100"
    >
      <PricingCard1
        title="Basic Plan"
        :price="19.99"
        :features="[
          '5 Users',
          '10GB Storage',
          'Basic Support',
          'Email Notifications',
        ]"
        buttonText="Choose Plan"
      />
      <PricingCard2
        title="Pro Plan"
        :price="49.99"
        :features="[
          '10 Users',
          '50GB Storage',
          'Priority Support',
          'Email & SMS Notifications',
        ]"
        buttonText="Choose Plan"
      />

      <PricingCard3
        title="Enterprise Plan"
        :price="99.99"
        :features="[
          'Unlimited Users',
          'Unlimited Storage',
          '24/7 Support',
          'Email, SMS & Phone Notifications',
        ]"
        buttonText="Choose Plan"
        isPopular
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
