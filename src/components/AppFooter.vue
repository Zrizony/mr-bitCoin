<template>
  <section class="main-container footer-wrapper">
    <div class="flex space-between align-center main-footer">
      <div class="flex footer-left">
        <span class="logo">Mr-Bitcoin</span>
        <span>© 2022 Mr-Bitcoin</span>
      </div>
      <div class="flex social-network">
        <a href="" target="_blank">Facebook</a>
        <a href="" target="_blank">Github</a>
        <a href="" target="_blank">LinkedIn</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/setup/variables.scss';

// .main-footer {
//   height: 70px;
//   background-color: $clr7;
// }
// .footer-left {
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   .logo {
//     color: $clr8;
//     font-size: 1.5rem;
//     font-weight: bold;
//   }
// }
// .social-network {
//   gap: 2em;
// }

.footer-wrapper {
  height: 70px;
  background-color: $clr7;

  .main-footer {
    font-size: 0.7rem;
    .footer-left {
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .logo {
        color: $clr8;
        font-size: 1rem;
        font-weight: bold;
        padding-right: 5%;
      }
    }

    .social-network {
      gap: 2em;
    }
  }
}
</style>
