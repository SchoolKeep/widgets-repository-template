<script setup lang="ts">
import { inject, ref } from "vue";
import { useCountries } from "./composables/useCountries";
import CountryCard from "./CountryCard.vue";
import { TOP_COUNTRIES_COUNT } from "./constants";
import { WIDGET_HEADER_KEY } from "./types";

const { countries, loading, error } = useCountries();
const header = inject(WIDGET_HEADER_KEY, ref("Vue"));
</script>

<template>
  <section class="vue-widget-section">
    <p class="widget-framework-header">{{ header }}</p>
    <ul v-if="loading" role="status" aria-label="Loading country data" class="country-list">
      <li v-for="n in TOP_COUNTRIES_COUNT" :key="n" class="country-item country-item--skeleton">
        <div class="country-flag country-flag--skeleton" />
        <div class="country-details">
          <div class="country-skeleton-line country-skeleton-line--name" />
          <div class="country-skeleton-line country-skeleton-line--meta" />
        </div>
      </li>
    </ul>
    <div v-else-if="error" role="alert" class="country-error">
      <p>{{ error }}</p>
    </div>
    <ul v-else class="country-list">
      <CountryCard v-for="c in countries" :key="c.name" :country="c" />
    </ul>
  </section>
</template>
