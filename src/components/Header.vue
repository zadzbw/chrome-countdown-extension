<template>
  <div :class="$style.header">
    <slot />
  </div>
</template>

<style module>
.header {
  @apply flex items-center mb-2 h-8;
}
</style>
