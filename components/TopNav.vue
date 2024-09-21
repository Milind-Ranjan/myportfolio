<template>
  <nav class="mx-auto h-10 w-full rounded-2xl bg-primary bg-opacity-30 p-8 shadow-md shadow-blue-600 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500 md:w-4/5">
    <ul class="flex h-full items-center justify-around font-bold">
      <li>
        <NuxtLink
          class="nav-link"
          to="/"
          active-class="active-link"
        >Home</NuxtLink>
      </li>
      <span class="h-8 border-2 border-yellow-100"></span>
      <li>
        <NuxtLink
          class="nav-link"
          to="/projects"
          active-class="active-link"
        >Projects</NuxtLink>
      </li>
      <span class="h-8 border-2 border-yellow-100"></span>
      <li>
        <NuxtLink
          class="nav-link"
          to="/blog"
          active-class="active-link"
        >Blog</NuxtLink>
      </li>
      <span class="h-8 border-2 border-yellow-100"></span>
      <li>
        <NuxtLink
          class="nav-link contact-link"
          to="/contact"
          active-class="active-link"
        >Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-link {
  color: white;
  position: relative;
  font-size: 1.1rem;
  transition: transform 0.3s, color 0.3s, font-size 0.3s;
  overflow: hidden;
}

.nav-link:hover {
  color: #ffd700; /* Golden color on hover */
  font-size: 1.5rem; /* Increase font size on hover */
  transform: scale(1.07); /* Slightly grow the text */
}

.nav-link.active-link {
  color: #ffd700; /* Golden color for active state */
  font-size: 1.5rem; /* Increase font size for active state */
}

.contact-link {
  background-color: rgba(255, 165, 0, 0.1); /* Slightly different background for contact link */
}

.contact-link:hover {
  background-color: rgba(255, 165, 0, 0.2); /* Darker background on hover for contact link */
}
</style>