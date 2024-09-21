<template>
  <section class="px-5 py-12 bg-gray-900">
    <h2
      class="px-5 py-12 text-center text-4xl font-extrabold text-[#fdf9c9] md:text-5xl lg:px-24 lg:text-6xl xl:px-36"
    >
      My Projects
    </h2>
    <div class="grid gap-8 md:grid-cols-2"> <!-- Max 2 columns in a row -->
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative flex flex-col items-start bg-black/30 p-8 rounded-lg shadow-lg hover:bg-black/50 transition-transform transform-gpu hover:scale-105 duration-500"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-10 rounded-lg -z-10"></div>
        <div class="flex items-center mb-6">
          <img :src="project.image" class="w-32 h-32 mr-6 rounded-full border-4 border-blue-500" :alt="project.title" />
          <div>
            <h3 class="text-3xl font-bold text-[#fdf9c9] mb-2">{{ project.title }}</h3>
            <p class="text-[#d2d5da] mb-4 text-lg">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4 ">
              <!-- Dynamic Technology Tags with Hover Effects -->
              <span v-for="tech in project.technologies" :key="tech" class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-300 transition-colors duration-300">
                {{ tech }}
              </span>
            </div>
            <!-- GitHub Link Button in place of 'More Info' -->
            <a
              :href="project.link"
              target="_blank"
              class="inline-flex items-center bg-blue-500 text-gray-900  hover:bg-blue-600 text-lg px-4 py-2 rounded-md font-semibold transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 " fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1.04 1.52 1.04.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.3 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.63.7 1.02 1.59 1.02 2.68 0 3.86-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 6,
          title: "TicTacToe Game",
          description: "This Android app features Tic Tac Toe with offline and online modes. Play locally or connect online using unique game IDs. It includes Firebase integration for real-time chat and game state management.",
          image: "/images/tictactoe.webp",
          link: "https://github.com/Milind-Ranjan/TicTacToe",
          technologies: ["Kotlin", "Android Studio","Firebase Realtime Database","Cloud Firestore"]
        },
        {
          id: 3,
          title: "Bitcoin Predictor",
          description: "BitPredictor is a machine learning project that uses TensorFlow and LSTM to predict Bitcoin prices from historical data, aiding traders and investors in decision-making.",
          image: "/images/bitcoin-predictor.png",
          link: "https://github.com/Milind-Ranjan/BitPredictor",
          technologies: ["Python", "TensorFlow", "Deep Learning","Matplotlib"]
        },
        {
          id: 4,
          title: "Automated Guitar Tuner",
          description: "An Arduino-based project that uses a stepper motor and FFT analysis to automatically tune a guitar. The system captures and analyzes the guitar string’s frequency, adjusts the tuning peg, and ensures each string is perfectly in tune.",
          image: "/images/guitar-tuner.jpeg",
          link: "https://github.com/Milind-Ranjan/Automated-Guitar-Tuner",
          technologies: ["Arduino", "C++", "Stepper Motors","Micro Controller"]
        },
        {
          id: 5,
          title: "MusicApp UI",
          description: "MusicApp-UI is a modern Android app featuring a clean, intuitive interface built with Jetpack Compose. Designed as a UI-only project, it allows users to browse, play music, and manage playlists seamlessly.",
          image: "/images/musicappUI.avif",
          link: "https://github.com/Milind-Ranjan/MusicApp-UI",
          technologies: ["Kotlin", "Android Studio", "UI","Jetpack Compose"]
        },
        // Add more projects as needed
      ]
    };
  }
};
</script>