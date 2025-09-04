<template>
  <div class="header">
    <div class="header-container">
      <h1>Welcome to <span>Ask Islam</span></h1>
      <h2 id="slogan"></h2>

      <a id="scrollBtn" class="btn-read-more">Read more</a>
    </div>
  </div>

  <section>
    <div class="container">
      <div class="child">
        <img :src="alharam" alt="" />
      </div>
      <div class="child">
        <h3>Welcome to AskIslam: Your Source for Reliable Understanding</h3>
        <p>Greetings and welcome to AskIslam, a dedicated online space committed to fostering genuine understanding and knowledge about the religion of Islam. Whether you are seeking to explore Islam with an open mind, have questions, or engage in respectful dialogue, you've arrived at a platform designed to provide accurate and insightful information.</p>

        <h3>Our Purpose: Bridging Understanding through Knowledge</h3>
        <p>AskIslam was founded with a singular mission: to serve as a reliable source of information on Islam. We recognize the importance of promoting understanding in an interconnected world, and our platform is designed to bridge the gap for individuals curious about Islam.</p>

        <h3>What Sets Us Apart: Trustworthy, Respectful, and Open-Minded</h3>
        <p>What distinguishes AskIslam is our unwavering commitment to accuracy and respect. Our content is meticulously curated to provide reliable insights into the beliefs, practices, and history of Islam. We welcome questions from those new to the faith, as well as inquiries from individuals seeking to engage in meaningful conversations.</p>
      </div>
    </div>

    <div class="container reversed">
      <div class="child">
        <h3>For the Curious Minds and Inquisitive Souls</h3>
        <p>Whether you're here to explore the beauty of Islamic teachings, challenge preconceptions, or simply satisfy your curiosity, AskIslam is a space where genuine inquiry is not only accepted but encouraged. We understand the power of knowledge to dispel misconceptions and build bridges of understanding.</p>

        <h3>A Community of Thoughtful Engagement</h3>
        <p>AskIslam is not just a repository of information; it's a vibrant community. Engage in discussions, pose your questions, and benefit from the diverse perspectives within our community. We encourage thoughtful conversations that promote mutual respect and a deeper understanding of Islam.</p>

        <h3>For Those Seeking Understanding and Those Ready to Challenge</h3>
        <p>AskIslam welcomes individuals from all walks of life, including those who may approach with skepticism or a desire to challenge the tenets of Islam. We believe that respectful dialogue is a powerful catalyst for dispelling misconceptions and fostering genuine understanding. At AskIslam, we embrace diversity of thought and encourage an open-minded exploration of different perspectives.</p>
      </div>
      <div class="child">
        <img :src="alharam" alt="" />
      </div>
    </div>


    <div class="container">
      <div class="child">
        <img :src="alharam" alt="" />
      </div>
      <div class="child">
        <h3>No Room for Hate, Only Genuine Inquiry</h3>
        <p>In the spirit of fostering constructive conversations, AskIslam maintains a strict policy against any form of hate speech or derogatory language. Our aim is to create a space where individuals, regardless of their beliefs, can engage in a respectful exchange of ideas. We firmly believe that constructive dialogue is the key to breaking down barriers and building bridges of understanding.</p>

        <h3>Explore, Learn, and Engage</h3>
        <p>Navigate through our comprehensive articles covering various aspects of Islam, from its core beliefs to historical contributions. Our platform is designed to be user-friendly, providing you with easy access to the information you seek.</p>

        <h3>Your Feedback Matters</h3>
        <p>As we embark on this journey together, we value your feedback. If you have suggestions, questions, or if there's a specific topic you'd like us to cover, feel free to reach out. AskIslam is a dynamic platform, shaped by the collective engagement of our community.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import alharam from "/assets/images/alharam.avif";
</script>

<style>
@import '@/assets/styles/Welcome.css';

</style>
