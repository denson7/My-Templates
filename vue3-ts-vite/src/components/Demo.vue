<template>
  <div>{{ userStore.name }}</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
// 通过 actions 去修改
userStore.setName('Lily')
</script>
