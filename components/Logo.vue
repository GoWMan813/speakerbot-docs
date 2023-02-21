<script lang="ts" setup>
</script>

<template>
  <div class="logo">
    <img src="https://streamer.bot/twitchspeaker/logo.svg" width="26" />
    <span>Speaker.bot <span>Docs</span></span>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}

.logo > span {
  font-weight: var(--fontWeight-light);
  font-size: var(--fontSize-xl);
  color: var(--color-gray-300);
  margin-left: .5rem;
}

.logo > span > span {
  font-weight: var(--fontWeight-normal);
  color: var(--color-gray-100);
}
</style>