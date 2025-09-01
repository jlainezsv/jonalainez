<script setup lang="ts">
import { useRoute } from 'vue-router'

// IMPORTA los componentes individuales
import ProjectBoxlang from './portfolio/project-boxlang.vue'
import ProjectJsTours from './portfolio/project-jstours.vue'
import ProjectImage from './portfolio/project-image.vue'
import ProjectBcnext from './portfolio/project-bcnext.vue'
import ProjectITB23 from './portfolio/project-itb23.vue'

// Mapea los slugs con los componentes correspondientes
const projectComponents: Record<string, any> = {
  'project-boxlang': ProjectBoxlang,
  'project-jstours': ProjectJsTours,
  'project-image': ProjectImage,
  'project-bcnext': ProjectBcnext,
  'project-itb23': ProjectITB23,
};

const route = useRoute()
const slug = route.params.slug
//console.log('Slug is:', slug)

const CurrentProjectComponent = typeof slug === 'string' && projectComponents[slug] ? projectComponents[slug] : null;

console.log('Component:', CurrentProjectComponent)

</script>

<!-- <script setup lang="ts">
import { useRoute } from 'vue-router'
import ProjectBoxLang from './portfolio/project-boxlang.vue'
import ProjectJsTours from './portfolio/project-jstours.vue'

const route = useRoute()
//const slug = route.params.slug
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug || ''
console.log('Slug is:', slug)

const projectComponents = {
  boxlang: ProjectBoxLang,
  jstours: ProjectJsTours,
  // otros proyectos...
}

const CurrentProjectComponent = projectComponents[slug] || null
</script> -->
<template>
  <div class="portfolio-details">
    <component :is="CurrentProjectComponent" v-if="CurrentProjectComponent" />
    <p v-else>Proyecto no encontrado.</p>
  </div>
</template>