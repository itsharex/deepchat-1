<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

interface Props {
  activeTab: 'servers' | 'prompts' | 'resources'
}

interface Emits {
  (e: 'update:activeTab', value: 'servers' | 'prompts' | 'resources'): void
}

defineProps<Props>()
defineEmits<Emits>()

const { t } = useI18n()

const tabs = [
  { id: 'servers' as const, label: 'settings.mcp.tabs.servers', icon: 'lucide:server' },
  { id: 'prompts' as const, label: 'settings.mcp.tabs.prompts', icon: 'lucide:message-square' },
  { id: 'resources' as const, label: 'settings.mcp.tabs.resources', icon: 'lucide:folder' }
]
</script>

<template>
  <div class="sticky top-0 z-10 backdrop-blur-sm border-b border-border/50">
    <div class="px-4 py-1">
      <nav class="flex items-center justify-center">
        <div class="flex items-center space-x-6">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="[
              'group flex items-center px-1 py-1.5 text-xs font-medium transition-all duration-300 ease-out',
              'hover:text-foreground',
              activeTab === tab.id
                ? 'text-foreground'
                : 'text-muted-foreground/70 hover:text-muted-foreground'
            ]"
            @click="$emit('update:activeTab', tab.id)"
          >
            <Icon
              :icon="tab.icon"
              :class="[
                'mr-2 h-3.5 w-3.5 transition-all duration-300',
                activeTab === tab.id ? 'text-primary' : 'group-hover:text-foreground'
              ]"
            />
            <span class="relative">
              {{ t(tab.label) }}
              <div
                :class="[
                  'absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 ease-out',
                  activeTab === tab.id
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                ]"
              />
            </span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>
