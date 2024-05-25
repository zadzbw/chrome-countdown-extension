<template>
  <div :class="$style.content">
    <slot />
  </div>
</template>

<style module>
.content {
  @apply px-3 py-2;
}
</style>
