<template>
  <div
    :class="{ 'translate-x-1 translate-y-1px rotate-45': hideMenu }"
    class="w-full h-1 bg-white block rounded-md transform-gpu origin-left transition-all duration-300 ease-in-out"
  ></div>
  <div
    :class="{ '-translate-x-full opacity-0': hideMenu }"
    class="w-full h-1 bg-white block rounded-md transform-gpu transition-all duration-300 ease-in-out"
  ></div>
  <div
    :class="{ 'translate-x-1 -rotate-45': hideMenu }"
    class="w-full h-1 bg-white block rounded-md transform-gpu origin-left transition-all duration-300 ease-in-out"
  ></div>
</template>
